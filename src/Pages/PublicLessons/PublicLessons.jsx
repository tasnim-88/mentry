import React from 'react';
import { CiLock } from 'react-icons/ci';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router';

const PublicLessons = () => {
    return (
        <div>
            <main className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col w-full">
                    <div className="flex flex-wrap justify-between gap-3 p-4">
                        <div className="flex min-w-72 flex-col gap-3">
                            <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Explore Public Life Lessons</p>
                            <p className="text-slate-500 dark:text-[#9db9a8] text-base font-normal leading-normal">Discover meaningful insights and wisdom from our community.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 mt-6 p-4">
                        <div className="bg-slate-100 dark:bg-[#1A2C22] p-4 rounded-xl flex flex-col md:flex-row items-center gap-4 w-full">
                            <div className="relative w-full md:flex-1">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-[#9db9a8]"><IoSearch size={20}/></span>
                                <input className="form-input w-full pl-10 pr-4 py-2 rounded-lg text-slate-900 dark:text-white bg-slate-200 dark:bg-[#28392f] border-transparent focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-slate-400 dark:placeholder:text-[#9db9a8]" placeholder="Search by title or keyword..." type="text" />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                                <div className="relative w-full sm:w-48">
                                    <select className="form-select appearance-none w-full px-4 py-2 rounded-lg text-slate-900 dark:text-white bg-slate-200 dark:bg-[#28392f] border-transparent focus:border-primary focus:ring-1 focus:ring-primary">
                                        <option>All Categories</option>
                                        <option>Career</option>
                                        <option>Relationships</option>
                                        <option>Health</option>
                                        <option>Personal Growth</option>
                                        <option>Finance</option>
                                    </select>
                                </div>
                                <div className="relative w-full sm:w-48">
                                    <select className="form-select appearance-none w-full px-4 py-2 rounded-lg text-slate-900 dark:text-white bg-slate-200 dark:bg-[#28392f] border-transparent focus:border-primary focus:ring-1 focus:ring-primary">
                                        <option>All Tones</option>
                                        <option>Hopeful</option>
                                        <option>Reflective</option>
                                        <option>Humorous</option>
                                        <option>Serious</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 w-full md:w-auto">
                                <label className="text-slate-600 dark:text-slate-300 text-sm font-medium whitespace-nowrap" for="sort-by">Sort by:</label>
                                <div className="relative w-full sm:w-40">
                                    <select className="form-select appearance-none w-full px-4 py-2 rounded-lg text-slate-900 dark:text-white bg-slate-200 dark:bg-[#28392f] border-transparent focus:border-primary focus:ring-1 focus:ring-primary" id="sort-by">
                                        <option>Newest</option>
                                        <option>Most Saved</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            <div className="flex flex-col bg-slate-100 dark:bg-[#1A2C22] rounded-xl overflow-hidden shadow-md transition-shadow hover:shadow-lg">
                                <div className="p-6 grow flex flex-col">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">The Power of Saying 'No'</h3>
                                        <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">Public</span>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm font-normal leading-relaxed mb-4 grow">Learning to set boundaries is not selfish; it's essential for self-preservation and respecting your own time and energy. It allows you to focus on what truly matters.</p>
                                    <div className="flex gap-2 flex-wrap mb-4">
                                        <div className="flex h-6 shrink-0 items-center justify-center gap-x-1 rounded-full bg-primary/20 px-2.5">
                                            <p className="text-primary text-xs font-medium">Career</p>
                                        </div>
                                        <div className="flex h-6 shrink-0 items-center justify-center gap-x-1 rounded-full bg-slate-200 dark:bg-[#28392f] px-2.5">
                                            <p className="text-slate-600 dark:text-slate-200 text-xs font-medium">Reflective</p>
                                        </div>
                                    </div>
                                    <div className="border-t border-slate-200 dark:border-white/10 pt-4 mt-auto">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuBKrha9E3NSQ_TLzjWAFb9KiuPXPXesLY6cDzMnIICgOgwRgxNqk1NptKPxSd1lRf_smGmqMJr8ffPwjeim9OsgL7gUAFpHJmYcuee_ZkZ2xj1WqTsmDdtvtHUU6g0fo1SJkgAELGTVNWoWWuROSo6gF6WO43gvGyi2yhbwfARHcxOvtInd3AzXruZQGbzbz7KMNl6o0rJR4acHYh-A5HQs2dUJ9PYKNMzrsLcuFpIQqNYTwy06Z7Dpa5Ia3WPT9t2-pYzzuzQ5Qyc')]" data-alt="Creator's profile picture"></div>
                                                <div>
                                                    <p className="text-slate-800 dark:text-slate-100 text-sm font-medium">Jane Doe</p>
                                                    <p className="text-slate-500 dark:text-slate-400 text-xs">Oct 26, 2023</p>
                                                </div>
                                            </div>
                                            <Link to={'/lessondetails'} className="text-primary text-sm font-bold hover:underline">See Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex flex-col bg-slate-100 dark:bg-[#1A2C22] rounded-xl overflow-hidden shadow-md">
                                <div className="p-6 filter blur-sm select-none">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Investing for the Long Term</h3>
                                        <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">Premium</span>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm font-normal leading-relaxed mb-4">Patience and consistency are the cornerstones of successful investing. Don't chase short-term gains; focus on building a diversified portfolio that aligns with your future goals.</p>
                                    <div className="flex gap-2 flex-wrap mb-4">
                                        <div className="flex h-6 shrink-0 items-center justify-center gap-x-1 rounded-full bg-primary/20 px-2.5">
                                            <p className="text-primary text-xs font-medium">Finance</p>
                                        </div>
                                        <div className="flex h-6 shrink-0 items-center justify-center gap-x-1 rounded-full bg-slate-200 dark:bg-[#28392f] px-2.5">
                                            <p className="text-slate-600 dark:text-slate-200 text-xs font-medium">Serious</p>
                                        </div>
                                    </div>
                                    <div className="border-t border-slate-200 dark:border-white/10 pt-4 mt-auto">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBBO5ZIGSdbJnCesu-T4zMX5KmN7-P3RLkSeLarsITMqnvSv5O6GEag-ClBtueMspN0vSPDsNpr7caqVoH5At4J-Bv6sUbhOIWn5EzMILsxsTKCvblbtDlGqEvw-vctFyrYDfKVNHIV4ozrNLbJlRBdWy9Kf9MSjQGtRGqR0HM5ME9iIik5rotEpJWxxUDisNMmmA6XAHOPCOCKuhRG_vV_qyZIQZySsq2p5_wZ-J2JUjxbG9iQ04LD4mr69OYvFy7grKdD7QrWFs')]" data-alt="Creator's profile picture"></div>
                                                <div>
                                                    <p className="text-slate-800 dark:text-slate-100 text-sm font-medium">John Smith</p>
                                                    <p className="text-slate-500 dark:text-slate-400 text-xs">Oct 25, 2023</p>
                                                </div>
                                            </div>
                                            <a className="text-primary text-sm font-bold" href="#">See Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-slate-900/70 dark:bg-black/70 flex flex-col items-center justify-center p-6 text-center rounded-xl">
                                    <span className="material-symbols-outlined text-white text-5xl mb-3"><CiLock size={30}/></span>
                                    <h4 className="text-white text-lg font-bold">Premium Lesson</h4>
                                    <button className="flex mt-4 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-slate-900 text-sm font-bold leading-normal tracking-[0.015em]">Upgrade to View</button>
                                </div>
                            </div>
                            <div className="flex flex-col bg-slate-100 dark:bg-[#1A2C22] rounded-xl overflow-hidden shadow-md transition-shadow hover:shadow-lg">
                                <div className="p-6 grow flex flex-col">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Embrace Imperfection</h3>
                                        <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">Public</span>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm font-normal leading-relaxed mb-4 grow">Striving for perfection often leads to procrastination and anxiety. Done is better than perfect. Embrace your flaws and focus on progress, not perfection.</p>
                                    <div className="flex gap-2 flex-wrap mb-4">
                                        <div className="flex h-6 shrink-0 items-center justify-center gap-x-1 rounded-full bg-primary/20 px-2.5">
                                            <p className="text-primary text-xs font-medium">Personal Growth</p>
                                        </div>
                                        <div className="flex h-6 shrink-0 items-center justify-center gap-x-1 rounded-full bg-slate-200 dark:bg-[#28392f] px-2.5">
                                            <p className="text-slate-600 dark:text-slate-200 text-xs font-medium">Hopeful</p>
                                        </div>
                                    </div>
                                    <div className="border-t border-slate-200 dark:border-white/10 pt-4 mt-auto">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgIT0SSnpiQ7P-nkJuC3TtVJB9DXZUIxJvp6yNFxjulzRUHaVc6kFh04fGFLn4xWzBJrvcQJ2nUV_x2pf-wzi_FxkH_3MobdQIhSWq_9MZ8N4zvn2pO29MNFI7GLyYl3n393Burgd04KUNMnt404GDGR8dnTtEBMwqeeJ75w--TaUQqrH1Bn3tSpXrVitpT5YXMRbHcqTcEnuAzi7i8U4jhteI-XuWI0hNMWuhJrJp5vD_Gsn-dhtMGBveqpvR_SU3KmaierRlJHo')]" data-alt="Creator's profile picture"></div>
                                                <div>
                                                    <p className="text-slate-800 dark:text-slate-100 text-sm font-medium">Emily White</p>
                                                    <p className="text-slate-500 dark:text-slate-400 text-xs">Oct 24, 2023</p>
                                                </div>
                                            </div>
                                            <a className="text-primary text-sm font-bold hover:underline" href="#">See Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col bg-slate-100 dark:bg-[#1A2C22] rounded-xl overflow-hidden shadow-md transition-shadow hover:shadow-lg">
                                <div className="p-6 grow flex flex-col">
                                    <div className="flex justify-between items-start mb-3"><h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">The Art of Active Listening</h3><span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">Public</span></div>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm font-normal leading-relaxed mb-4 grow">True listening goes beyond hearing words; it's about understanding the emotion and intent behind them. This simple shift can transform your relationships.</p>
                                    <div className="flex gap-2 flex-wrap mb-4">
                                        <div className="flex h-6 shrink-0 items-center justify-center gap-x-1 rounded-full bg-primary/20 px-2.5"><p className="text-primary text-xs font-medium">Relationships</p></div>
                                        <div className="flex h-6 shrink-0 items-center justify-center gap-x-1 rounded-full bg-slate-200 dark:bg-[#28392f] px-2.5"><p className="text-slate-600 dark:text-slate-200 text-xs font-medium">Reflective</p></div>
                                    </div>
                                    <div className="border-t border-slate-200 dark:border-white/10 pt-4 mt-auto">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuC0yp4tiJqnmySoiBwOnN0MyiSvR8rcbJjflYytAhY9GyUhzGLBQ7SjhnqhDxAhtDRMbqwd_m-QraDRrnpNT-JH0YCo2NlLO77HfswwCSQzrS6vF3uXD1agY_t6qNQXss_Q_cO_gZO_O8R6xuC6xebI4A9I4cIFmGcnMGQlpeQCIiRjLVp96dG9hUdcjyD-EgW5dKvT3hwkvOMNq0FdC0ae2ZsgSAm4E78fknSOTSW5wTrgmG0bN-Ik8hYwDUgw6Poh20h9Q7ZslS0')]"></div>
                                                <div><p className="text-slate-800 dark:text-slate-100 text-sm font-medium">Michael Chen</p><p className="text-slate-500 dark:text-slate-400 text-xs">Oct 23, 2023</p></div>
                                            </div>
                                            <a className="text-primary text-sm font-bold hover:underline" href="#">See Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col bg-slate-100 dark:bg-[#1A2C22] rounded-xl overflow-hidden shadow-md transition-shadow hover:shadow-lg">
                                <div className="p-6 grow flex flex-col">
                                    <div className="flex justify-between items-start mb-3"><h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Finding Joy in Small Things</h3><span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">Public</span></div>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm font-normal leading-relaxed mb-4 grow">Happiness isn't always about grand achievements. Cultivating an appreciation for small, everyday moments can lead to a more profound and sustained sense of joy.</p>
                                    <div className="flex gap-2 flex-wrap mb-4">
                                        <div className="flex h-6 shrink-0 items-center justify-center gap-x-1 rounded-full bg-primary/20 px-2.5"><p className="text-primary text-xs font-medium">Personal Growth</p></div>
                                        <div className="flex h-6 shrink-0 items-center justify-center gap-x-1 rounded-full bg-slate-200 dark:bg-[#28392f] px-2.5"><p className="text-slate-600 dark:text-slate-200 text-xs font-medium">Hopeful</p></div>
                                    </div>
                                    <div className="border-t border-slate-200 dark:border-white/10 pt-4 mt-auto">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuC0yp4tiJqnmySoiBwOnN0MyiSvR8rcbJjflYytAhY9GyUhzGLBQ7SjhnqhDxAhtDRMbqwd_m-QraDRrnpNT-JH0YCo2NlLO77HfswwCSQzrS6vF3uXD1agY_t6qNQXss_Q_cO_gZO_O8R6xuC6xebI4A9I4cIFmGcnMGQlpeQCIiRjLVp96dG9hUdcjyD-EgW5dKvT3hwkvOMNq0FdC0ae2ZsgSAm4E78fknSOTSW5wTrgmG0bN-Ik8hYwDUgw6Poh20h9Q7ZslS0')]"></div>
                                                <div><p className="text-slate-800 dark:text-slate-100 text-sm font-medium">Sarah Lee</p><p className="text-slate-500 dark:text-slate-400 text-xs">Oct 22, 2023</p></div>
                                            </div>
                                            <a className="text-primary text-sm font-bold hover:underline" href="#">See Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col bg-slate-100 dark:bg-[#1A2C22] rounded-xl overflow-hidden shadow-md transition-shadow hover:shadow-lg">
                                <div className="p-6 grow flex flex-col">
                                    <div className="flex justify-between items-start mb-3"><h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">The 2-Minute Rule for Habits</h3><span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">Public</span></div>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm font-normal leading-relaxed mb-4 grow">To build a new habit, start with an action that takes less than two minutes. This overcomes the initial friction and makes it easier to stay consistent.</p>
                                    <div className="flex gap-2 flex-wrap mb-4">
                                        <div className="flex h-6 shrink-0 items-center justify-center gap-x-1 rounded-full bg-primary/20 px-2.5"><p className="text-primary text-xs font-medium">Health</p></div>
                                        <div className="flex h-6 shrink-0 items-center justify-center gap-x-1 rounded-full bg-slate-200 dark:bg-[#28392f] px-2.5"><p className="text-slate-600 dark:text-slate-200 text-xs font-medium">Serious</p></div>
                                    </div>
                                    <div className="border-t border-slate-200 dark:border-white/10 pt-4 mt-auto">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuC0yp4tiJqnmySoiBwOnN0MyiSvR8rcbJjflYytAhY9GyUhzGLBQ7SjhnqhDxAhtDRMbqwd_m-QraDRrnpNT-JH0YCo2NlLO77HfswwCSQzrS6vF3uXD1agY_t6qNQXss_Q_cO_gZO_O8R6xuC6xebI4A9I4cIFmGcnMGQlpeQCIiRjLVp96dG9hUdcjyD-EgW5dKvT3hwkvOMNq0FdC0ae2ZsgSAm4E78fknSOTSW5wTrgmG0bN-Ik8hYwDUgw6Poh20h9Q7ZslS0')]"></div>
                                                <div><p className="text-slate-800 dark:text-slate-100 text-sm font-medium">David Kim</p><p className="text-slate-500 dark:text-slate-400 text-xs">Oct 21, 2023</p></div>
                                            </div>
                                            <a className="text-primary text-sm font-bold hover:underline" href="#">See Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-8">
                            <nav aria-label="Pagination" className="flex items-center gap-2">
                                <a className="flex items-center justify-center size-9 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-[#28392f]" href="#">
                                    <span className="sr-only">Previous</span>
                                    <span className="material-symbols-outlined text-xl"><FaChevronCircleLeft size={24}/></span>
                                </a>
                                <a aria-current="page" className="flex items-center justify-center size-9 rounded-lg text-slate-900 dark:text-white bg-primary/20 text-sm font-bold" href="#">1</a>
                                <a className="flex items-center justify-center size-9 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-[#28392f] text-sm font-medium" href="#">2</a>
                                <a className="flex items-center justify-center size-9 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-[#28392f] text-sm font-medium" href="#">3</a>
                                <span className="text-slate-500 dark:text-slate-400">...</span>
                                <a className="flex items-center justify-center size-9 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-[#28392f] text-sm font-medium" href="#">10</a>
                                <a className="flex items-center justify-center size-9 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-[#28392f]" href="#">
                                    <span className="sr-only">Next</span>
                                    <span className="material-symbols-outlined text-xl"><FaChevronCircleRight size={24}/></span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PublicLessons;