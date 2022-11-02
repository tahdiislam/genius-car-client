import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceItem = ({service}) => {
    const {img, title, price, _id} = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-3xl font-semibold">{title}</h2>
                <h4 className='text-2xl font-semibold text-error'>Price: {price}</h4>
                <div className="card-actions justify-end">
                    <Link to={`/check-out/${_id}`}>
                        <button className="btn btn-ghost text-error"><FaArrowRight /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;