import React from 'react';
import Navbar from '../Shard/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shard/Footer';
const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;