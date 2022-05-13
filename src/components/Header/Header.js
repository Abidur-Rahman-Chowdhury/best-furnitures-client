import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

import { Link, useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';
const Header = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      {user && (
        <>
          <li>
            <Link to="/manage-inventory">Manage Inventory</Link>
          </li>
          <li>
            <Link to="/add-items">Add New Items</Link>
          </li>
          <li>
            <Link to="/my-items">My Items</Link>
          </li>
        </>
      )}
      <li>
        {user ? (
          <span
            className="link no-underline"
            onClick={() => {
              signOut(auth);
              navigate('/login');
            }}
            
          >
            Sign Out
          </span>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
      {!user && (
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 sticky top-0 shadow-md z-50 py-7 md:py-5 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/home" className="btn btn-ghost normal-case text-xl">
          <span className=" text-xs  md:text-xl lg:text-2xl font-bold mr-2">Best</span>{' '}
          <span className="text-xs  md:text-xl lg:text-2xl font-bold text-red-700">Furniture's</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Header;
