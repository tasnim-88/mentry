import React from 'react';
import logo from '../../assets/icons8-wisdom-66.png'
const Logo = () => {
    return (
        <div className='flex items-center'>
            <img src={logo} alt="" />
            <h1 className='text-2xl font-bold'>Mentry</h1>
        </div>
    );
};

export default Logo;