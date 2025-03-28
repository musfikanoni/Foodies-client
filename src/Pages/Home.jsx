import React from 'react';
// import AvailableFoods from './AvailableFoods';
import Banner from './Banner';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;