import React, { useMemo, useState } from 'react';
import { CiLock } from 'react-icons/ci';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth';

const PublicLessons = () => {

    const { user } = useAuth(); // user.isPremium
    const axiosSecure = useAxiosSecure();

    const { data: lessons = [] } = useQuery({
        queryKey: ['lessons'],
        queryFn: async () => {
            const res = await axiosSecure.get('/lessons');
            return res.data;
        }
    });

    // -----------------------------
    // 🔍 SEARCH + FILTER + SORT STATES
    // -----------------------------
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All Categories");
    const [tone, setTone] = useState("All Tones");
    const [sort, setSort] = useState("Newest");

    // ⭐ PAGINATION STATES
    const [currentPage, setCurrentPage] = useState(1);
    const lessonsPerPage = 6;

    const shortText = (txt) => {
        if (!txt) return "";
        return txt.length > 120 ? txt.slice(0, 120) + "..." : txt;
    };

    // -----------------------------
    // 🔥 FILTERED + SORTED RESULTS
    // -----------------------------
    const filteredLessons = useMemo(() => {
        return lessons
            .filter(l => {
                const text = (l.lessonInfo.title + " " + l.lessonInfo.description).toLowerCase();
                const matchesSearch = text.includes(search.toLowerCase());

                const matchesCategory =
                    category === "All Categories" || l.lessonInfo.category === category;

                const matchesTone =
                    tone === "All Tones" || l.lessonInfo.tone === tone;

                return matchesSearch && matchesCategory && matchesTone;
            })
            .sort((a, b) => {
                if (sort === "Newest") {
                    return new Date(b.metadata.createdDate) - new Date(a.metadata.createdDate);
                }
                if (sort === "Most Saved") {
                    return (b.metadata.saves || 0) - (a.metadata.saves || 0);
                }
                return 0;
            });
    }, [lessons, search, category, tone, sort]);


    // -----------------------------
    // ⭐ PAGINATION LOGIC
    // -----------------------------
    const totalPages = Math.ceil(filteredLessons.length / lessonsPerPage);
    const indexOfLast = currentPage * lessonsPerPage;
    const indexOfFirst = indexOfLast - lessonsPerPage;
    const currentLessons = filteredLessons.slice(indexOfFirst, indexOfLast);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
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
                            Total lessons: {filteredLessons.length}
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
                                    value={search}
                                    onChange={(e) => {
                                        setSearch(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    className="form-input w-full pl-10 pr-4 py-2 rounded-lg text-slate-900 dark:text-white bg-slate-200 dark:bg-[#28392f]"
                                />
                            </div>

                            {/* FILTERS */}
                            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                                <select
                                    value={category}
                                    onChange={(e) => {
                                        setCategory(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    className="select w-full sm:w-48 px-4 py-2 rounded-lg bg-slate-200 dark:bg-[#28392f]"
                                >
                                    <option>All Categories</option>
                                    <option>Career</option>
                                    <option>Relationships</option>
                                    <option>Health</option>
                                    <option>Personal Growth</option>
                                    <option>Finance</option>
                                </select>

                                <select
                                    value={tone}
                                    onChange={(e) => {
                                        setTone(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    className="select w-full sm:w-48 px-4 py-2 rounded-lg bg-slate-200 dark:bg-[#28392f]"
                                >
                                    <option>All Tones</option>
                                    <option>Gratitude</option>
                                    <option>Realization</option>
                                    <option>Sad</option>
                                    <option>Motivational</option>
                                </select>
                            </div>

                            {/* SORT */}
                            <div className="flex items-center gap-2">
                                <label className="text-slate-600 dark:text-slate-300 text-sm">
                                    Sort by:
                                </label>
                                <select
                                    value={sort}
                                    onChange={(e) => {
                                        setSort(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    className="select w-40 px-4 py-2 rounded-lg bg-slate-200 dark:bg-[#28392f]"
                                >
                                    <option>Newest</option>
                                    <option>Most Saved</option>
                                </select>
                            </div>
                        </div>

                        {/* LESSON CARDS */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {currentLessons.map((lesson) => {
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

                        {/* ⭐ PAGINATION (REAL, DYNAMIC) */}
                        <div className="flex items-center justify-center mt-8">
                            <nav className="flex items-center gap-2">

                                {/* Prev */}
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="size-9 flex items-center justify-center disabled:opacity-30 hover:bg-slate-200 dark:hover:bg-[#28392f] rounded-lg"
                                >
                                    <FaChevronCircleLeft size={22} />
                                </button>

                                {/* Page Numbers */}
                                {[...Array(totalPages)].map((_, idx) => {
                                    const page = idx + 1;
                                    return (
                                        <button
                                            key={page}
                                            onClick={() => handlePageChange(page)}
                                            className={`size-9 flex items-center justify-center rounded-lg font-bold
                                            ${currentPage === page
                                                    ? "bg-primary/30 text-black dark:text-white"
                                                    : "hover:bg-slate-200 dark:hover:bg-[#28392f]"
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    );
                                })}

                                {/* Next */}
                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="size-9 flex items-center justify-center disabled:opacity-30 hover:bg-slate-200 dark:hover:bg-[#28392f] rounded-lg"
                                >
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
