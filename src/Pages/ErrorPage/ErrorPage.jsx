import React from 'react';
import image from "../../assets/images/errorPage/error-page.png"

const ErrorPage = () => {
    return (
        <div className='p-28'>
            <img src={image} className="mx-auto" alt="Error page" />
        </div>
    );
};

export default ErrorPage;