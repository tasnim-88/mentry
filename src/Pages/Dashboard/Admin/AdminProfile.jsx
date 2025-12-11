import React from 'react';

const AdminProfile = () => {
    return (
        <div>
            <main className="flex-1 p-8">
                <div className="max-w-7xl mx-auto">
                    {/* <!-- PageHeading --> */}
                    <div className="flex flex-wrap justify-between gap-3 mb-8">
                        <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">My Profile</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* <!-- Left Column: Profile Card --> */}
                        <div className="lg:col-span-1">
                            <div className="bg-white dark:bg-[#111814] p-6 rounded-xl border border-gray-200 dark:border-[#3b5445]">
                                {/* <!-- ProfileHeader --> */}
                                <div className="flex flex-col gap-4 items-center text-center">
                                    <div className="relative group">
                                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0svMyQfnWDEAAQLMdiR8BItcE6eyp-WjUTRT_Wv3Ytw9QIav4JckzYNVqZ6hqTgdYWL9U3Fi3cmKsU7vEtRWHyMJ49a4QJkGt7G5N6OqlHYK9LfdrFeQubIOzah3HcpVCCyFiSH_i1xpBNJlgZw81v2rQR0QZy1xbVHXmhIX52mbULOrlEW8rpVSvYyj3OVHNI5dMvWxbMdsqgiKphmjrEPll1RNfKQ_wXdJfniQyRKIvSKbR-usDzQ7rQyiyC0ftCR_-HzRyjJs')]" data-alt="Profile picture of the administrator"></div>
                                        <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                            <span className="material-symbols-outlined text-white">photo_camera</span>
                                        </button>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="flex items-center justify-center gap-2">
                                            <p className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Admin's Full Name</p>
                                            <span className="inline-flex items-center rounded-md bg-amber-100 dark:bg-amber-500/30 px-2 py-1 text-xs font-medium text-amber-800 dark:text-amber-400">Admin</span>
                                        </div>
                                        <p className="text-gray-500 dark:text-[#9db9a8] text-base font-normal leading-normal">admin@digitallifelessons.com</p>
                                    </div>
                                    <button className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-100 dark:bg-[#28392f] text-gray-800 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-200 dark:hover:bg-[#3b5445] transition-colors">
                                        <span className="truncate">Change Photo</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Right Column: Edit Form & Activity --> */}
                        <div className="lg:col-span-2 flex flex-col gap-8">
                            {/* <!-- Edit Profile Form --> */}
                            <div className="bg-white dark:bg-[#111814] p-6 rounded-xl border border-gray-200 dark:border-[#3b5445]">
                                {/* SectionHeader */}
                                <h2 className="text-gray-900 dark:text-white text-[22px] font-bold tracking-[-0.015em] pb-5">
                                    Edit Profile Information
                                </h2>

                                <form className="flex flex-col gap-6">

                                    {/* Display Name */}
                                    <label className="flex flex-col w-full">
                                        <p className="text-gray-800 dark:text-white text-base font-medium pb-2">
                                            Display Name
                                        </p>

                                        <div className="relative w-full h-12 focus-within:ring-2 focus-within:ring-primary/50 rounded-lg">
                                            <input
                                                className="h-full w-full rounded-lg border border-gray-300 dark:border-[#3b5445]
                               bg-background-light dark:bg-[#1c2720]
                               px-4 text-base text-gray-900 dark:text-white
                               placeholder:text-gray-400 dark:placeholder:text-[#9db9a8]
                               focus:outline-none"
                                                value="Admin's Full Name"
                                            />
                                        </div>
                                    </label>

                                    {/* Email Address (disabled) */}
                                    <label className="flex flex-col w-full">
                                        <p className="text-gray-800 dark:text-white text-base font-medium pb-2">
                                            Email Address
                                        </p>

                                        <div className="relative w-full h-12">
                                            <input
                                                disabled
                                                className="h-full w-full rounded-lg border border-gray-300 dark:border-[#3b5445]
                               bg-gray-100 dark:bg-[#1c2720]/60
                               px-4 text-base text-gray-500 dark:text-gray-400
                               placeholder:text-gray-400 dark:placeholder:text-[#9db9a8]
                               cursor-not-allowed"
                                                value="admin@digitallifelessons.com"
                                            />
                                        </div>

                                        <p className="text-xs text-gray-500 dark:text-[#9db9a8] mt-2">
                                            Email address cannot be changed.
                                        </p>
                                    </label>

                                    {/* Action Buttons */}
                                    <div className="flex justify-end gap-3 pt-4">

                                        <button
                                            type="button"
                                            className="min-w-[84px] h-10 px-4 rounded-lg font-bold text-sm
                           bg-gray-100 dark:bg-[#28392f]
                           text-gray-800 dark:text-white
                           hover:bg-gray-200 dark:hover:bg-[#3b5445]
                           transition-colors"
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="min-w-[84px] h-10 px-4 rounded-lg font-bold text-sm
                           bg-primary text-background-dark
                           hover:bg-primary/90 transition-colors"
                                        >
                                            Save Changes
                                        </button>

                                    </div>

                                </form>
                            </div>

                            {/* <!-- Activity Summary Card --> */}
                            <div className="bg-white dark:bg-[#111814] p-6 rounded-xl border border-gray-200 dark:border-[#3b5445]">
                                <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">Recent Activity</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="flex flex-col items-start p-4 bg-gray-50 dark:bg-[#1c2720] rounded-lg">
                                        <p className="text-3xl font-bold text-primary">42</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">Lessons Moderated</p>
                                        <p className="text-xs text-gray-400 dark:text-gray-500">Last 30 days</p>
                                    </div>
                                    <div className="flex flex-col items-start p-4 bg-gray-50 dark:bg-[#1c2720] rounded-lg">
                                        <p className="text-3xl font-bold text-primary">15</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">Flags Reviewed</p>
                                        <p className="text-xs text-gray-400 dark:text-gray-500">Last 30 days</p>
                                    </div>
                                    <div className="flex flex-col items-start p-4 bg-gray-50 dark:bg-[#1c2720] rounded-lg">
                                        <p className="text-3xl font-bold text-primary">112</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">Total Actions</p>
                                        <p className="text-xs text-gray-400 dark:text-gray-500">Since joining</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminProfile;