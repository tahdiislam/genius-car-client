import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import loginImg from "../../assets/images/login/login.svg"
import { UserContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const [userDetails, setUserDetails] = useState({})
    const { createUserEmailPass } = useContext(UserContext)
    // form submit handler
    const handleFormSubmit = e => {
        e.preventDefault();
        // console.log(userDetails);
        const {name, email, password} = userDetails;
        // create user with email and pass
        createUserEmailPass(email, password)
        .then(result => {
            toast.success("Successfully created account!!")
            console.log(result);
        })
        .catch(error => {
            toast.error(error.message)
            console.log(error.message);
        })
    }

    // get user details handler
    const handleGetUserDetails = e => {
        const field = e.target.name;
        const fieldValue = e.target.value;
        // console.log(field, fieldValue);
        const newUser = { ...userDetails }
        newUser[field] = fieldValue;
        setUserDetails(newUser)
    }
    return (
        <div className="hero min-h-screen bg-base-200 py-5">
            <div className="hero-content flex-row w-full">
                <div className="w-1/2 flex justify-center">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card w-1/2 max-w-lg shadow-2xl bg-base-100 p-20">
                    <h2 className='text-3xl font-semibold text-center mb-4'>Sign Up</h2>
                    <form onSubmit={handleFormSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input onChange={handleGetUserDetails} name='name' type="text" placeholder="your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={handleGetUserDetails} name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onChange={handleGetUserDetails} name='password' type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-error text-gray-300">Sign Up</button>
                        </div>
                    </form>
                    <p className='text-center text-lg'><small>Already have an account? <Link className='font-semibold text-error' to="/login">Log in</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;