import React from 'react';
import AboutQuality from '../AboutQuality/AboutQuality';
import Banner from '../Banner/Banner';
import Furnitures from '../Furnitures/Furnitures';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutQuality></AboutQuality>
            <Furnitures></Furnitures>
        </div>
    );
};

export default Home;