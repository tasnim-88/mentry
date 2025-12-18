// import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../../assets/icons8-wisdom-66.png'
import Theme from '../../../Components/Theme/Theme';
import useAuth from '../../../Hooks/useAuth';
import DisplayUser from '../../../Components/DisplayUser/DisplayUser';

const Navbar = () => {

    const { user } = useAuth()



    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/publiclessons'}>Public Lessons</NavLink></li>
        {
            user && <>
                <li><NavLink to={'/dashboard/addlesson'}>Add Lesson</NavLink></li>
                <li><NavLink to={'/dashboard/mylessons'}>My Lessons</NavLink></li>
                {/* Free users see Pricing */}
                {!user.isPremium && (
                    <li>
                        <NavLink to="/pricing">Pricing</NavLink>
                    </li>
                )}

                {/* Premium users see badge */}
                {user.isPremium && (
                    <li className="px-3 py-2 text-sm font-semibold text-primary">
                        Premium ⭐
                    </li>
                )}
            </>
        }

        {/* <li><NavLink></NavLink></li> */}
    </>

    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar bg-base-100 shadow-sm  backdrop-blur-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div><img className='w-10 h-10' src={logo} alt="logo" /></div>
                    <a className="text-2xl font-bold">Mentry</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <Theme />
                    {
                        user ?
                            <DisplayUser />
                            :
                            <Link to={'/login'} className="btn">Login</Link>
                    }
                </div>

            </div>
        </div>
    );
};

export default Navbar;