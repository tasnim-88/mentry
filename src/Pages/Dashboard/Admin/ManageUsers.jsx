import React from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { RiDeleteBin6Fill } from 'react-icons/ri';

const ManageUsers = () => {
    return (
        <div>
            <main className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap justify-between gap-4 items-center mb-6">
                    <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Manage Users</p>
                    <button className="flex items-center justify-center gap-2 min-w-[84px] cursor-pointer overflow-hidden rounded-lg h-10 px-4 bg-primary text-[#111814] text-sm font-bold leading-normal tracking-[0.015em]">
                        <span className="material-symbols-outlined">add</span>
                        <span className="truncate">Add New User</span>
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="grow">
                            <label className="flex flex-col min-w-40 w-full">
                                <div className="relative h-12 w-full">
                                    {/* Icon */}
                                    <span
                                        className="pointer-events-none absolute inset-y-0 left-3 flex items-center
                       text-gray-400 dark:text-[#9db9a8]"
                                    >
                                        <IoSearch size={18} />
                                    </span>

                                    {/* Input */}
                                    <input
                                        type="search"
                                        placeholder="Search by name or email..."
                                        className="h-full w-full rounded-lg border
                       border-gray-300 dark:border-[#3b5445]
                       bg-background-light dark:bg-[#28392f]
                       pl-10 pr-4 text-base font-normal
                       text-gray-900 dark:text-white
                       placeholder:text-gray-400 dark:placeholder:text-[#9db9a8]
                       focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    />
                                </div>
                            </label>

                        </div>
                        {/* <div className="flex gap-3 flex-wrap items-center">
                            <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 dark:bg-[#28392f] px-4 border border-gray-300 dark:border-[#3b5445]">
                                <p className="text-gray-700 dark:text-white text-sm font-medium leading-normal">Role: All</p>
                            </button>
                            <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 dark:bg-[#28392f] px-4 border border-gray-300 dark:border-[#3b5445]">
                                <p className="text-gray-700 dark:text-white text-sm font-medium leading-normal">Status: Active</p>

                            </button>
                        </div> */}
                    </div>
                    <div className="w-full @container">
                        <div className="flex overflow-hidden rounded-lg border border-gray-200 dark:border-[#3b5445] bg-background-light dark:bg-[#111814]">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 dark:bg-[#1c2720]">
                                    <tr>
                                        <th className="table-col-1 px-4 py-3 text-sm font-medium text-gray-600 dark:text-white w-[50%]">User</th>
                                        <th className="table-col-2 px-4 py-3 text-sm font-medium text-gray-600 dark:text-white w-40">Role</th>
                                        <th className="table-col-3 px-4 py-3 text-sm font-medium text-gray-600 dark:text-white w-40">Lessons</th>
                                        <th className="table-col-4 px-4 py-3 text-sm font-medium text-gray-600 dark:text-white w-40">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-gray-200 dark:border-t-[#3b5445]">
                                        <td className="h-[72px] px-4 py-2">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVNMLDhmlQjDaWXq7WI1s1EzIOTsPYkfrt1Ov3lhsfIgQv0Xvm3QB5FjY0NdW9Gg9KceL0oqjovkH9R6paQUBvQzYrbZTP3WzailPTnBCv1-lyIpfsOzLOlrdWYZgDlzTnLLJ1XJw6hx8vInQGh1SpSBrFsX9NCa6ID2aTKyM1cIkgcEoKeQSvunlZa2m7t1euCouLUo2GaLYe6QQBKq9Muc9uVNzIvxKNcxI2BsOYvWi3E8UHv7EKgJ-OV6rPhh-YYq5QfQMV7FU')]" data-alt="Profile picture of Eleanor Vance"></div>
                                                <div className="flex flex-col">
                                                    <p className="text-gray-900 dark:text-white text-sm font-medium leading-normal">Eleanor Vance</p>
                                                    <p className="text-gray-500 dark:text-[#9db9a8] text-sm font-normal leading-normal">eleanor@example.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="h-[72px] px-4 py-2">
                                            <span className="inline-flex items-center rounded-full bg-primary/20 dark:bg-[#28392f] px-3 py-1 text-xs font-medium text-primary dark:text-white">Admin</span>
                                        </td>
                                        <td className="h-[72px] px-4 py-2 text-gray-500 dark:text-[#9db9a8] text-sm">124</td>
                                        <td className="h-[72px] px-4 py-2">
                                            <div className="flex gap-2">
                                                <button className="flex items-center justify-center size-8 rounded-md hover:bg-gray-100 dark:hover:bg-[#28392f] text-gray-500 dark:text-[#9db9a8]"><span className="material-symbols-outlined text-base"><FaUserEdit size={20}/></span></button>
                                                <button className="flex items-center justify-center size-8 rounded-md hover:bg-gray-100 dark:hover:bg-[#28392f] text-gray-500 dark:text-[#9db9a8]"><span className="material-symbols-outlined text-base"><RiDeleteBin6Fill size={20}/></span></button>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                        <p className="text-sm text-gray-500 dark:text-[#9db9a8]">Showing 1-5 of 150 users</p>
                        <div className="flex gap-2">
                            <button className="flex items-center justify-center gap-2 min-w-[84px] cursor-pointer overflow-hidden rounded-lg h-9 px-3 border border-gray-300 dark:border-[#3b5445] text-gray-700 dark:text-white text-sm font-medium">
                                Previous
                            </button>
                            <button className="flex items-center justify-center gap-2 min-w-[84px] cursor-pointer overflow-hidden rounded-lg h-9 px-3 border border-gray-300 dark:border-[#3b5445] text-gray-700 dark:text-white text-sm font-medium">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ManageUsers;