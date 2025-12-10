import React from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';

const MostSavedLessons = () => {
    return (
        <div>
            <section className="py-10 sm:py-16 lg:py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className=" text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-6">Most Saved Lessons</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="flex flex-col gap-4 rounded-xl shadow-sm p-6">
                            <div className="flex items-center gap-3">
                                <img
                                    className="size-10 rounded-full object-cover"
                                    alt="Portrait of author Jane Doe"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuhrgYpoWza-mleT2GkOJuiq0dZJA1wIVSMhm5GcIqFoZKpmole5DyslQt3hwRJ997qCg950ipoCyDg_ybz8GzLPtpDg0ynKh23AUeqFJngEPoV6Ed3coX5hJt1yeX4t33lKFC4tQYy55syBrR0S_HavwNiiV-GzNht6vSJrVS5yZdHC57a61vRQu7BkJjVqG7ySo9cLa85UGb61QgNl-rwZKVzUJC-G3oR9WDRDib8JelEG0CFTcKUkVhZxoize1dLPv93_nxrhw"
                                />
                                <div>
                                    <p className="font-bold ">A Guide to Mindful Mornings</p>
                                    <p className="text-sm ">by Jane Doe</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-700">"Starting the day with intention can change everything. Here are five small habits that made a big difference in my life..."</p>
                            <div className="flex items-center gap-4 text-sm text-gray-600 ">
                                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base"><FaRegBookmark /></span> 4.2k Saves</span>
                                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base"><MdFavorite /></span> 8.1k Likes</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 rounded-xl shadow-sm p-6">
                            <div className="flex items-center gap-3">
                                <img
                                    className="size-10 rounded-full object-cover"
                                    alt="Portrait of author John Smith"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWzrV706CYjJ7wPLZ21iIQe8wGnZOghSQFffRa_Puc4Wu22ZLvtGDaeNJO7C3yGuJijgxct_L6S5WrZadyFQ1QKp4IULruW58ZB0UAcQhAqgl-Fkdj8yAmLDbNIb06oPgg9c7zHp7NwZvE5saLc8zRh27vC67qBtLN_Fk-6z1KE2Qv2uKxv8SBvuguYz_g5UkU-hVBp9BXOgJo_mhwhIgsYXoyYQs9EurR1Pg4jUVCB0mdc18uO6PS0R6Y5jnXRuVDORW7IdcuZX0"
                                />
                                <div>
                                    <p className="font-bold ">The 5-Minute Rule for Procrastination</p>
                                    <p className="text-sm ">by John Smith</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-700 ">"If a task takes less than five minutes, do it immediately. This simple rule helped me conquer my to-do list and reduce stress..."</p>
                            <div className="flex items-center gap-4 text-sm text-gray-600 ">
                                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base"><FaRegBookmark /></span> 3.8k Saves</span>
                                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base"><MdFavorite /></span> 7.5k Likes</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 rounded-xl shadow-sm p-6">
                            <div className="flex items-center gap-3">
                                <img
                                    className="size-10 rounded-full object-cover"
                                    alt="Portrait of author Maria Elena"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCXPxaqspG4J4g1BT1wnr9S8XKegfZkTY0Sq9Uk6wrtKise44j1-9O8lhWY2_68C0upG31KNOJjhmG6cnCEebiKCk_K4F2jASpFe9YsPhK3ALL1vaMPQ5jdb_WGBYV5Ux4-osAmZdd0rPVvqA0kaUr7DZd3ukcQjg3d8S21mzQEtZ_hPfrxURyrSqE_ueMiiwRJ2kojgvlCRkXy0trrzza2A1GnhFy3SHSXdBanJ7F39jY0Ae1-mX5180z6XHeSKgZZNLpu3qjTtc"
                                />
                                <div>
                                    <p className="font-bold ">How to Give and Receive Feedback</p>
                                    <p className="text-sm ">by Maria Elena</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-700 ">"Feedback is a gift, but it's not always easy to give or receive. I learned to focus on behavior, not personality, and it..."</p>
                            <div className="flex items-center gap-4 text-sm text-gray-600 ">
                                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base"><FaRegBookmark /></span> 3.1k Saves</span>
                                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base"><MdFavorite /></span> 6.9k Likes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MostSavedLessons;