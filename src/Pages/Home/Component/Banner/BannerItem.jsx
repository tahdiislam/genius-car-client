import React from 'react';
import "./bannerItem.css"

const BannerItem = ({banner}) => {
    const {image, id, prev, next} = banner;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full my-12">
            <div className='sliderImg rounded-xl'>
                <img src={image} className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-10 bottom-0 top-2/4">
                <h1 className='text-6xl text-white font-bold'>
                    Affordable <br />
                    Price for car <br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-10 bottom-0 top-2/3">
                <p className='text-xl text-white w-96'>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                </p>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-10 bottom-0 top-3/4">
                <button className="btn btn-error mr-5">Discover More</button>
                <button className="btn btn-outline btn-error">Latest Project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 top-3/4">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;