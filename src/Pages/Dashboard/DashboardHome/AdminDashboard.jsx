import React from 'react';

const AdminDashboard = () => {
    return (
        <div>
            <main className="flex-1 p-6 lg:p-10">

                {/* Heading */}
                <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
                    <p className="text-4xl font-black leading-tight tracking-[-0.033em] text-base-content">
                        Dashboard
                    </p>

                    <div className="flex gap-2">
                        <button className="flex h-8 items-center justify-center gap-x-2 rounded-lg bg-base-300 px-3">
                            <p className="text-sm font-medium text-base-content">Last 7 Days</p>
                        </button>
                        <button className="flex h-8 items-center justify-center gap-x-2 rounded-lg bg-primary/20 px-3">
                            <p className="text-primary text-sm font-medium">Last 30 Days</p>
                        </button>
                        <button className="flex h-8 items-center justify-center gap-x-2 rounded-lg bg-base-300 px-3">
                            <p className="text-sm font-medium text-base-content">All Time</p>
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {[
                        ["Total Users", "15,234"],
                        ["Total Public Lessons", "45,890"],
                        ["Reported Lessons", "12", "text-error"],
                        ["Today's New Lessons", "+78", "text-primary"]
                    ].map(([label, value, extraClass], i) => (
                        <div
                            key={i}
                            className="flex flex-col gap-2 rounded-xl p-6 border border-base-300 bg-base-100"
                        >
                            <p className="text-base font-medium text-base-content">{label}</p>
                            <p className={`text-4xl font-bold leading-tight ${extraClass || "text-base-content"}`}>
                                {value}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

                    <div className="rounded-xl border border-base-300 bg-base-100 p-6">
                        <h3 className="text-lg font-semibold mb-4 text-base-content">User Growth</h3>
                        <div className="w-full h-64 flex items-center justify-center">
                            <img
                                alt="Line chart"
                                className="w-full h-full object-contain"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsZrZmXIh3CJwkEsu2zYySCVwEdWSq3MgveQg7APoMVICB0otD4EmyVzbDRGA3GVYFLGhsuWOqOjIxgP98ZMb4JHDztizs1JmDExRmi2wzhtiG0uCZNe19du2oXjAltHdREU4WVNxfOYMyfx5iPYGs-zdkjqBNoJw8HKc9ZDs00FbUAPB2b4Qsul1EJXrAbYZVNRlZz5-DkwtPXLg5tFa3_BvnJ3pMc_XVz-C5nMiq1OeUbs7wMfWAlIynjuhuXF4HdWqNvoOff0Y"
                            />
                        </div>
                    </div>

                    <div className="rounded-xl border border-base-300 bg-base-100 p-6">
                        <h3 className="text-lg font-semibold mb-4 text-base-content">Lesson Creation Growth</h3>
                        <div className="w-full h-64 flex items-center justify-center">
                            <img
                                alt="Area chart"
                                className="w-full h-full object-contain"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4fKUd5BqqRrU0O5X0jKoHSZW72bV3_Bg-amy-4okZ_XgF50lcQS0IJ6QV7ct_J4JySn285lObTD4qru9aVYR7KzJj71-oxnOGFscQLxlon4Xf2GJlPxsdI-mepEkLDccZqc4F7odrW_YK92fGhfdMP7y-DguFlXz1XLE5esCdx_opzSnAPdq6VLArDG868mHyL4a8dMfYP3ROjD8r3p09zt78e1wm0h3qNHeENIWJlMrqKmFv-Le3K3LQpyg6ogK0sQPEiSIEK3Y"
                            />
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="rounded-xl border border-base-300 bg-base-100 p-6">
                    <h3 className="text-lg font-semibold mb-4 text-base-content">Most Active Contributors</h3>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-base-300">
                                    {["Username", "Lesson Count", "Join Date", "Last Activity"].map((head, i) => (
                                        <th key={i} className={`py-3 px-4 text-sm font-semibold text-base-content/70 uppercase ${i === 1 ? "text-right" : ""}`}>
                                            {head}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {[
                                    ["AlexMorgan", 245, "2023-01-15", "2 hours ago"],
                                    ["CaseyJordan", 198, "2022-11-20", "1 day ago"],
                                    ["RileyPace", 153, "2023-05-10", "5 hours ago"],
                                    ["JordanTaylor", 121, "2023-08-02", "3 days ago"],
                                    ["SkylerFinn", 99, "2024-01-05", "1 week ago"],
                                ].map(([name, count, join, last], i) => (
                                    <tr key={i} className="border-b border-base-200 hover:bg-base-200/50">
                                        <td className="py-4 px-4 text-base-content text-sm font-medium">{name}</td>
                                        <td className="py-4 px-4 text-base-content text-sm font-medium text-right">{count}</td>
                                        <td className="py-4 px-4 text-base-content/70 text-sm">{join}</td>
                                        <td className="py-4 px-4 text-base-content/70 text-sm">{last}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default AdminDashboard;
