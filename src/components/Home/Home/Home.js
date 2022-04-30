import React from 'react';
import AboutQuality from '../AboutQuality/AboutQuality';
import Banner from '../Banner/Banner';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutQuality></AboutQuality>
        </div>
    );
};

export default Home;