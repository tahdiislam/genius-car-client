import React from 'react';
import AboutUs from './Component/AboutUs/AboutUs';
import Banner from './Component/Banner/Banner';
import Service from './Component/Services/Service';

const Home = () => {
    return (
        <div>
          <Banner/>
          <AboutUs/>
          <Service/>
        </div>
    );
};

export default Home;