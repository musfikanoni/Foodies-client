import React from 'react';
import banner from '../assets/banner2.jpg';

const Banner = () => {
    return (
        <div>
            <img className='h-[85vh] w-full' src={banner} alt="" />
        </div>
    );
};

export default Banner;