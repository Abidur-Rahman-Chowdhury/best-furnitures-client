import React from 'react';
import './Signup.css';
import signup from '../../images/login-signup/signup.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Social from '../Social/Social';
const Signup = () => {
  // create user with email and pass
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  //   handel signup functionality
      const handelSignup = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
          createUserWithEmailAndPassword(email, password);
          toast('Your account is successfully created');
          e.target.reset();

         
   
  }
  if (user) {
    console.log(user);
  }
  // handel error message
    let errorMessage;
    if (error) {
        errorMessage = <p className='text-red-700 ml-5 mb-4'>{ error.message}</p>
    }
    // handel loading
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
   
  return (
      <div className='mt-20 container grid grid-cols-1 md:grid-cols-2 mb-[138px]'>
          <div>
              <img src={signup} alt='signupImage'/>
          </div>
          <div>
              <h2 className='text-4xl font-bold text-[#6C63FF] text-center'>Sign Up</h2>

              <form className='mt-10  p-4 rounded-md shadow-lg ' onSubmit={handelSignup}>
                  <input className='border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2' type="text" name='name' placeholder='Name' required />
                  <br />
                  <input className='border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2' type="email" name="email" placeholder='Email' required/>
                  <br />
                  <input className='border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2' type="password" name="password" placeholder='Password' required/>
                  <br />
                  { error ? errorMessage : ''}
                  <p className='mb-4 ml-5'>Already have and account? <Link to='/login' className='text-[#6C63FF]'>Please Login</Link> </p>
                  
                  <div className='pl-6'>
                  <input className='btn bg-[#6C63FF] text-xl font-bold text-white px-4 py-2 rounded-md' type="submit" value='Signup' />     
          </div>
          <Social></Social>
              </form>
              <ToastContainer></ToastContainer> 
          </div>
     </div>
  );
};

export default Signup;
