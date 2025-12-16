import React, { useState } from 'react'; // ⭐️ Import useState
import { MdOutlineFavorite, MdRemoveCircleOutline } from 'react-icons/md';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loading from '../../../Components/Loading/Loading';
import { Link } from 'react-router';


// Define your possible filter options
const CATEGORY_OPTIONS = ["Relationships", "Personal Growth", "Career", "Health", "Finance",];
const TONE_OPTIONS = ["Motivational", "Sad", "Realization", "Gratitude"];


const MyFavorites = () => {
    const { axiosSecure, loading: axiosLoading } = useAxiosSecure();
    const queryClient = useQueryClient();

    // ⭐️ 1. Define State for Filters
    const [selectedCategory, setSelectedCategory] = useState('Filter by Category');
    const [selectedTone, setSelectedTone] = useState('Filter by Tone');

    // ⭐️ 2. Define Handlers for Filter Changes
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleToneChange = (e) => {
        setSelectedTone(e.target.value);
    };

    const handleResetFilters = () => {
        setSelectedCategory('Filter by Category');
        setSelectedTone('Filter by Tone');
    };

    // ⭐️ 3. Fetch Favorite Lessons (Update queryKey and queryFn)
    const {
        data: favoriteLessons,
        isLoading: lessonsLoading,
        error: lessonsError
    } = useQuery({
        // ⭐️ The query key now depends on the filter state, forcing a re-fetch when filters change
        queryKey: ['myFavorites', selectedCategory, selectedTone],
        queryFn: async () => {
            const params = {};
            if (selectedCategory !== 'Filter by Category') {
                params.category = selectedCategory;
            }
            if (selectedTone !== 'Filter by Tone') {
                params.tone = selectedTone;
            }

            // Pass the filters as query parameters
            const res = await axiosSecure.get('/my-favorites', { params });
            return res.data;
        },
        staleTime: 1000 * 60 * 5,
    });

    // 4. Remove From Favorites Mutation (Logic remains the same)
    const removeFavoriteMutation = useMutation({
        mutationFn: (lessonIdToRemove) => {
            return axiosSecure.post(`/lesson/${lessonIdToRemove}/favorite`, { action: 'unfavorite' });
        },
        onMutate: async (lessonIdToRemove) => {
            await queryClient.cancelQueries({ queryKey: ['myFavorites', selectedCategory, selectedTone] });
            const previousFavorites = queryClient.getQueryData(['myFavorites', selectedCategory, selectedTone]);

            queryClient.setQueryData(['myFavorites', selectedCategory, selectedTone], (oldData) => {
                return oldData.filter(lesson => lesson._id !== lessonIdToRemove);
            });

            return { previousFavorites };
        },
        onError: (err, lessonIdToRemove, context) => {
            queryClient.setQueryData(['myFavorites', selectedCategory, selectedTone], context.previousFavorites);
            alert(`Failed to remove lesson from favorites. Please try again. ${err.message}`);
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['myFavorites'] });
            queryClient.invalidateQueries({ queryKey: ['users', 'me'] });
        },
    });

    const handleRemoveFavorite = (lessonId) => {
        if (removeFavoriteMutation.isPending) return;
        removeFavoriteMutation.mutate(lessonId);
    };

    // --- Loading and Error States ---
    if (lessonsLoading || axiosLoading) {
        return <Loading />;
    }

    if (lessonsError) {
        return (
            <div className="text-center p-10 dark:text-red-400">
                Error fetching favorites: {lessonsError.message}
            </div>
        );
    }

    const lessons = favoriteLessons || [];

    // --- Component JSX ---
    return (
        <div>
            <main className="flex-1 px-4 py-8 sm:px-6 md:px-8">
                <div className="mx-auto max-w-7xl">
                    {/* Page Heading */}
                    <div className="mb-6">
                        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white">My Favorite Lessons</h1>
                    </div>

                    {/* Chips/Filters */}
                    <div className="mb-6 flex flex-wrap items-center gap-3">
                        <div className="relative">
                            <select
                                // ⭐️ Bind value and handler
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                                className="select h-9 appearance-none rounded-lg border border-slate-300 bg-background-light pl-4 pr-9 text-sm font-medium text-slate-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-primary/20 dark:bg-background-dark dark:text-slate-300"
                            >
                                <option>Filter by Category</option>
                                {CATEGORY_OPTIONS.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                        <div className="relative">
                            <select
                                // ⭐️ Bind value and handler
                                value={selectedTone}
                                onChange={handleToneChange}
                                className="select h-9 appearance-none rounded-lg border border-slate-300 bg-background-light pl-4 pr-9 text-sm font-medium text-slate-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-primary/20 dark:bg-background-dark dark:text-slate-300"
                            >
                                <option>Filter by Tone</option>
                                {TONE_OPTIONS.map(tone => (
                                    <option key={tone} value={tone}>{tone}</option>
                                ))}
                            </select>
                        </div>
                        <button
                            // ⭐️ Add Reset Handler
                            onClick={handleResetFilters}
                            className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-transparent px-4 text-sm font-medium text-slate-600 hover:bg-primary/10 dark:text-slate-300 dark:hover:bg-primary/20"
                        >
                            <span>Reset Filters</span>
                        </button>
                    </div>

                    {/* Conditional Rendering: Table or Empty State */}
                    {lessons.length > 0 ? (
                        <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-primary/20">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-slate-200 dark:divide-primary/20">
                                    <thead className="bg-slate-50 dark:bg-primary/10">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-300" scope="col">Lesson Title</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-300" scope="col">Category</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-300" scope="col">Emotional Tone</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-300" scope="col">Author</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-300" scope="col">Date Saved</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-300" scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 bg-background-light dark:divide-primary/20 dark:bg-background-dark">
                                        {lessons.map(lesson => (
                                            <tr key={lesson._id}>
                                                <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">{lesson.lessonInfo.title}</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{lesson.lessonInfo.category}</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{lesson.lessonInfo.tone}</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{lesson.author.name}</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                                                    {new Date(lesson.metadata.createdDate).toLocaleDateString()}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                                    <div className="flex items-center gap-4">
                                                        <Link
                                                            to={`/lessondetails/${lesson._id}`}
                                                            className="flex h-8 items-center justify-center rounded-md bg-primary/20 px-3 text-sm font-bold text-primary hover:bg-primary/30"
                                                        >
                                                            View Lesson
                                                        </Link>
                                                        <button
                                                            onClick={() => handleRemoveFavorite(lesson._id)}
                                                            disabled={removeFavoriteMutation.isPending}
                                                            aria-label="Remove from favorites"
                                                            className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 disabled:opacity-50"
                                                        >
                                                            <MdRemoveCircleOutline size={24} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        // Empty State / No Results Message
                        <div className="mt-12 flex flex-col items-center justify-center gap-6 rounded-lg border border-dashed border-slate-300 p-12 dark:border-primary/20">
                            {/* Display a different message if filters are active */}
                            {(selectedCategory !== 'Filter by Category' || selectedTone !== 'Filter by Tone') ? (
                                <div className="flex max-w-sm flex-col items-center gap-2 text-center">
                                    <p className="text-lg font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white">No lessons match your filter criteria.</p>
                                    <p className="text-sm font-normal leading-normal text-slate-600 dark:text-slate-400">Try adjusting your category or tone filters.</p>
                                    <button
                                        onClick={handleResetFilters}
                                        className="mt-4 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-black text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-80"
                                    >
                                        <span className="truncate">Clear Filters</span>
                                    </button>
                                </div>
                            ) : (
                                // Original Empty State
                                <>
                                    <div className="w-full max-w-[280px] text-primary/50">
                                        <MdOutlineFavorite size={64} className="mx-auto" />
                                    </div>
                                    <div className="flex max-w-sm flex-col items-center gap-2 text-center">
                                        <p className="text-lg font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white">You haven't favorited any lessons yet.</p>
                                        <p className="text-sm font-normal leading-normal text-slate-600 dark:text-slate-400">Start exploring to discover lessons that resonate with you and save them for later.</p>
                                    </div>
                                    <Link to="/lessons" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-black text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-80">
                                        <span className="truncate">Discover Lessons</span>
                                    </Link>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default MyFavorites;