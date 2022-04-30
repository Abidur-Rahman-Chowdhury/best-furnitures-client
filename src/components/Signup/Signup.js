import React from 'react';
import './Signup.css';
import signup from '../../images/login-signup/signup.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const navigation = useNavigate();
      const handelSignup = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
          console.log(name, email, password);
          createUserWithEmailAndPassword(email, password);
          e.target.reset();
   
    }
   
  return (
      <div className='mt-20 container grid grid-cols-1 md:grid-cols-2'>
          <div>
              <img src={signup} alt='signupImage'/>
          </div>
          <div>
              <h2 className='text-4xl font-bold text-[#6C63FF] text-center'>Sign Up</h2>

              <form className='mt-10  p-4 rounded-md shadow-lg ' onSubmit={handelSignup}>
                  <input className='border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2' type="text" name='name' placeholder='Name' />
                  <br />
                  <input className='border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2' type="email" name="email" placeholder='Email' />
                  <br />
                  <input className='border-bottom w-2/4 mb-4 px-2 pb-3 ml-5 pt-2' type="password" name="password" placeholder='Password' />
                  <br />
                  <p className='mb-4 ml-5'>Already have and account? <Link to='/login' className='text-[#6C63FF]'>Please Login</Link> </p>
                  <div className='pl-6'>
                  <input className='btn bg-[#6C63FF] text-xl font-bold text-white px-4 py-2 rounded-md' type="submit" value='Signup' />     
                </div>
              </form>
          </div>
     </div>
  );
};

export default Signup;
