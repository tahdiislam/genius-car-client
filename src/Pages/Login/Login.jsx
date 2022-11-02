import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from "../../assets/images/login/login.svg"
import { UserContext } from '../../Context/AuthProvider';

const Login = () => {
    const [userDetails, setUserDetails] = useState({})
    const { logInUser } = useContext(UserContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    // form submit handler
    const handleFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        // console.log(userDetails);
        const {email, password} = userDetails;
        // log in method
        logInUser(email, password)
        .then(result => {
            toast.success("Sign in successfully.")
            navigate(from, {replace: true})
        })
        .catch(err => toast.error(err.message))
    }
    
    // get user details handler
    const handleGetUserDetails = e => {
        const field = e.target.name;
        const fieldValue = e.target.value;
        // console.log(field, fieldValue);
        const newUser = {...userDetails}
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
                    <h2 className='text-3xl font-semibold text-center mb-4'>Login</h2>
                    <form onSubmit={handleFormSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={handleGetUserDetails} name='email' type="email" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onChange={handleGetUserDetails} name='password' type="password" placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-error text-gray-300">Login</button>
                        </div>
                    </form>
                    <p className='text-center text-lg'><small>New in Genius Car? <Link className='font-semibold text-error' to="/signup">Sign Up</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;