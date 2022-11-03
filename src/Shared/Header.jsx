import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { UserContext } from '../Context/AuthProvider';

const Header = () => {
    const { user, logOutUser } = useContext(UserContext)

    // log out handler
    const handleSignOutUser = () => {
        logOutUser()
        .then(() => toast.success("Successfully sign out.") )
        .catch(err => toast.error(err.message))
    }
    const menuItems = <>
        <li><Link className='font-semibold' to="/"><button className='btn btn-link text-error'>Home</button></Link></li>
        
        {
            user?.uid ? <li><Link className='font-semibold' to="/orders"><button className='btn btn-link text-error'>Orders</button></Link></li> : <><li><Link className='font-semibold' to="/login"><button className='btn btn-link text-error'>Login</button></Link></li>
        <li><Link className='font-semibold' to="/signup"><button className='btn btn-link text-error'>Sign Up</button></Link></li></>
        }
    </>
    return (
        <div className="navbar h-20 py-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="h-20 btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-error">Appointment</button>
                {user?.uid && <button onClick={handleSignOutUser} className='btn btn-info text-gray-300 ml-4'>Sign Out</button>}
                {
                    user?.uid && <div className="avatar online">
                        <div className="w-16 ml-6 rounded-full">
                            {!user?.imageUrl ? <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' /> : <img src={user.imageUrl} />}
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;