import React from 'react';
import Nav from '../Components/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const MainLayouts = () => {
    return (
        <div>
            <div className="h-16">
                <Nav> </Nav>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;