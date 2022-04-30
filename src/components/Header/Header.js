import React from 'react';

import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
      <nav className='bg-[#FFFFFF] shadow-md'>
          <div className="container flex flex-col  p-10 items-center sm:flex-col md:gap-y-4 lg:flex-row justify-between">
              <div>
                  <h2 className='text-2xl font-bold'>Best <span className='text-red-700'>Furniture </span> </h2>
              </div>
              <ul className='flex gap-4 text-xl '>
                  <Link to='/home'>Home</Link>
                  <Link to='/blogs'>Blogs</Link>
                  <Link to='/login'>Login</Link>
                  <Link to='/signup'>Signup</Link>
              </ul>
          </div>
    
  </nav>
 
    
   
  );
};

export default Header;
