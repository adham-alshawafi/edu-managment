import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
    return (
        <div className="min-h-screen pl-64 transition-all duration-300">
            <Sidebar />
            <main className="min-h-screen w-full relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
