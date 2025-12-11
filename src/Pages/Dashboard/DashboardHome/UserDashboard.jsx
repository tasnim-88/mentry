import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const UserDashboard = () => {
    return (
        <div>
            <main className="flex-1 p-4 md:p-6 lg:p-8">
                <div className="flex flex-wrap justify-between gap-3 p-4">
                    <div className="flex min-w-72 flex-col gap-3">
                        <p className="text-black dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Welcome back, Alex!</p>
                        <p className="text-black/60 dark:text-[#9db9a8] text-base font-normal leading-normal">Here's a summary of your journey so far.</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 p-4">
                    <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-black/10 dark:border-[#3b5445] bg-white dark:bg-black/20">
                        <p className="text-black/80 dark:text-white/80 text-base font-medium leading-normal">Total Lessons Created</p>
                        <p className="text-black dark:text-white tracking-light text-4xl font-bold leading-tight">12</p>
                    </div>
                    <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-black/10 dark:border-[#3b5445] bg-white dark:bg-black/20">
                        <p className="text-black/80 dark:text-white/80 text-base font-medium leading-normal">Total Saved Lessons</p>
                        <p className="text-black dark:text-white tracking-light text-4xl font-bold leading-tight">28</p>
                    </div>
                </div>
                <h2 className="text-black dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Quick Actions</h2>
                <div className="flex justify-stretch">
                    <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-[#111814] text-base font-bold leading-normal tracking-[0.015em]">
                            <span className="truncate">Create New Lesson</span>
                        </button>
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-black/5 dark:bg-[#28392f] text-black dark:text-white text-base font-bold leading-normal tracking-[0.015em]">
                            <span className="truncate">View My Lessons</span>
                        </button>
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-black/5 dark:bg-[#28392f] text-black dark:text-white text-base font-bold leading-normal tracking-[0.015em]">
                            <span className="truncate">Explore Community Wisdom</span>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 p-4">
                    <div className="lg:col-span-2">
                        <h2 className="text-black dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Recently Added Lessons</h2>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center p-4 rounded-xl border border-black/10 dark:border-[#3b5445] bg-white dark:bg-black/20">
                                <div>
                                    <h3 className="font-bold text-black dark:text-white">The Art of Active Listening</h3>
                                    <p className="text-sm text-black/60 dark:text-white/60">Created: October 25, 2023</p>
                                </div>
                                <button className="text-black dark:text-white">
                                    <span className="material-symbols-outlined"><FaChevronRight /></span>
                                </button>
                            </div>
                            <div className="flex justify-between items-center p-4 rounded-xl border border-black/10 dark:border-[#3b5445] bg-white dark:bg-black/20">
                                <div>
                                    <h3 className="font-bold text-black dark:text-white">Finding Joy in Small Things</h3>
                                    <p className="text-sm text-black/60 dark:text-white/60">Created: October 22, 2023</p>
                                </div>
                                <button className="text-black dark:text-white">
                                    <span className="material-symbols-outlined"><FaChevronRight /></span>
                                </button>
                            </div>
                            <div className="flex justify-between items-center p-4 rounded-xl border border-black/10 dark:border-[#3b5445] bg-white dark:bg-black/20">
                                <div>
                                    <h3 className="font-bold text-black dark:text-white">Embracing Imperfection</h3>
                                    <p className="text-sm text-black/60 dark:text-white/60">Created: October 18, 2023</p>
                                </div>
                                <button className="text-black dark:text-white">
                                    <span className="material-symbols-outlined"><FaChevronRight /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-1">
                        <h2 className="text-black dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Your Activity This Month</h2>
                        <div className="p-4 rounded-xl border border-black/10 dark:border-[#3b5445] bg-white dark:bg-black/20 h-72 flex flex-col justify-end">
                            <div className="flex items-end justify-around h-full gap-3">
                                <div className="flex flex-col items-center gap-2 flex-1">
                                    <div className="w-full bg-primary/20 dark:bg-primary/30 rounded-t-md" ></div>
                                    <p className="text-xs text-black/60 dark:text-white/60">W1</p>
                                </div>
                                <div className="flex flex-col items-center gap-2 flex-1">
                                    <div className="w-full bg-primary/20 dark:bg-primary/30 rounded-t-md" ></div>
                                    <p className="text-xs text-black/60 dark:text-white/60">W2</p>
                                </div>
                                <div className="flex flex-col items-center gap-2 flex-1">
                                    <div className="w-full bg-primary/20 dark:bg-primary/30 rounded-t-md" ></div>
                                    <p className="text-xs text-black/60 dark:text-white/60">W3</p>
                                </div>
                                <div className="flex flex-col items-center gap-2 flex-1">
                                    <div className="w-full bg-primary rounded-t-md" ></div>
                                    <p className="text-xs text-black/60 dark:text-white/60">W4</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default UserDashboard;