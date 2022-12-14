import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';

const Service = () => {
    const [services, setServices] = useState([])
    // load all services
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mb-12'>
            <div className='text-center'>
                <p className="mb-5 text-xl text-error">Service</p>
                <h1 className='mb-5 text-5xl font-bold'>Our Service Area</h1>
                <p className='w-1/2 mx-auto mb-12'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {services.map(service => <ServiceItem key={service._id} service={service} />)}
            </div>
            <div className='flex justify-center'>
                <button className='btn btn-error btn-outline'>More Services</button>
            </div>
        </div>
    );
};

export default Service;