import React from 'react';
import wood from '../../../images/quality/quality-wood.jpg';
import './AboutQuality.css';
const AboutQuality = () => {
  return (
      <div className="mt-10 pb-8">
          <div className="text-center quality-title">
          <h1 className="text-center text-5xl font-bold inline-block pb-4">
            About <span className="text-[#9E877D]">Wood</span> Quality
          </h1>
        </div>
      <div className="container px-10 flex ">
        
        <div className="mt-20 flex flex-col   gap-10 md:flex-row justify-between">
          <div className=" quality-img mx-auto">
            <img className='w-full' src={wood} alt="qualityImage" />
          </div>
          <div className=''>
                      <h2 className=' ml- text-3xl font-bold '>Best Quality Wood</h2>
                      <p className='mt-10 w-4/5 '>We provide best quality wood in every of our furniture. We like to provide the best quality furniture to our customer so we don't compromise the quality of wood at all. Here are some list of wood we use in our Furniture.<br />
                          1.Mapple Wood Furniture. It is the best quality wood for furniture <br />
                          2.Mahogany Wood Furniture. It is one of the traditional wood for furniture. <br />
                      3.Oak Wood Furniture. It is also good quality wood for furniture.</p>
                     
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutQuality;
