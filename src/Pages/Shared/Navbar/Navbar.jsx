import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../../assets/icons8-wisdom-66.png'

const Navbar = () => {

    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.querySelector("html").setAttribute("data-theme", savedTheme);
        return savedTheme;
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.querySelector("html").setAttribute("data-theme", theme);
    }, [theme]);


    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light");
    };

    const links = <>
        <li><NavLink>Home</NavLink></li>
        <li><NavLink>Add Lesson</NavLink></li>
        <li><NavLink>My Lessons</NavLink></li>
        <li><NavLink>Public Lessons</NavLink></li>
        <li><NavLink>Pricing</NavLink></li>
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
                    <div><img src={logo} alt="" /></div>
                    <a className="text-2xl font-bold">Mentry</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={'/login'} className="btn">Login</Link>
                </div>
                <input
                    onChange={(e) => handleTheme(e.target.checked)}
                    type="checkbox"
                    defaultChecked={localStorage.getItem('theme') === "dark"}
                    className="toggle" />
                {/* Dropdown */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Dashboard</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;