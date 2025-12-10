import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;