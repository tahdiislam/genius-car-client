import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const OrderRow = ({ order, setRefresh }) => {
    const [serviceData, setServiceData] = useState({})
    const { service, serviceName, price, customer, email} = order;
    // load service data 
    useEffect( () => {
        fetch(`http://localhost:5000/services/${service}`)
        .then(res => res.json())
        .then(data => setServiceData(data))
    },[service])

    // order delete handler
    const handleDeleteOrder = order => {
        const proceed = window.confirm(`Are you sure you want to delete ${order.serviceName}`)
        if(proceed){
            fetch(`http://localhost:5000/orders/${order._id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                toast.success("Product deleted successfully.")
                setRefresh(true)
                setRefresh(false)
            })
            .catch(err => toast.error(err.message))
        }
    }
    return (
        <tr>
            <th>
                <button onClick={() => handleDeleteOrder(order)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            <img src={serviceData.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">{price}</div>
                    </div>
                </div>
            </td>
            <td>
                {customer}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td><p>22-10-2022</p></td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default OrderRow;