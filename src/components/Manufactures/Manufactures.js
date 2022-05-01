import React from 'react';
import './Menufacture.css';
import pic1 from '../../images/menufacture/1.png';
import pic2 from '../../images/menufacture/2.png';
import pic3 from '../../images/menufacture/3.png';
import pic4 from '../../images/menufacture/4.jpg';

const MenuFacture = () => {
    return (
        <div className='container mt-20 pb-5'>
            <div className='text-center'>
            <h1 className='text-5xl text-center font-bold mb-4 inline-block menu-title pb-4 '>Some Pictures From Our Factory </h1>
            </div>

            <div className='mt-20 grid grid-cols-1 gap-5 place-items-center md:grid-cols-2 '>
                <img className='w-[500px]' src={pic1} alt="" />
                <img className='w-[500px]' src={pic2} alt="" />
                <img className='w-[500px]' src={pic3} alt="" />
                <img className='w-[500px]' src={pic4} alt="" />

            </div>
            
        </div>
    );
};

export default MenuFacture;