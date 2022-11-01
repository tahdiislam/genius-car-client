import React from 'react';
import parts from "../../../../assets/images/about_us/parts.jpg"
import person from "../../../../assets/images/about_us/person.jpg"

const AboutUs = () => {
    return (
        <div className="hero mt-12 mb-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} className="w-3/4 h-full rounded-lg shadow-2xl" />
                    <img src={parts} className="absolute rounded-lg shadow-2xl w-2/3 right-0 top-1/2 border-8" />
                </div>
                <div className='w-1/2'>
                    <p className='mb-5 text-left font-bold text-error'>About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified <br />& of experience <br/>in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6 ">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                    <button className="btn btn-error">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;