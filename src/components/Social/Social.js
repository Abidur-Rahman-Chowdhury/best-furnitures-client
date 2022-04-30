import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import google from '../../images/logo/google logo.png'

const Social = (props) => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // handel google signin
    const handelSocialLogin = () => {
        signInWithGoogle();
    }
   
  
    return (
        <div className='mt-2'>
        <div className='flex justify-center items-center gap-4'>
            <div className='h-[2px] bg-[gray] w-full'></div>
            <div className='text-[#6C63FF]'>or</div>
            <div className='h-[2px] bg-[gray] w-full'></div>    
            </div>
            <div className='flex justify-center mt-2'>
            <button onClick={handelSocialLogin} className='flex  gap-2 justify-center items-center border bg-[#EFEFEF] py-1'><img className='w-8 h-8 'src={google} alt="" /> <span className='text-xl pr-2 font-bold'>Google Sign In</span></button>

            </div>
            
            
        </div>
    );
};

export default Social;