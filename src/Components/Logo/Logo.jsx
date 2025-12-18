import React from 'react';
import logo from '../../assets/icons8-wisdom-66.png'
import { Link } from 'react-router';
const Logo = () => {
    return (
        <Link to={'/'} className='flex items-center'>
            <img className='w-10 h-10' src={logo} alt="" />
            <h1 className='text-2xl font-bold'>Mentry</h1>
        </Link>
    );
};

export default Logo;