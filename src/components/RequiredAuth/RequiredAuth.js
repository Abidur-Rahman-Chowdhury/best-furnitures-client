
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';


import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';


import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const RequiredAuth = ({ children }) => {
 
    const [user,loading] = useAuthState(auth);
    let location = useLocation();
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (!user) {
        return <Navigate to='/login' state ={{from:location}} replace></Navigate>
    }
   
    return children;
};

export default RequiredAuth;