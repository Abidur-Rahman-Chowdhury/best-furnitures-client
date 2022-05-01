import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';
const Header = () => {
    const [user, loading] = useAuthState(auth);
    
  return (
      <nav className='bg-[#FFFFFF] shadow-md'>
          <div className="container flex flex-col  p-10 items-center sm:flex-col md:gap-y-4 lg:flex-row justify-between">
              <div>
                  <h2 className='text-2xl font-bold'>Best <span className='text-red-700'>Furniture </span> </h2>
              </div>
              <ul className='flex gap-4 text-xl '>
                  <Link to='/home'>Home</Link>
                  <Link to='/blogs'>Blogs</Link>
                  {user && <>
                       <Link to='/manage-inventory'>Manage Inventory</Link>
                       <Link to='/add-items'>Add New Items</Link>
                       <Link to='/my-items'>My Items</Link>
                       
                  </>}
                  { user ? <button onClick={()=>signOut(auth)}>Sign Out</button> : <Link to='/login'>Login</Link>}
                  {!user&&<Link to='/signup'>Signup</Link>}
              </ul>
          </div>
    
  </nav>
 
    
   
  );
};

export default Header;
