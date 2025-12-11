import React from 'react';
import { MdCloudUpload } from 'react-icons/md';

const AddLesson = () => {
    return (
        <div>
            <main className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-10 sm:py-16">
                <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
                    <div className="flex flex-col gap-4 mb-10">
                        <p className="text-black dark:text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">Share a New Lesson</p>
                        <p className="text-black/60 dark:text-[#9db9a8] text-base font-normal leading-normal">Preserve your wisdom and share it with the community.</p>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <label className="flex flex-col w-full">
                                <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">Lesson Title</p>
                                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-2 border-black/20 dark:border-[#3b5445] bg-white dark:bg-[#1c2720] focus:border-primary/80 dark:focus:border-[#3b5445] h-14 placeholder:text-black/40 dark:placeholder:text-[#9db9a8] p-[15px] text-base font-normal leading-normal" placeholder="e.g., The Importance of Listening" type="text" />
                            </label>
                            <label className="flex flex-col w-full">
                                <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">Category</p>
                                <select className="select appearance-none w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-2 border-black/20 dark:border-[#3b5445] bg-white dark:bg-[#1c2720] focus:border-primary/80 dark:focus:border-[#3b5445] h-14  pl-4 pr-9 text-base font-normal leading-normal">
                                    <option>Select a category</option>
                                    <option>Career</option>
                                    <option>Relationships</option>
                                    <option>Health</option>
                                    <option>Mindfulness</option>
                                    <option>Finance</option>
                                </select>
                            </label>
                        </div>
                        <label className="flex flex-col w-full">
                            <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">Full Description / Story / Insight</p>
                            <textarea className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-2 border-black/20 dark:border-[#3b5445] bg-white dark:bg-[#1c2720] focus:border-primary/80 dark:focus:border-[#3b5445] min-h-48 placeholder:text-black/40 dark:placeholder:text-[#9db9a8] p-[15px] text-base font-normal leading-normal" placeholder="Share your story, the context, and the wisdom you gained..."></textarea>
                        </label>
                        <div className="flex flex-col items-center justify-center w-full border-2 border-dashed border-black/20 dark:border-[#3b5445] rounded-lg p-10 text-center cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                            <span className="text-4xl text-black/40 dark:text-white/40 mb-3"><MdCloudUpload /></span>
                            <p className="text-black dark:text-white font-medium mb-1">Upload an Image (Optional)</p>
                            <p className="text-sm text-black/60 dark:text-[#9db9a8]">Drag &amp; drop or click to browse</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <label className="flex flex-col w-full">
                                <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">Emotional Tone</p>
                                <select className="select appearance-none w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-2 border-black/20 dark:border-[#3b5445] bg-white dark:bg-[#1c2720] focus:border-primary/80 dark:focus:border-[#3b5445] h-14 pl-4 pr-9 text-base font-normal leading-normal">
                                    <option>Select a tone</option>
                                    <option>Inspiring</option>
                                    <option>Reflective</option>
                                    <option>Humorous</option>
                                    <option>Cautionary</option>
                                </select>
                            </label>
                            <label className="flex flex-col w-full">
                                <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">Privacy</p>
                                <select className="select appearance-none w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-2 border-black/20 dark:border-[#3b5445] bg-white dark:bg-[#1c2720] focus:border-primary/80 dark:focus:border-[#3b5445] h-14 pl-4 pr-9 text-base font-normal leading-normal">
                                    <option>Public</option>
                                    <option>Private</option>
                                </select>
                            </label>
                            <div className="relative group">
                                <label className="flex flex-col w-full">
                                    <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">Access Level</p>
                                    <select className="select disabled:cursor-not-allowed disabled:bg-black/10 dark:disabled:bg-white/10 disabled:text-black/40 dark:disabled:text-white/40 appearance-none w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-2 border-black/20 dark:border-[#3b5445] bg-white dark:bg-[#1c2720] focus:border-primary/80 dark:focus:border-[#3b5445] h-14 pl-4 pr-9 text-base font-normal leading-normal" disabled="">
                                        <option>Free</option>
                                        <option>Premium</option>
                                    </select>
                                </label>
                                <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-max max-w-xs p-2 text-sm bg-black text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Upgrade to Premium to create paid lessons.</div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-6">
                            <button className="flex w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-black/10 dark:bg-white/10 text-black dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-black/20 dark:hover:bg-white/20 transition-colors">
                                <span className="truncate">Save as Draft</span>
                            </button>
                            <button className="flex w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-80 transition-colors">
                                <span className="truncate">Submit Lesson</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AddLesson;