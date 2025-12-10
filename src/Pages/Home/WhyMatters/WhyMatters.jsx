import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import { IoMdTrendingUp } from 'react-icons/io';
import { MdEditDocument, MdFavorite } from 'react-icons/md';

const WhyMatters = () => {
    return (
        <div>
            <section className="py-10 sm:py-16 lg:py-20 bg-gray-100 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className=" text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em]">Why Learning From Life Matters</h2>
                        <p className="mt-2  max-w-2xl mx-auto">Capture your journey, share your wisdom, and grow with a community dedicated to lifelong learning.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center text-center p-6">
                            <div className="flex items-center justify-center size-16 rounded-full bg-primary/20 mb-4">
                                <span className="material-symbols-outlined text-primary text-4xl"><IoMdTrendingUp /></span>
                            </div>
                            <h3 className="text-lg font-bold ">Personal Growth</h3>
                            <p className="mt-2 text-sm text-gray-500 ">Reflect on your experiences to understand yourself better and unlock your full potential.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6">
                            <div className="flex items-center justify-center size-16 rounded-full bg-primary/20 mb-4">
                                <span className="material-symbols-outlined text-primary text-4xl"><FaShieldAlt /></span>
                            </div>
                            <h3 className="text-lg font-bold ">Build Resilience</h3>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Learn from challenges, both yours and others', to build the strength to navigate life's ups and downs.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6">
                            <div className="flex items-center justify-center size-16 rounded-full bg-primary/20 mb-4">
                                <span className="material-symbols-outlined text-primary text-4xl"><MdFavorite /></span>
                            </div>
                            <h3 className="text-lg font-bold ">Foster Empathy</h3>
                            <p className="mt-2 text-sm text-gray-500 ">Connect with diverse perspectives and stories, deepening your understanding of the human experience.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6">
                            <div className="flex items-center justify-center size-16 rounded-full bg-primary/20 mb-4">
                                <span className="material-symbols-outlined text-primary text-4xl"><MdEditDocument /></span>
                            </div>
                            <h3 className="text-lg font-bold ">Create a Legacy</h3>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Preserve your unique wisdom and insights as a timeless gift for future generations.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyMatters;