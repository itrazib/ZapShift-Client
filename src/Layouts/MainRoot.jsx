import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer/Footer';

const MainRoot = () => {
    return (
        <div className='max-w-7xl mx-auto '>
           <div className='flex flex-col min-h-screen'>
             <Navbar></Navbar>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
           </div>
            
        </div>
    );
};

export default MainRoot;