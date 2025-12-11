import React from 'react';
import { IoSearch } from 'react-icons/io5';

const ManageLessons = () => {
    return (
        <div>
            <main className="flex-1 p-8 overflow-y-auto">
                <div className="max-w-7xl mx-auto">
                    {/* <!-- PageHeading --> */}
                    <div className="mb-8">
                        <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Manage Lessons</p>
                    </div>
                    {/* <!-- Stats --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#111814] border border-gray-200 dark:border-[#3b5445]">
                            <p className="text-gray-800 dark:text-white text-base font-medium leading-normal">Public Lessons</p>
                            <p className="text-gray-900 dark:text-white tracking-light text-3xl font-bold leading-tight">1,204</p>
                        </div>
                        <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#111814] border border-gray-200 dark:border-[#3b5445]">
                            <p className="text-gray-800 dark:text-white text-base font-medium leading-normal">Private Lessons</p>
                            <p className="text-gray-900 dark:text-white tracking-light text-3xl font-bold leading-tight">3,450</p>
                        </div>
                        <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#111814] border border-orange-400/50 dark:border-orange-400/50">
                            <p className="text-gray-800 dark:text-white text-base font-medium leading-normal">Flagged Content</p>
                            <p className="text-orange-500 dark:text-orange-400 tracking-light text-3xl font-bold leading-tight">12</p>
                        </div>
                    </div>
                    {/* <!-- Filters & Search --> */}
                    <div className="bg-white dark:bg-[#111814] border border-gray-200 dark:border-gray-800 rounded-xl p-4 mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">

                            {/* <!-- SearchBar --> */}
                            <div className="lg:col-span-2">
                                <label className="block w-full">
                                    <div className="relative h-12 w-full focus-within:ring-2 focus-within:ring-primary/60 rounded-lg">

                                        {/* Icon */}
                                        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center
                                    text-gray-400 dark:text-[#9db9a8]">
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
                                   focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </label>
                            </div>

                            {/* <!-- Category Select --> */}
                            <div className="relative h-12 w-full">
                                <select
                                    className="appearance-none w-full h-full rounded-lg px-4 pr-10
                           bg-white dark:bg-[#1c2720]
                           border border-gray-300 dark:border-[#3b5445]
                           text-black dark:text-white
                           focus:outline-none focus:ring-2 focus:ring-primary/60"
                                >
                                    <option>Select a category</option>
                                    <option>Career</option>
                                    <option>Relationships</option>
                                    <option>Health</option>
                                    <option>Mindfulness</option>
                                    <option>Finance</option>
                                </select>

                                {/* Custom arrow */}
                                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center
                             text-gray-500 dark:text-gray-400">
                                    ▼
                                </span>
                            </div>

                            {/* <!-- Status Select --> */}
                            <div className="relative h-12 w-full">
                                <select
                                    className="appearance-none w-full h-full rounded-lg px-4 pr-10
                           bg-white dark:bg-[#1c2720]
                           border border-gray-300 dark:border-[#3b5445]
                           text-black dark:text-white
                           focus:outline-none focus:ring-2 focus:ring-primary/60"
                                >
                                    <option>Status</option>
                                    <option>Public lessons</option>
                                    <option>Private lessons</option>
                                    <option>Flagged or reported content</option>
                                </select>

                                {/* Custom arrow */}
                                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center
                             text-gray-500 dark:text-gray-400">
                                    ▼
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* <!-- Data Table --> */}
                    <div className="bg-white dark:bg-[#111814] border border-gray-200 dark:border-gray-800 rounded-xl overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-gray-500 dark:text-gray-400 uppercase bg-gray-50 dark:bg-[#1a2c22]">
                                <tr>
                                    <th className="p-4" scope="col">
                                        <div className="flex items-center">
                                            <input className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id="checkbox-all" type="checkbox" />
                                            <label className="sr-only" for="checkbox-all">checkbox</label>
                                        </div>
                                    </th>
                                    <th className="px-6 py-3" scope="col">Lesson Title &amp; Author</th>
                                    <th className="px-6 py-3" scope="col">Category</th>
                                    <th className="px-6 py-3" scope="col">Status</th>
                                    <th className="px-6 py-3" scope="col">Date Created</th>
                                    <th className="px-6 py-3" scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- Table Row 1 (Flagged) --> */}
                                <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-primary/10">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id="checkbox-table-1" type="checkbox" />
                                            <label className="sr-only" for="checkbox-table-1">checkbox</label>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900 dark:text-white">The Power of Saying No</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">by Jane Doe</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">Personal Growth</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-orange-100 text-orange-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-orange-900 dark:text-orange-300">Flagged</span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">2023-10-26</td>
                                    <td className="px-6 py-4">
                                        <button className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                            <span className="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </td>
                                </tr>
                                {/* <!-- Table Row 2 (Featured) --> */}
                                <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-primary/10">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id="checkbox-table-2" type="checkbox" />
                                            <label className="sr-only" for="checkbox-table-2">checkbox</label>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900 dark:text-white">Finding Joy in Simplicity</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">by John Smith</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Mindfulness</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-teal-100 text-teal-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-teal-900 dark:text-teal-300">Featured</span>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Reviewed</span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">2023-10-25</td>
                                    <td className="px-6 py-4">
                                        <button className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                            <span className="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </td>
                                </tr>
                                {/* <!-- Table Row 3 --> */}
                                <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-primary/10">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id="checkbox-table-3" type="checkbox" />
                                            <label className="sr-only" for="checkbox-table-3">checkbox</label>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900 dark:text-white">Career Paths in the Digital Age</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">by Alice Johnson</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Career</span>
                                    </td>
                                    <td className="px-6 py-4"></td>
                                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">2023-10-24</td>
                                    <td className="px-6 py-4">
                                        <button className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                            <span className="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </td>
                                </tr>
                                {/* <!-- Table Row 4 (Reviewed) --> */}
                                <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-primary/10">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id="checkbox-table-4" type="checkbox" />
                                            <label className="sr-only" for="checkbox-table-4">checkbox</label>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900 dark:text-white">Healthy Eating on a Budget</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">by Mike Williams</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Health</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Reviewed</span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">2023-10-23</td>
                                    <td className="px-6 py-4">
                                        <button className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                            <span className="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <!-- Pagination --> */}
                    <nav aria-label="Table navigation" className="flex items-center justify-between pt-4">
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
                        <ul className="inline-flex -space-x-px text-sm h-8">
                            <li>
                                <a className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-[#111814] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" href="#">Previous</a>
                            </li>
                            <li>
                                <a className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#111814] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" href="#">1</a>
                            </li>
                            <li>
                                <a aria-current="page" className="flex items-center justify-center px-3 h-8 text-primary border border-gray-300 bg-primary/20 hover:bg-primary/30 dark:border-gray-700 dark:bg-primary/20 dark:text-white" href="#">2</a>
                            </li>
                            <li>
                                <a className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#111814] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" href="#">3</a>
                            </li>
                            <li>
                                <a className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-[#111814] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </main>
        </div>
    );
};

export default ManageLessons;