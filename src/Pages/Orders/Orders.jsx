import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import manageOrdersImg from "../../assets/images/manageOrder/manage-order-img.png"
import { UserContext } from '../../Context/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const { user, logOutUser } = useContext(UserContext)
    // console.log(user);
    // load data from server
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("genius-token")}`
            }
        })
        .then(res =>{
            if(res.status === 401 || res.status === 403)
            {
                return logOutUser()
            }
            return res.json()
        })
        .then(data => setOrders(data))
        .catch(err => console.dir(err))
    }, [user?.email])

    // order delete handler
    const handleDeleteOrder = selectedOrder => {
        const proceed = window.confirm(`Are you sure you want to delete ${selectedOrder.serviceName}`)
        if (proceed) {
            fetch(`http://localhost:5000/orders/${selectedOrder._id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    toast.success("Product deleted successfully.")
                    const remaining = orders.filter(order => order._id !== selectedOrder._id)
                    setOrders(remaining)
                })
                .catch(err => toast.error(err.message))
        }
    }

    // update orders status 
    const handleUpdateOrderStatus = id => {
        // console.log("order update btn clicked in id", id );
        // update order status in database
        fetch(`http://localhost:5000/orders/${id}`,{
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({status: "Approved"})
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                toast.success("Status update successfully.")
                const remainingOrders = orders.filter(o => o._id !== id)
                const approvedOrder = orders.find(o => o._id === id)
                approvedOrder.status = "Approved"
                const newOrders = [approvedOrder, ...remainingOrders]
                setOrders(newOrders)
            } else{
                toast.error("Ops this order is already approved")
            }
        })
        .catch(err => toast.error(err.message))
    }

    return (
        <div>
            <div className='relative'>
                <div className='sliderImg'>
                    <img className='lg:w-full' src={manageOrdersImg} alt="Check out image" />
                </div>
                <h2 className='text-gray-200 text-5xl font-semibold absolute top-1/2 left-12'>
                    Manage All Orders
                </h2>
                <p className='text-red-500 absolute top-60 left-12'><small>Home - Manage All Product.</small></p>
            </div>
            <div>
                <h2 className='text-4xl font-semibold mt-8 ml-'>
                    Your have <span>{orders.length}</span> orders.
                </h2>
                <div className="overflow-x-auto w-full my-20">
                    <table className="table w-full">
                        <tbody>
                            {
                                orders.map(order => <OrderRow key={order._id} order={order} handleDeleteOrder={handleDeleteOrder} handleUpdateOrderStatus={handleUpdateOrderStatus} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;