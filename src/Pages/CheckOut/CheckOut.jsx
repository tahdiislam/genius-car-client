import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import checkOutImg from '../../assets/images/checkout/checkout.png';
import { UserContext } from '../../Context/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData()
    const { user } = useContext(UserContext)
    // console.log(service);
    const { title, _id, price, } = service
    // form submit handler
    const handleFormSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`
        const email = user?.email || "unregistered"
        const phone = form.phone.value;
        const message = form.message.value;
        // console.log(form, name, phone, message);

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message,
        }
        // console.log(order);
        if (phone.length < 10) {
            toast.error("Please provide a valid number.")
            return;
        }

        // post order 
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order)
            })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged){
                    form.reset()
                    toast.success("Order added successfully.")
                }
            })
            .catch(err => {
                toast.error(err.message)
            })
    }
    return (
        <div>
            <div className='relative'>
                <div className='sliderImg'>
                    <img className='lg:w-full' src={checkOutImg} alt="Check out image" />
                </div>
                <h2 className='text-gray-200 text-5xl font-semibold absolute top-1/2 left-12'>
                    Check Out
                </h2>
            </div>
            <div>
                <h1 className='text-4xl font-semibold mt-14 ml-24'>Service Name: <span className='text-error'>{title}</span></h1>
                <form onSubmit={handleFormSubmit} action="" className='p-24'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <input type="text" name="firstName" placeholder="First Name" className="input input-bordered input-error w-full" required /><input type="text" name="lastName" placeholder="Last Name" className="input input-bordered input-error w-full" required /><input type="text" name="phone" placeholder="Your Phone" className="input input-bordered input-error w-full" required /><input type="text" defaultValue={user?.email} readOnly name="email" placeholder="Your Email" className="input input-bordered input-error w-full" />
                    </div>
                    <textarea name="message" className="my-6 h-32 textarea textarea-error w-full" placeholder="Your Message" required></textarea>
                    <input type="submit" className='text-gray-800 w-full btn btn-error' value="Order Confirm" />
                </form>
            </div>
        </div>
    );
};

export default CheckOut;