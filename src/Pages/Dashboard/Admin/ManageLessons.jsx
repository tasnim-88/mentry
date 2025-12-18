import React, { useState } from 'react';
import { IoSearch, IoTrash, IoStar, IoCheckmarkCircle, IoFilter } from 'react-icons/io5';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loading from '../../../Components/Loading/Loading';

const ManageLessons = () => {
    const { axiosSecure } = useAxiosSecure();
    const queryClient = useQueryClient();

    // Filter States
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
    const [filterVisibility, setFilterVisibility] = useState('');
    const [showOnlyUnreviewed, setShowOnlyUnreviewed] = useState(false);

    // Fetch All Lessons
    const { data: lessons = [], isLoading } = useQuery({
        queryKey: ['admin-lessons'],
        queryFn: async () => {
            const res = await axiosSecure.get('/lessons');
            return res.data;
        }
    });

    // Fetch Stats
    const { data: stats = {} } = useQuery({
        queryKey: ['lesson-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin/lesson-stats');
            return res.data;
        }
    });

    // Mutation for Moderation (Independent Statuses)
    const moderateMutation = useMutation({
        mutationFn: ({ id, updates }) => axiosSecure.patch(`/lessons/moderate/${id}`, updates),
        onSuccess: () => {
            queryClient.invalidateQueries(['admin-lessons', 'lesson-stats']);
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
            });
            Toast.fire({ icon: 'success', title: 'Status Updated' });
        }
    });

    // Mutation for Deletion
    const deleteMutation = useMutation({
        mutationFn: (id) => axiosSecure.delete(`/lessons/${id}`),
        onSuccess: () => {
            // Refetch data so the UI updates immediately
            queryClient.invalidateQueries(['admin-lessons']);
            queryClient.invalidateQueries(['lesson-stats']);

            Swal.fire({
                title: "Deleted!",
                text: "The lesson has been removed.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false
            });
        },
        onError: (error) => {
            Swal.fire("Error", "Could not delete the lesson.", "error");
            console.error("Delete Error:", error);
        }
    });

    // COMPLETE FILTERING LOGIC
    const filteredLessons = lessons.filter(lesson => {
        const matchesSearch =
            lesson.lessonInfo?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lesson.author?.name?.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory = filterCategory === '' || lesson.lessonInfo?.category === filterCategory;

        const matchesVisibility = filterVisibility === '' || lesson.metadata?.visibility === filterVisibility;

        // Show only unreviewed if the filter is active
        const matchesFlag = !showOnlyUnreviewed || lesson.isReviewed === false;

        return matchesSearch && matchesCategory && matchesVisibility && matchesFlag;
    });

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This action is permanent and cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            // Trigger the mutation here
            if (result.isConfirmed) {
                deleteMutation.mutate(id);
            }
        });
    };

    if (isLoading) return <Loading />;

    return (
        <main className="flex-1 p-8 overflow-y-auto bg-gray-50 dark:bg-[#0a0f0c]">
            <div className="max-w-7xl mx-auto">
                <p className="text-gray-900 dark:text-white text-4xl font-black mb-8">Manage Lessons</p>

                {/* Stats Section (Kept) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="p-6 bg-white dark:bg-[#111814] border dark:border-gray-800 rounded-xl shadow-sm">
                        <p className="text-sm text-gray-500">Public Lessons</p>
                        <p className="text-3xl font-bold dark:text-white">{stats.publicCount || 0}</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-[#111814] border dark:border-gray-800 rounded-xl shadow-sm">
                        <p className="text-sm text-gray-500">Private Lessons</p>
                        <p className="text-3xl font-bold dark:text-white">{stats.privateCount || 0}</p>
                    </div>
                    <div className="p-6 bg-orange-50 border-orange-200 border rounded-xl shadow-sm">
                        <p className="text-sm text-orange-800 font-medium">Pending Reports</p>
                        <p className="text-3xl font-bold text-orange-600">{stats.flaggedCount || 0}</p>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-6 items-center">
                    <div className="relative flex-1 min-w-[250px]">
                        <IoSearch className="absolute left-3 top-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 h-12 border rounded-lg dark:bg-[#1a2c22] dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-green-500 outline-none"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <select className="select h-12 border rounded-lg px-4 dark:bg-[#1a2c22] dark:text-white" onChange={(e) => setFilterCategory(e.target.value)}>
                        <option value="">All Categories</option>
                        <option value="Personal Growth">Personal Growth</option>
                        <option value="Career">Career</option>
                        <option value="Finance">Finance</option>
                        <option value="Health">Health</option>
                        <option value="Relationships">Relationships</option>
                    </select>
                    <select className="select h-12 border rounded-lg px-4 dark:bg-[#1a2c22] dark:text-white" onChange={(e) => setFilterVisibility(e.target.value)}>
                        <option value="">All Visibility</option>
                        <option value="Public">Public</option>
                        <option value="Private">Private</option>
                    </select>
                    <button onClick={() => setShowOnlyUnreviewed(!showOnlyUnreviewed)} className={`flex items-center gap-2 px-4 h-12 rounded-lg border transition-all ${showOnlyUnreviewed ? 'bg-orange-500 text-white' : 'bg-white dark:bg-[#1a2c22] dark:text-white'}`}>
                        <IoFilter /> {showOnlyUnreviewed ? 'Unreviewed' : 'All Flags'}
                    </button>
                </div>

                {/* Data Table */}
                <div className="bg-white dark:bg-[#111814] border dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 dark:bg-[#1a2c22] text-xs uppercase text-gray-500">
                            <tr>
                                <th className="px-6 py-4">#</th>
                                <th className="px-6 py-4">Lesson Details</th>
                                <th className="px-6 py-4">Visibility</th>
                                <th className="px-6 py-4">Current Status</th>
                                <th className="px-6 py-4 text-center">Mod Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y dark:divide-gray-800">
                            {filteredLessons.map((lesson, i) => (
                                <tr key={lesson._id} className="hover:bg-gray-50 dark:hover:bg-[#16241c] transition-colors">
                                    <td className="px-6 py-4 text-gray-400">{i + 1}</td>
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-gray-900 dark:text-white">{lesson.lessonInfo?.title}</div>
                                        <div className="text-[11px] text-gray-500">By {lesson.author?.name} • {lesson.lessonInfo?.category}</div>
                                    </td>
                                    {/* Visibility Badge (Kept) */}
                                    <td className="px-6 py-4">
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${lesson.metadata?.visibility === 'Public' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                            {lesson.metadata?.visibility}
                                        </span>
                                    </td>
                                    {/* SIMULTANEOUS STATUS BADGES */}
                                    <td className="px-6 py-4">
                                        <div className="flex flex-wrap gap-2 min-h-8 items-center">
                                            {lesson.isFeatured && (
                                                <span className="bg-[#0f1f18] text-[#22c55e] text-[11px] font-bold px-2 py-0.5 rounded border border-[#143328]">Featured</span>
                                            )}
                                            {lesson.isReviewed && (
                                                <span className="bg-[#121b33] text-[#3b82f6] text-[11px] font-bold px-2 py-0.5 rounded border border-[#1a2b52]">Reviewed</span>
                                            )}
                                        </div>
                                    </td>
                                    {/* MOD ACTIONS */}
                                    <td className="px-6 py-4">
                                        <div className="flex justify-center gap-6 items-center">
                                            <button
                                                onClick={() => moderateMutation.mutate({ id: lesson._id, updates: { isFeatured: !lesson.isFeatured } })}
                                                className={`transition-all transform hover:scale-110 ${lesson.isFeatured ? "text-[#22c55e]" : "text-gray-500"}`}
                                            >
                                                <IoStar size={24} />
                                            </button>
                                            <button
                                                onClick={() => moderateMutation.mutate({ id: lesson._id, updates: { isReviewed: !lesson.isReviewed } })}
                                                className={`transition-all transform hover:scale-110 ${lesson.isReviewed ? "text-[#3b82f6]" : "text-gray-500"}`}
                                            >
                                                <IoCheckmarkCircle size={26} />
                                            </button>
                                            <button onClick={() => handleDelete(lesson._id)} className="text-gray-300 hover:text-red-500">
                                                <IoTrash size={22} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
};

export default ManageLessons;