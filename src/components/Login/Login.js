import React, { useRef } from 'react';
import './Login.css'
import login from '../../images/login-signup/login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Social from '../Social/Social';
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
      ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error2 ] = useSendPasswordResetEmail(
        auth
    );
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true });
      }

    let handelLogin = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        e.target.reset();
        
    };

    // handel reset password
    const handelPasswordReset = async () => {
        const email = emailRef.current.value;
        if (email) {
          await sendPasswordResetEmail(email);
              toast('Email Sent For Password Reset');
        }
        else {
          toast('Please enter your email address')
        }
       
    };
    if (user) {
        console.log(user);
    }
    // handel error message 
    let errorMessage;
    if (error) {
        errorMessage = <p className='text-red-700 ml-5 mb-4'>{ error.message}</p>
    }
    // if loading occur loading component will called
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (sending) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className='mt-10 mb-3 container grid  grid-cols-1 md:grid-cols-2 gap-2'>
          <div className='mt-20'>
              <h2 className='text-4xl font-bold text-[#6C63FF] text-center'>Login</h2>

              <form className='mt-10  p-4 rounded-md shadow-lg ' onSubmit={handelLogin} >
                  <input ref={emailRef} className='border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2' type="email" name="email" placeholder='Email' required/>
                  <br />
                  <input ref={passwordRef} className='border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2' type="password" name="password" placeholder='Password' required/>
                  <br />
                  { error ? errorMessage : ''}
                  <p className='mb-1 ml-5'>Don't have an account? <Link to='/signup' className='text-[#6C63FF]'>Please Signup</Link> </p>
                  <p className='mb-4 ml-5'>Forget Password? <span onClick={()=> handelPasswordReset()}  className='text-[#6C63FF] cursor-pointer'>Reset Password</span> </p>
                  
                  <div className='pl-6'>
                        <input className='btn bg-[#6C63FF] text-xl font-bold text-white px-4 py-2 rounded-md' type="submit" value='Login' />     
                       
                    </div>
                    <Social></Social>
                    <ToastContainer></ToastContainer>
              </form>
             
            </div>
            <div>
              <img src={login} alt='signupImage'/>
          </div>
     </div>
    );
};

export default Login;