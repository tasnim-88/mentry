import React from 'react';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { MdCommentsDisabled } from 'react-icons/md';
import { RiDeleteBin6Fill } from 'react-icons/ri';

const ReportedLessons = () => {
    return (
        <div>
            <main className="flex-1 p-8">
                <div className="w-full max-w-7xl mx-auto">
                    {/* <!-- PageHeading --> */}
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Reported &amp; Flagged Lessons</h1>
                            <p className="text-gray-500 dark:text-[#9db9a8] text-base font-normal leading-normal">Review and manage lessons flagged by the community.</p>
                        </div>
                    </div>
                    {/* <!-- Table --> */}
                    <div className="overflow-x-auto @container">
                        <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black/20">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                                <thead className="bg-gray-50 dark:bg-white/5">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider table-column-1" scope="col">Lesson Title</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider table-column-2" scope="col">Author</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider table-column-3" scope="col">Report Count</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider table-column-4" scope="col">First Reported</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider table-column-5" scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white table-column-1">The Art of Forgiveness</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 table-column-2">JohnDoe</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 table-column-3">15</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 table-column-4">2023-10-26</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2 table-column-5">
                                            <button className="px-3 py-1.5 text-xs font-bold text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"><HiOutlineDocumentReport size={20}/></button>
                                            <button className="px-3 py-1.5 text-xs font-bold text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"><MdCommentsDisabled size={20}/></button>
                                            <button className="px-3 py-1.5 text-xs font-bold text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"><RiDeleteBin6Fill size={20}/></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white table-column-1">Finding Joy in Small Things</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 table-column-2">JaneSmith</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 table-column-3">8</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 table-column-4">2023-10-25</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2 table-column-5">
                                            <button className="px-3 py-1.5 text-xs font-bold text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">View Reports</button>
                                            <button className="px-3 py-1.5 text-xs font-bold text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">Ignore</button>
                                            <button className="px-3 py-1.5 text-xs font-bold text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors">Delete</button>
                                        </td>
                                    </tr>
                                    <tr className="opacity-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white table-column-1">Overcoming Procrastination</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 table-column-2">AlexRay</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 table-column-3">5</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 table-column-4">2023-10-24</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2 table-column-5">
                                            <span className="px-3 py-1.5 text-xs font-bold text-yellow-800 dark:text-yellow-200 bg-yellow-400/20 dark:bg-yellow-500/20 rounded-md">Ignored</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white table-column-1">Navigating Career Changes</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 table-column-2">EmilyWhite</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 table-column-3">2</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 table-column-4">2023-10-22</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2 table-column-5">
                                            <button className="px-3 py-1.5 text-xs font-bold text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">View Reports</button>
                                            <button className="px-3 py-1.5 text-xs font-bold text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">Ignore</button>
                                            <button className="px-3 py-1.5 text-xs font-bold text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* <style>
                            @container (max-width: 900px) { .table - column - 4 {display: none; } }
                            @container (max-width: 768px) { .table - column - 2 {display: none; } }
                            @container (max-width: 640px) { .table - column - 3 {display: none; } }
                        </style> */}
                    </div>
                    {/* <!-- Empty State --> */}
                    <div className="hidden flex flex-col items-center justify-center text-center py-20 px-4">
                        <div className="bg-center bg-no-repeat aspect-square bg-contain w-full max-w-xs mb-6 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlqlQ9HOEEnzW6-wS7E37qkdJFGVRFJQukDzw5q8zdF25W___L06GeXjNILmDICpTE2TV2qJIZPBA_vCTnq0zJGkzez6mrZ5xOZi2aMPn48QlnCRCMiaLDWtaKaHE4ZYGe8Vpj0Q108UvZy9Sta4AYGXuV1CkwE8214Kom8YK_PLPOK14YQd7E9eesgabWYFl4mS3ntwR_2sB4ceJCThc6pjaSCRyfu6LSN_qD0LCLX59lKI0_kTTfB5zbulgKSp8cFqor8VezIxw')]" data-alt="Illustration of a clean document with a green checkmark."></div>
                        <p className="text-lg font-bold text-gray-900 dark:text-white">No Reported Lessons</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-6 max-w-sm">Great job! There are currently no lessons that need your review. All community submissions are in good standing.</p>
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em]">
                            <span className="truncate">Go to Dashboard</span>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ReportedLessons;