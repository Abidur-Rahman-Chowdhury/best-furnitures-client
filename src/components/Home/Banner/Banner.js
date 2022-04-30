import React from 'react';
import banner from '../../../images/banner/bannar-image.jpg'
const Banner = () => {
    return (
        <div className='mt-10'>
            <div className='container flex justify-center  md:justify-between items-center flex-col md:flex-row'>
                <div className='mb-4'>
                    <h4 className='text-3xl font-bold'>Let your living space live up to your expectations.</h4>
                    <button className='mt-3 bg-[#FE3B3B] text-white px-4 py-2 rounded font-bold'>Explore Now</button>
                </div>
                <div>
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;