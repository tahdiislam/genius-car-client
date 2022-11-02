import React, { useContext, useEffect, useState } from 'react';
import manageOrdersImg from "../../assets/images/manageOrder/manage-order-img.png"
import { UserContext } from '../../Context/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [refresh, setRefresh] = useState(false)
    const { user } = useContext(UserContext)
    // console.log(user);
    // load data from server
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [user?.email, refresh])
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
                                orders.map(order => <OrderRow key={order._id} order={order} setRefresh={setRefresh}/>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;