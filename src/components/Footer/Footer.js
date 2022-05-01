import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='p-10 bg-[black]'>
            <div className='container text-white'>
                <p className='text-center text-2xl font-bold'>All rights reserved by &copy; Best Furniture {year} </p>
            </div>
            
        </footer>
    );
};

export default Footer;