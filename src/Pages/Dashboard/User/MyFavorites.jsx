import React from 'react';
import { MdOutlineFavorite } from 'react-icons/md';

const MyFavorites = () => {
    return (
        <div>
            <main className="flex-1 px-4 py-8 sm:px-6 md:px-8">
                <div className="mx-auto max-w-7xl">
                    {/* <!-- PageHeading --> */}
                    <div className="mb-6">
                        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white">My Favorite Lessons</h1>
                    </div>
                    {/* <!-- Chips/Filters --> */}
                    <div className="mb-6 flex flex-wrap items-center gap-3">
                        <div className="relative">
                            <select className="select h-9 appearance-none rounded-lg border border-slate-300 bg-background-light pl-4 pr-9 text-sm font-medium text-slate-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-primary/20 dark:bg-background-dark dark:text-slate-300">
                                <option>Filter by Category</option>
                                <option>Relationships</option>
                                <option>Personal Growth</option>
                                <option>Career</option>
                                <option>Self-Awareness</option>
                            </select>
                            
                        </div>
                        <div className="relative">
                            <select className="select h-9 appearance-none rounded-lg border border-slate-300 bg-background-light pl-4 pr-9 text-sm font-medium text-slate-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-primary/20 dark:bg-background-dark dark:text-slate-300">
                                <option>Filter by Tone</option>
                                <option>Reflective</option>
                                <option>Inspirational</option>
                                <option>Optimistic</option>
                            </select>
                            
                        </div>
                        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-transparent px-4 text-sm font-medium text-slate-600 hover:bg-primary/10 dark:text-slate-300 dark:hover:bg-primary/20">
                            <span>Reset Filters</span>
                        </button>
                    </div>
                    {/* <!-- Table --> */}
                    <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-primary/20">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-slate-200 dark:divide-primary/20">
                                <thead className="bg-slate-50 dark:bg-primary/10">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-300" scope="col">Lesson Title</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-300" scope="col">Category</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-300" scope="col">Emotional Tone</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-300" scope="col">Author</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-300" scope="col">Date Favorited</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-300" scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 bg-background-light dark:divide-primary/20 dark:bg-background-dark">
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">The Art of Listening</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Relationships</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Reflective</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Alex Johnson</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600 dark:text-slate-400">2023-10-26</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                            <div className="flex items-center gap-4">
                                                <button className="flex h-8 items-center justify-center rounded-md bg-primary/20 px-3 text-sm font-bold text-primary hover:bg-primary/30">View Details</button>
                                                <button aria-label="Remove from favorites" className="text-slate-500 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-400">
                                                    <span className="material-symbols-outlined" ><MdOutlineFavorite size={24}/></span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* <!-- Empty State (Example - uncomment to view) --> */}
                    {/* <div className="mt-12 flex flex-col items-center justify-center gap-6 rounded-lg border border-dashed border-slate-300 p-12 dark:border-primary/20">
                        <div className="w-full max-w-[280px] text-primary/50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-auto"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.5-3.83l6.59-6.59c.35-.35.35-.92 0-1.27l-1.06-1.06c-.35-.35-.92-.35-1.27 0L12 11.17l-1.76-1.77c-.35-.35-.92-.35-1.27 0l-1.06 1.06c-.35.35-.35.92 0 1.27l3.59 3.59c.35.35.92.35 1.27 0zM12.75 16.5c-.2 0-.39-.08-.53-.22l-4.5-4.5c-.29-.29-.29-.77 0-1.06l1.06-1.06c.29-.29.77-.29 1.06 0L12 11.88l3.18-3.18c.29-.29.77-.29 1.06 0l1.06 1.06c.29.29.29.77 0 1.06l-5.25 5.25c-.14.14-.33.22-.53.22z" opacity="0.3"></path><path d="M16.12 6.12c-.35-.35-.92-.35-1.27 0L12 8.94 9.15 6.12c-.35-.35-.92-.35-1.27 0L6.82 7.18c-.35.35-.35.92 0 1.27l3.59 3.59c.35.35.92.35 1.27 0l6.59-6.59c.35-.35.35-.92 0-1.27l-1.06-1.06z"></path></svg>
                        </div>
                        <div className="flex max-w-sm flex-col items-center gap-2 text-center">
                            <p className="text-lg font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white">You haven't favorited any lessons yet.</p>
                            <p className="text-sm font-normal leading-normal text-slate-600 dark:text-slate-400">Start exploring to discover lessons that resonate with you and save them for later.</p>
                        </div>
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-black text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-80">
                            <span className="truncate">Discover Lessons</span>
                        </button>
                    </div> */}
                </div>
            </main>
        </div>
    );
};

export default MyFavorites;