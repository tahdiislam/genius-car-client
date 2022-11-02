import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../Context/AuthProvider';

const RequireAuth = ({children}) => {
    const {user, loading} = useContext(UserContext)
    const location = useLocation()
    if (loading){
        return <div className='my-12 flex justify-center'>
            <button className="btn loading btn-error">loading...</button>
        </div>
    }
    if(user && user.uid){
        return children
    } else{
        return <Navigate to="/login" state={{ from: location }} replace />
    }
};

export default RequireAuth;