import React from "react";

const UpdateLesson = () => {
    return (
        <div>
            <main className="max-w-5xl mx-auto grow py-8 md:py-12">
                {/* Page Heading */}
                <div className="flex flex-wrap justify-between gap-3 p-4">
                    <h1 className="text-base-content text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                        Update Your Lesson
                    </h1>
                </div>

                {/* Form Container */}
                <div className="mt-8 space-y-8">
                    {/* Read-only Fields */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <p className="text-base-content/80 text-base font-medium leading-normal">
                                User Name
                            </p>
                            <div className="flex w-full items-center rounded-lg bg-base-200 dark:bg-base-300 border border-base-300 h-14 px-4 text-base-content/60">
                                John Doe
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-base-content/80 text-base font-medium leading-normal">
                                Email
                            </p>
                            <div className="flex w-full items-center rounded-lg bg-base-200 dark:bg-base-300 border border-base-300 h-14 px-4 text-base-content/60">
                                john.doe@example.com
                            </div>
                        </div>
                    </div>

                    {/* Editable Fields */}
                    <div className="space-y-6">
                        {/* Lesson Title */}
                        <label className="flex flex-col">
                            <p className="text-base-content text-base font-medium leading-normal pb-2">
                                Lesson Title
                            </p>
                            <input
                                className="input input-bordered h-14 w-full bg-base-200 dark:bg-base-300 text-base-content"
                                defaultValue="The Power of Saying No"
                            />
                        </label>

                        {/* Full Description */}
                        <label className="flex flex-col">
                            <p className="text-base-content text-base font-medium leading-normal pb-2">
                                Full Description
                            </p>
                            <textarea
                                rows="5"
                                className="textarea textarea-bordered w-full bg-base-200 dark:bg-base-300 text-base-content"
                                defaultValue={`Learning to say 'no' is not about being negative. It's about prioritizing your well-being and respecting your own limits. This lesson was hard-learned but has brought immense peace and focus to my life.`}
                            />
                        </label>

                        {/* Category & Emotional Tone */}
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            <label className="flex flex-col">
                                <p className="text-base-content text-base font-medium leading-normal pb-2">
                                    Category
                                </p>
                                <select className="select select-bordered h-14 w-full bg-base-200 dark:bg-base-300 text-base-content">
                                    <option>Career</option>
                                    <option selected>Relationships</option>
                                    <option>Health</option>
                                    <option>Personal Growth</option>
                                </select>
                            </label>

                            <label className="flex flex-col">
                                <p className="text-base-content text-base font-medium leading-normal pb-2">
                                    Emotional Tone
                                </p>
                                <select className="select select-bordered h-14 w-full bg-base-200 dark:bg-base-300 text-base-content">
                                    <option>Optimistic</option>
                                    <option selected>Reflective</option>
                                    <option>Humorous</option>
                                    <option>Inspirational</option>
                                </select>
                            </label>
                        </div>

                        {/* Image Upload */}
                        <div>
                            <p className="text-base-content text-base font-medium leading-normal pb-2">
                                Lesson Image
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-6 rounded-lg bg-base-200 dark:bg-base-300 border border-base-300 p-4">
                                <img
                                    className="w-32 h-32 object-cover rounded-lg"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyfofGNKZAzEgdZKvwAwg04vgFeh_2iLv91aq3xt7Q_1bcxg7SJ6krHsfRbxcnFzSzIq4oN1hY8I6q7L_UepXaTEIZz5xxHT0NIhv1KvPM0LH92wSuVDWZEwqKF1oiddx1WlaH8TIzkBBmu-9D9B10AU7BF44AFGXFmFeM3k_v5oHn0Xx9XAopnMQ0-Ssh85mUPZCh_qkgZbVxmc6U5b4FlHd2dTd-r8ZXP4-ea43pwpaJ9tSvW7vXHb2LK-stZ584AQ3p3RyTHXw"
                                    alt="Lesson"
                                />

                                <div className="flex flex-col items-center sm:items-start">
                                    <p className="text-base-content/70 text-sm mb-2">
                                        Change the image for your lesson.
                                    </p>
                                    <button className="btn btn-outline btn-sm text-base-content">
                                        Upload New Image
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Privacy & Access */}
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {/* Privacy */}
                            <div>
                                <p className="text-base-content text-base font-medium leading-normal pb-3">
                                    Privacy
                                </p>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="privacy"
                                            className="radio radio-primary"
                                            defaultChecked
                                        />
                                        <span className="text-base-content">Public</span>
                                    </label>

                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="privacy" className="radio radio-primary" />
                                        <span className="text-base-content">Private</span>
                                    </label>
                                </div>
                            </div>

                            {/* Access Level */}
                            <div>
                                <p className="text-base-content text-base font-medium leading-normal pb-3">
                                    Access Level (Premium Users)
                                </p>
                                <div className="flex items-center gap-4">
                                    <span className="text-base-content/70">Free</span>

                                    <input
                                        type="checkbox"
                                        className="toggle toggle-primary"
                                        defaultChecked
                                    />

                                    <span className="text-base-content font-medium">Premium</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-4 pt-6 border-t border-base-300">
                        <button className="btn w-full sm:w-auto btn-ghost bg-base-200 dark:bg-base-300 text-base-content">
                            Cancel
                        </button>
                        <button className="btn w-full sm:w-auto btn-primary text-primary-content">
                            Update Lesson
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default UpdateLesson;
