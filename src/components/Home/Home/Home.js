import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import MenuFacture from '../../Manufactures/Manufactures';

import AboutQuality from '../AboutQuality/AboutQuality';
import Banner from '../Banner/Banner';
import Furnitures from '../Furnitures/Furnitures';
import './Home.css';

const Home = () => {
    const [,loading] = useAuthState(auth);
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div>
            <Banner></Banner>
            <AboutQuality></AboutQuality>
            <Furnitures></Furnitures>
            <MenuFacture></MenuFacture>
        </div>
    );
};

export default Home;