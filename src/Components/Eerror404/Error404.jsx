import React from 'react';
import error404 from '../../assets/animation/Error 404.json'
import Lottie from 'lottie-react';
import Theme from '../Theme/Theme';
import Logo from '../Logo/Logo';
import Footer from '../../Pages/Shared/Footer/Footer';

const Error404 = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <Logo />
                </div>
                <div className="flex-none">
                    <Theme />
                </div>
            </div>
            <div className="flex items-center justify-center w-full h-full py-20">
                <Lottie
                    animationData={error404}
                    loop={true}
                    className="" 
                />
            </div>
            <Footer />
        </div>
    );
};

export default Error404;