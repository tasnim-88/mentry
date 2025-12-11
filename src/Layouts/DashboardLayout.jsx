import React from 'react';
import { NavLink, Outlet } from 'react-router';
import Theme from '../Components/Theme/Theme';
import { ImBook, ImProfile } from 'react-icons/im';
import { PiStudentBold } from 'react-icons/pi';
import { FiHome } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import logoImg from '../assets/icons8-wisdom-66.png'
import { MdOutlineFavorite } from 'react-icons/md';
import { HiUsers } from 'react-icons/hi';

const DashboardLayout = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Navbar */}
                    <nav className="navbar w-full bg-base-300">
                        <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            {/* Sidebar toggle icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                        </label>
                        <div className="px-4">Navbar Title</div>
                        <Theme />
                    </nav>
                    {/* Page content here */}
                    <Outlet />
                </div>

                <div className="drawer-side is-drawer-close:overflow-visible">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                        {/* Sidebar content here */}
                        <ul className="menu w-full grow">
                            {/* List item */}
                            <li>
                                <NavLink to={'/'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Mentry">
                                    {/* Home icon */}
                                    <img src={logoImg} alt="logo" />
                                    <span className="is-drawer-close:hidden text-2xl font-bold">Mentry</span>
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink to={'/dashboard'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Dashboard">
                                    {/* Home icon */}
                                    <FiHome size={20}/>
                                    <span className="is-drawer-close:hidden">DashBoard</span>
                                </NavLink>
                            </li>

                            {/* Admin links */}
                            <li>
                                <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Manage Users" to={'/dashboard/admin/manageusers'}>
                                    <HiUsers size={20}/>
                                    <span className="is-drawer-close:hidden">Manage Users</span></NavLink>
                            </li>
                            <li>
                                <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Manage Lessons" to={'/dashboard/admin/managelessons'}>
                                    <HiUsers size={20}/>
                                    <span className="is-drawer-close:hidden">Manage Lessons</span></NavLink>
                            </li>
                            <li>
                                <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Reported Lessons" to={'/dashboard/admin/reportedlessons'}>
                                    <HiUsers size={20}/>
                                    <span className="is-drawer-close:hidden">Reported Lessons</span></NavLink>
                            </li>

                            {/* User links */}
                            <li>
                                <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Add Lesson" to={'/dashboard/addlesson'}>
                                    <ImBook size={20}/>
                                    <span className="is-drawer-close:hidden">Add Lesson</span></NavLink>
                            </li>
                            <li>
                                <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Lessons" to={'/dashboard/mylessons'}>
                                    <PiStudentBold size={20}/>
                                    <span className="is-drawer-close:hidden">My Lessons</span></NavLink>
                            </li>
                            <li>
                                <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Favorites" to={'/dashboard/myfavorites'}>
                                    <MdOutlineFavorite size={20}/>
                                    <span className="is-drawer-close:hidden">My Favorites</span></NavLink>
                            </li>
                            <li>
                                <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Profile" to={'/dashboard/profile'}>
                                    <ImProfile size={20}/>
                                    <span className="is-drawer-close:hidden">Profile</span></NavLink>
                            </li>

                            {/* List item */}
                            <li>
                                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                                    {/* Settings icon */}
                                    <IoSettingsOutline size={20}/>
                                    <span className="is-drawer-close:hidden">Settings</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;