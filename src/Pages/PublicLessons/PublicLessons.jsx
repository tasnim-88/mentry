import React from 'react';
import { CiLock } from 'react-icons/ci';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth';

const PublicLessons = () => {

    const { user } = useAuth(); // user.isPremium available
    const axiosSecure = useAxiosSecure();

    const { data: lessons = [] } = useQuery({
        queryKey: ['lessons'],
        queryFn: async () => {
            const res = await axiosSecure.get('/lessons');
            return res.data;
        }
    });

    const shortText = (txt) => {
        if (!txt) return "";
        return txt.length > 120 ? txt.slice(0, 120) + "..." : txt;
    };

    return (
        <div>
            <main className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex justify-center py-5">
                <div className="layout-content-container w-full">

                    {/* HEADER */}
                    <div className="flex flex-wrap justify-between gap-3 p-4">
                        <div className="flex min-w-72 flex-col gap-3">
                            <p className="text-slate-900 dark:text-white text-4xl font-black">
                                Explore Public Life Lessons
                            </p>
                            <p className="text-slate-500 dark:text-[#9db9a8]">
                                Discover meaningful insights and wisdom from our community.
                            </p>
                        </div>
                        <h1 className="text-slate-900 dark:text-white">
                            Total lessons: {lessons.length}
                        </h1>
                    </div>

                    {/* FILTER BAR */}
                    <div className="flex flex-col gap-8 mt-6 p-4">

                        <div className="bg-slate-100 dark:bg-[#1A2C22] p-4 rounded-xl flex flex-col md:flex-row gap-4">

                            {/* SEARCH */}
                            <div className="relative w-full md:flex-1">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-[#9db9a8]">
                                    <IoSearch size={20} />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Search by title or keyword..."
                                    className="form-input w-full pl-10 pr-4 py-2 rounded-lg text-slate-900 dark:text-white bg-slate-200 dark:bg-[#28392f]"
                                />
                            </div>

                            {/* FILTERS */}
                            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                                <select className="select w-full sm:w-48 px-4 py-2 rounded-lg bg-slate-200 dark:bg-[#28392f]">
                                    <option>All Categories</option>
                                    <option>Career</option>
                                    <option>Relationships</option>
                                    <option>Health</option>
                                    <option>Personal Growth</option>
                                    <option>Finance</option>
                                </select>

                                <select className="select w-full sm:w-48 px-4 py-2 rounded-lg bg-slate-200 dark:bg-[#28392f]">
                                    <option>All Tones</option>
                                    <option>Hopeful</option>
                                    <option>Reflective</option>
                                    <option>Humorous</option>
                                    <option>Serious</option>
                                </select>
                            </div>

                            {/* SORT */}
                            <div className="flex items-center gap-2">
                                <label className="text-slate-600 dark:text-slate-300 text-sm">
                                    Sort by:
                                </label>
                                <select className="select w-40 px-4 py-2 rounded-lg bg-slate-200 dark:bg-[#28392f]">
                                    <option>Newest</option>
                                    <option>Most Saved</option>
                                </select>
                            </div>
                        </div>

                        {/* LESSON CARDS */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {lessons.map((lesson) => {
                                const isPremiumLesson = lesson.metadata.visibility === "Private";
                                const userIsPremium = user?.isPremium;
                                const locked = isPremiumLesson && !userIsPremium;

                                return (
                                    <div
                                        key={lesson._id}
                                        className="relative bg-slate-100 dark:bg-[#1A2C22] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                                    >
                                        {/* PREMIUM BADGE */}
                                        {isPremiumLesson && (
                                            <span className="absolute top-3 right-3 px-3 py-1 text-[10px] font-semibold rounded-full 
                                                bg-yellow-500 text-black dark:bg-yellow-400 dark:text-gray-900 shadow">
                                                PREMIUM
                                            </span>
                                        )}

                                        {/* CARD CONTENT */}
                                        <div className={locked ? "p-6 blur-sm select-none" : "p-6"}>

                                            {/* Title */}
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                                    {lesson.lessonInfo.title}
                                                </h3>
                                                <span className="text-xs text-slate-500 dark:text-slate-400">
                                                    {lesson.metadata.visibility}
                                                </span>
                                            </div>

                                            {/* Description */}
                                            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                                                {shortText(lesson.lessonInfo.description)}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex gap-2 flex-wrap mb-4">
                                                <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
                                                    {lesson.lessonInfo.category}
                                                </span>
                                                <span className="px-3 py-1 bg-slate-200 dark:bg-[#28392f] text-slate-700 dark:text-slate-200 text-xs rounded-full">
                                                    {lesson.lessonInfo.tone}
                                                </span>
                                            </div>

                                            {/* Footer */}
                                            <div className="border-t dark:border-white/10 pt-4 flex justify-between items-center">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={lesson.author.profileImage}
                                                        className="w-8 h-8 rounded-full object-cover"
                                                    />
                                                    <div>
                                                        <p className="text-sm text-slate-900 dark:text-white font-medium">
                                                            {lesson.author.name}
                                                        </p>
                                                        <p className="text-xs text-slate-500 dark:text-slate-400">
                                                            {lesson.metadata.createdDate}
                                                        </p>
                                                    </div>
                                                </div>

                                                {!locked && (
                                                    <Link
                                                        to={`/lessondetails/${lesson._id}`}
                                                        className="text-primary text-sm font-bold hover:underline"
                                                    >
                                                        See Details
                                                    </Link>
                                                )}
                                            </div>
                                        </div>

                                        {/* LOCK OVERLAY */}
                                        {locked && (
                                            <div className="absolute inset-0 bg-slate-900/60 dark:bg-black/70 flex flex-col items-center justify-center p-6 rounded-xl text-center">
                                                <CiLock size={32} className="text-white mb-2" />
                                                <h4 className="text-white text-lg font-bold">
                                                    Premium Lesson
                                                </h4>
                                                <button className="mt-4 px-5 py-2 bg-primary text-slate-900 font-semibold rounded-lg">
                                                    Upgrade to View
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* PAGINATION */}
                        <div className="flex items-center justify-center mt-8">
                            <nav className="flex items-center gap-2">
                                <button className="size-9 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-[#28392f] rounded-lg">
                                    <FaChevronCircleLeft size={22} />
                                </button>

                                <span className="size-9 flex items-center justify-center bg-primary/20 rounded-lg text-sm font-bold text-slate-900 dark:text-white">1</span>

                                <button className="size-9 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-[#28392f] rounded-lg">2</button>
                                <button className="size-9 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-[#28392f] rounded-lg">3</button>

                                <span className="text-slate-500 dark:text-slate-400">...</span>

                                <button className="size-9 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-[#28392f] rounded-lg">10</button>

                                <button className="size-9 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-[#28392f] rounded-lg">
                                    <FaChevronCircleRight size={22} />
                                </button>
                            </nav>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default PublicLessons;
