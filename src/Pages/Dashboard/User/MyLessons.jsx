import React from "react";
import {
    MdAdd,
    MdVisibility,
    MdEdit,
    MdDelete,
} from "react-icons/md";
import { Link } from "react-router";

const MyLessons = () => {
    return (
        <div>
            <main className="grow py-8 px-4 sm:px-6">

                {/* Top Bar */}
                <div className="flex flex-wrap justify-between items-center gap-4 p-4 mb-6">
                    <p className="text-4xl font-black text-black dark:text-white">
                        My Lessons
                    </p>

                    <button className="flex items-center gap-2 rounded-lg h-10 px-5 bg-primary text-white font-bold hover:opacity-90">
                        <MdAdd className="text-lg" />
                        <span>Create New Lesson</span>
                    </button>
                </div>

                {/* Table Container */}
                <div className="w-full overflow-x-auto rounded-xl border border-gray-200 dark:border-base-300 shadow-sm">
                    <table className="min-w-[800px] w-full bg-white dark:bg-base-200">
                        <thead className="bg-gray-50 dark:bg-base-300">
                            <tr className="border-b border-gray-200 dark:border-base-300">
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">Lesson Title</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">Status</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">Visibility</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">Created</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">Reactions</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">Saves</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200 dark:divide-base-300">
                            {/* Row */}
                            <tr className="hover:bg-gray-50 dark:hover:bg-base-100 transition-colors">
                                <td className="px-4 py-4 text-black dark:text-white font-medium">
                                    The Art of Active Listening
                                </td>

                                <td className="px-4 py-4">
                                    <div className="badge badge-primary badge-sm">
                                        Published
                                    </div>
                                </td>

                                <td className="px-4 py-4 text-gray-700 dark:text-gray-300">Public</td>
                                <td className="px-4 py-4 text-gray-700 dark:text-gray-300">2023-10-26</td>
                                <td className="px-4 py-4 text-gray-700 dark:text-gray-300">1.2k</td>
                                <td className="px-4 py-4 text-gray-700 dark:text-gray-300">450</td>

                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                        <button className="btn btn-ghost btn-xs">
                                            <MdVisibility className="text-lg" />
                                        </button>
                                        <Link to={'/updatelesson'} className="btn btn-ghost btn-xs">
                                            <MdEdit className="text-lg" />
                                        </Link>
                                        <button className="btn btn-ghost btn-xs text-red-500">
                                            <MdDelete className="text-lg" />
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            {/* Add your other rows the same way */}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default MyLessons;
