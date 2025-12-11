import React from 'react';
import { FaRegEye } from 'react-icons/fa';

const UserProfile = () => {
    return (
        <div>
            <main className="flex flex-col gap-8 py-10">

                {/* Profile Header */}
                <div className="flex p-4 @container">
                    <div className="flex w-full flex-col gap-6 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">

                        {/* Avatar + Info */}
                        <div className="flex gap-4 items-center">
                            <div
                                className="bg-center bg-cover bg-no-repeat rounded-full aspect-square min-h-32 w-32 border border-base-300"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBi-SehktsL0OX2vn7GBbA6wIhZggar31s-xmLA0M9_E3d48QK3ai-d_DSdE1gSAhMJQu9awwuvZYF4DwSXc0WvKf4nJud9KlnKUu5InstfymWCfkIQRpCOEMZJd9QunBMFWpRssLmjlMwSrbW1OysAQBu2KjIger8Du54FTtVyaPUAovSyywWG26SSuO5ZxYeaaOSuY8aY36ZSMN9RNdptuM72_YvB9QwS95EeO8nljAiKaXs9gDoDNLfep1EjdWbcXxeCw3xs5o8')",
                                }}
                            />
                            <div className="flex flex-col justify-center gap-1">
                                <p className="text-2xl md:text-3xl font-bold text-base-content">
                                    Eleanor Vance
                                </p>
                                <p className="text-base text-base-content/70">
                                    eleanor.vance@example.com
                                </p>
                                <p className="text-primary font-semibold">Premium ⭐</p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex w-full gap-3 @[480px]:w-auto">
                            <button className="btn btn-sm flex-1 @[480px]:flex-auto bg-base-300 text-base-content hover:bg-base-300/80">
                                Edit Name
                            </button>
                            <button className="btn btn-sm flex-1 @[480px]:flex-auto bg-primary text-primary-content">
                                Change Photo
                            </button>
                        </div>
                    </div>
                </div>

                {/* Profile Stats */}
                <div className="flex flex-wrap gap-4 px-4 py-3">
                    {[
                        ["28", "Lessons Created"],
                        ["15", "Lessons Saved"],
                        ["1.2k", "Total Views"],
                    ].map(([value, label], i) => (
                        <div
                            key={i}
                            className="flex flex-col gap-2 flex-1 min-w-[120px] rounded-xl border border-base-300 bg-base-100 p-4"
                        >
                            <p className="text-3xl font-bold text-base-content">{value}</p>
                            <p className="text-sm text-base-content/70">{label}</p>
                        </div>
                    ))}
                </div>

                {/* Lessons Section */}
                <div className="flex flex-col">
                    {/* Section header */}
                    <div className="flex items-center justify-between px-4 pb-3 pt-5">
                        <h2 className="text-[22px] font-bold text-base-content">
                            My Public Lessons
                        </h2>

                        {/* Sort chips */}
                        <div className="flex gap-2 flex-wrap">
                            <div className="flex h-8 items-center justify-center rounded-lg bg-primary px-4 cursor-pointer">
                                <p className="text-primary-content text-sm font-medium">Newest</p>
                            </div>
                            <div className="flex h-8 items-center justify-center rounded-lg bg-base-300 px-4 cursor-pointer hover:bg-base-300/70">
                                <p className="text-base-content text-sm">Most Popular</p>
                            </div>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            [
                                "The Art of Active Listening",
                                "Discover how truly listening, not just hearing, can transform your relationships and deepen your understanding of others.",
                                "May 15, 2024",
                                458,
                            ],
                            [
                                "Embracing Imperfection",
                                "Perfection is a myth that holds us back. Accepting flaws and celebrating progress brings freedom.",
                                "Apr 28, 2024",
                                312,
                            ],
                            [
                                "The Power of a Morning Routine",
                                "How you start your day sets the tone for everything. Build an effective routine.",
                                "Mar 10, 2024",
                                280,
                            ],
                            [
                                "Navigating Difficult Conversations",
                                "Avoidance solves nothing. Practical strategies for tough talks with empathy and clarity.",
                                "Feb 21, 2024",
                                155,
                            ],
                        ].map(([title, desc, date, views], i) => (
                            <div
                                key={i}
                                className="flex flex-col gap-4 rounded-xl border border-base-300 bg-base-100 p-5"
                            >
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-lg font-bold text-base-content">{title}</h3>
                                    <p className="text-sm text-base-content/70 line-clamp-3">{desc}</p>
                                </div>

                                <div className="flex items-center justify-between text-base-content/70">
                                    <p className="text-xs">{date}</p>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-base"><FaRegEye /></span>
                                        <span className="text-xs">{views}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </main>
        </div>
    );
};

export default UserProfile;
