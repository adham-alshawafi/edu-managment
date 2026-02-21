import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <div className="min-h-screen transition-all duration-300 flex flex-col relative">
            <div className="fixed inset-0 bg-white/70 backdrop-blur-[2px] pointer-events-none" />
            <Navbar />
            <main className="flex-1 w-full relative z-10">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
