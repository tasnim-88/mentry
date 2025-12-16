import React, { useState } from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { CiFlag1 } from 'react-icons/ci';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { MdBookmarkBorder, MdFavoriteBorder, MdOutlineTimer, MdOutlineUpdate, MdOutlineWorkspacePremium, MdVisibility } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Link, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Loading from '../../Components/Loading/Loading';


// Define Report Reasons
const REPORT_REASONS = [
    'Inappropriate Content',
    'Hate Speech or Harassment',
    'Misleading or False Information',
    'Spam or Promotional Content',
    'Sensitive or Disturbing Content',
    'Other'
];

// Helper to format date relative to now (e.g., "2 days ago")
const timeSince = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) return interval + " years ago";
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return interval + " months ago";
    interval = Math.floor(seconds / 86400);
    if (interval > 1) return interval + " days ago";
    interval = Math.floor(seconds / 3600);
    if (interval > 1) return interval + " hours ago";
    interval = Math.floor(seconds / 60);
    if (interval > 1) return interval + " minutes ago";
    return Math.floor(seconds) + " seconds ago";
}


// --- Comment Card Component ---
const CommentCard = ({ comment }) => {
    // Assuming comment structure: { _id, content, createdAt, author: { name, profileImage } }
    const { content, createdAt, author } = comment;

    return (
        <div className="flex items-start gap-4">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 overflow-hidden shrink-0">
                <img src={author.profileImage || 'https://via.placeholder.com/80'} alt={`${author.name}'s avatar`} className='w-full h-full object-cover' />
            </div>
            <div className="flex-1">
                <div className="flex items-baseline gap-2">
                    <p className="font-bold text-black dark:text-white">{author.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{timeSince(createdAt)}</p>
                </div>
                {/* Ensure content preserves line breaks if present */}
                <p className="text-gray-800 dark:text-gray-300 mt-1 whitespace-pre-line">{content}</p>
            </div>
        </div>
    );
};


const LessonDetails = () => {
    const { id } = useParams();
    const { axiosSecure, loading: axiosLoading } = useAxiosSecure();
    const queryClient = useQueryClient();
    const { user, loading: userLoading } = useAuth();

    // State for the comment input field
    const [newCommentText, setNewCommentText] = useState('');

    // --- Data Fetching ---

    // 1. Fetch Lesson Details
    const { data: lessonData, isLoading: lessonLoading } = useQuery({
        queryKey: ['lessonDetails', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/lessondetails/${id}`);
            return res.data;
        },
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
    });

    // 2. Fetch Author Profile
    const authorUid = lessonData?.lesson?.author?.uid;
    const { data: authorProfile, isLoading: authorLoading } = useQuery({
        queryKey: ['authorProfile', authorUid],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${authorUid}`);
            return res.data;
        },
        enabled: !!authorUid && !!lessonData,
        staleTime: 1000 * 60 * 10,
    });

    // 3. Fetch Comments
    const { data: comments, isLoading: commentsLoading } = useQuery({
        queryKey: ['lessonComments', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/lesson/${id}/comments`);
            // The server returns { comments: [...] }
            return res.data.comments;
        },
        enabled: !!id,
        staleTime: 1000 * 30,
    });

    // 4. Fetch Similar Lessons
    const category = lessonData?.lesson?.lessonInfo?.category;
    const tone = lessonData?.lesson?.lessonInfo?.tone;
    const { data: similarLessons, isLoading: similarLoading } = useQuery({
        queryKey: ['similarLessons', id, category, tone],
        queryFn: async () => {
            const res = await axiosSecure.get(`/similar-lessons/${id}`, {
                params: { category, tone }
            });
            return res.data;
        },
        enabled: !!lessonData && !!(category || tone),
    });

    // --- Mutations ---

    // Like/Unlike Mutation
    const likeMutation = useMutation({
        mutationFn: (action) => {
            return axiosSecure.post(`/lesson/${id}/like`, { action });
        },
        onMutate: async (newAction) => {
            await queryClient.cancelQueries({ queryKey: ['lessonDetails', id] });
            const previousLessonData = queryClient.getQueryData(['lessonDetails', id]);
            const isLiking = newAction === 'like';

            const newStats = {
                ...previousLessonData.lesson.stats,
                likes: previousLessonData.lesson.stats.likes + (isLiking ? 1 : -1),
            };

            queryClient.setQueryData(['lessonDetails', id], (oldData) => {
                return {
                    ...oldData,
                    lesson: {
                        ...oldData.lesson,
                        stats: newStats,
                        userHasLiked: isLiking,
                    },
                };
            });
            return { previousLessonData };
        },
        onError: (err, newAction, context) => {
            queryClient.setQueryData(['lessonDetails', id], context.previousLessonData);
            Swal.fire({ icon: 'error', title: 'Action Failed', text: `Failed to ${newAction}: ${err.message}.` });
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['lessonDetails', id] });
        },
    });

    // Favorite/Unfavorite Mutation
    const favoriteMutation = useMutation({
        mutationFn: (action) => {
            return axiosSecure.post(`/lesson/${id}/favorite`, { action });
        },
        onMutate: async (newAction) => {
            await queryClient.cancelQueries({ queryKey: ['lessonDetails', id] });
            const previousLessonData = queryClient.getQueryData(['lessonDetails', id]);
            const isFavoriting = newAction === 'favorite';

            const newStats = {
                ...previousLessonData.lesson.stats,
                favorites: previousLessonData.lesson.stats.favorites + (isFavoriting ? 1 : -1),
            };

            queryClient.setQueryData(['lessonDetails', id], (oldData) => {
                return {
                    ...oldData,
                    lesson: {
                        ...oldData.lesson,
                        stats: newStats,
                        userHasFavorited: isFavoriting,
                    },
                };
            });
            return { previousLessonData };
        },
        onError: (err, newAction, context) => {
            queryClient.setQueryData(['lessonDetails', id], context.previousLessonData);
            Swal.fire({ icon: 'error', title: 'Action Failed', text: `Failed to ${newAction}: ${err.message}.` });
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['lessonDetails', id] });
            queryClient.invalidateQueries({ queryKey: ['users', 'me'] });
            queryClient.invalidateQueries({ queryKey: ['myFavorites'] });
        },
    });

    // Report Mutation
    const reportMutation = useMutation({
        mutationFn: (reportData) => {
            return axiosSecure.post(`/lesson/${id}/report`, reportData);
        },
        onSuccess: () => {
            Swal.fire({
                icon: 'success',
                title: 'Report Submitted!',
                text: 'Your report will be reviewed shortly.',
                confirmButtonColor: '#34d399',
            });
        },
        onError: (err) => {
            Swal.fire({
                icon: 'error',
                title: 'Report Failed',
                text: `Could not submit report: ${err.response?.data?.message || err.message}`,
                confirmButtonColor: '#ef4444',
            });
        },
    });

    // Comment Mutation
    const commentMutation = useMutation({
        mutationFn: (commentData) => {
            return axiosSecure.post(`/lesson/${id}/comments`, commentData);
        },
        onSuccess: () => {
            setNewCommentText(''); // Clear the input field
            // Invalidate and refetch comments to update the list immediately
            queryClient.invalidateQueries({ queryKey: ['lessonComments', id] });
            Swal.fire({
                icon: 'success',
                title: 'Comment Posted!',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
            });
        },
        onError: (err) => {
            Swal.fire({
                icon: 'error',
                title: 'Failed to Post Comment',
                text: `Error: ${err.response?.data?.message || err.message}`,
                confirmButtonColor: '#ef4444',
            });
        },
    });


    // --- Interaction Handlers ---

    const handleReport = () => {
        if (reportMutation.isPending) return;

        Swal.fire({
            title: 'Report This Lesson',
            html: `
                <div class="text-left dark:text-gray-300">
                    <p class="mb-4">Please select the most appropriate reason for reporting this content:</p>
                    
                    <label for="swal-reason" class="block text-sm font-medium mb-1">Reason:</label>
                    <select id="swal-reason" class="swal2-select w-full p-2 border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-700">
                        ${REPORT_REASONS.map(reason => `<option value="${reason}">${reason}</option>`).join('')}
                    </select>

                    <textarea
                        id="swal-other-reason"
                        placeholder="Please provide details for 'Other' reason..."
                        rows="3"
                        class="swal2-textarea mt-3 hidden w-full p-2 border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-700"
                    ></textarea>
                </div>
            `,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Submit Report',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#6b7280',
            preConfirm: () => {
                const reasonSelect = document.getElementById('swal-reason');
                const reason = reasonSelect.value;
                const otherReasonTextarea = document.getElementById('swal-other-reason');
                let finalReason = reason;

                if (reason === 'Other') {
                    const otherText = otherReasonTextarea.value.trim();
                    if (!otherText) {
                        Swal.showValidationMessage('Please provide details for the "Other" reason.');
                        return false;
                    }
                    finalReason = `Other: ${otherText}`;
                }
                return finalReason;
            },
            didOpen: () => {
                const reasonSelect = document.getElementById('swal-reason');
                const otherReasonTextarea = document.getElementById('swal-other-reason');

                const toggleOtherVisibility = () => {
                    if (reasonSelect.value === 'Other') {
                        otherReasonTextarea.classList.remove('hidden');
                    } else {
                        otherReasonTextarea.classList.add('hidden');
                    }
                };

                toggleOtherVisibility();
                reasonSelect.addEventListener('change', toggleOtherVisibility);
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const finalReason = result.value;
                if (finalReason) {
                    reportMutation.mutate({ reason: finalReason });
                }
            }
        });
    };

    const handleToggleLike = () => {
        if (!user) {
            Swal.fire({ icon: 'info', title: 'Login Required', text: 'You must be logged in to like a lesson.' });
            return;
        }
        const currentUserHasLiked = lessonData?.userHasLiked;
        const action = currentUserHasLiked ? 'unlike' : 'like';
        if (likeMutation.isPending) return;
        likeMutation.mutate(action);
    };

    const handleToggleFavorite = () => {
        if (!user) {
            Swal.fire({ icon: 'info', title: 'Login Required', text: 'You must be logged in to favorite a lesson.' });
            return;
        }
        const currentUserHasFavorited = lessonData?.userHasFavorited;
        const action = currentUserHasFavorited ? 'unfavorite' : 'favorite';
        if (favoriteMutation.isPending) return;
        favoriteMutation.mutate(action);
    };

    const handleShare = () => {
        const shareUrl = window.location.href;
        navigator.clipboard.writeText(shareUrl).then(() => {
            Swal.fire({
                icon: 'info',
                title: 'Link Copied',
                text: 'Lesson URL copied to clipboard!',
                showConfirmButton: false,
                timer: 1500,
            });
        });
    };

    // Submit Comment Handler
    const handleSubmitComment = (e) => {
        e.preventDefault();
        const content = newCommentText.trim();

        if (!user) {
            Swal.fire({ icon: 'info', title: 'Login Required', text: 'You must be logged in to post a comment.' });
            return;
        }

        if (!content) {
            Swal.fire({ icon: 'warning', title: 'Comment Empty', text: 'Please write something before posting.' });
            return;
        }

        commentMutation.mutate({ content });
    };

    // --- Loading and Error Checks ---
    if (lessonLoading || axiosLoading || authorLoading || commentsLoading || userLoading) {
        return <Loading />;
    }

    if (!lessonData || !lessonData.lesson) {
        return <div className="text-center p-10 dark:text-white">Lesson not found or access denied.</div>;
    }

    // --- Data Destructuring ---
    const { lesson, isPremiumUser } = lessonData;
    const { title, description, featuredImage } = lesson.lessonInfo;

    // Author details
    const currentTotalLessons = authorProfile?.totalLessons ?? lesson.author.totalLessons ?? 0;
    const currentAuthorName = authorProfile?.displayName || lesson.author.name;
    const currentProfileImage = authorProfile?.photoURL || lesson.author.profileImage;

    // Engagement status
    const currentUserHasLiked = lessonData.userHasLiked || false;
    const currentUserHasFavorited = lessonData.userHasFavorited || false;

    // Stats calculation
    const likesCount = lesson.stats.likes || 0;
    const favoritesCount = lesson.stats.favorites || 0;
    const viewsCount = lesson.stats.views || 0;

    // Metadata
    const { createdDate, lastUpdated, readingTime } = lesson.metadata;

    // Access control
    const isPremiumLesson = lesson.metadata.accessLevel === 'Premium';
    const canAccess = !isPremiumLesson || isPremiumUser;

    // Formatting utility
    const formatCount = (count) => (count / 1000) >= 1 ? (count / 1000).toFixed(1) + 'K' : count;
    const formattedLikes = formatCount(likesCount);
    const formattedFavorites = formatCount(favoritesCount);
    const formattedViews = formatCount(viewsCount);

    // Helper component for the lesson card (for similar lessons)
    const LessonCard = ({ lessonItem }) => (
        <div className="bg-gray-100 dark:bg-white/5 rounded-xl overflow-hidden group">
            <div className="w-full h-40 bg-cover bg-center">
                <img src={lessonItem.lessonInfo.featuredImage || 'https://via.placeholder.com/400x160'} alt={lessonItem.lessonInfo.title} className='w-full h-full object-cover' />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold text-black dark:text-white group-hover:text-primary transition-colors">{lessonItem.lessonInfo.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{lessonItem.lessonInfo.category} - {lessonItem.lessonInfo.tone}</p>
                <Link
                    to={`/lessondetails/${lessonItem._id}`}
                    className="mt-4 inline-flex items-center text-primary text-sm font-medium hover:underline"
                >
                    Read Lesson
                </Link>
            </div>
        </div>
    );

    return (
        <div>
            <main className="px-4 sm:px-8 md:px-16 lg:px-24 flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col w-full max-w-6xl">
                    {/* Breadcrumb */}
                    <div className="flex flex-wrap gap-2 py-4">
                        <Link className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm font-medium leading-normal" to="/">Home</Link>
                        <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">/</span>
                        <Link className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm font-medium leading-normal" to="/lessons">Community Lessons</Link>
                        <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">/</span>
                        <span className="text-black dark:text-white text-sm font-medium leading-normal">{title}</span>
                    </div>

                    {/* Featured Image */}
                    <div className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-80">
                        <img src={featuredImage || 'https://via.placeholder.com/960x320'} alt={title} className='w-full object-cover min-h-80' />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 mt-8">
                        {/* Left Column (Content, Actions, Comments) */}
                        <div className="w-full lg:w-2/3">
                            {/* Lesson Information Section (1) */}
                            <h1 className="text-black dark:text-white tracking-tight text-4xl font-bold leading-tight pb-3">{title}</h1>
                            <div className="flex gap-3 pb-6 flex-wrap">
                                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/20 pl-4 pr-4">
                                    <p className="text-primary text-sm font-medium leading-normal">{lesson.lessonInfo.category}</p>
                                </div>
                                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/20 pl-4 pr-4">
                                    <p className="text-primary text-sm font-medium leading-normal">{lesson.lessonInfo.tone}</p>
                                </div>
                                {isPremiumLesson && (
                                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-yellow-500/20 pl-4 pr-4">
                                        <MdOutlineWorkspacePremium className="text-yellow-500" />
                                        <p className="text-yellow-500 text-sm font-medium leading-normal">Premium</p>
                                    </div>
                                )}
                            </div>

                            {/* Description */}
                            <div className="relative">
                                <div className={`prose prose-lg dark:prose-invert text-gray-800 dark:text-gray-300 space-y-4 ${!canAccess ? 'blur-md select-none' : ''}`}>
                                    <div dangerouslySetInnerHTML={{ __html: description }} />
                                </div>

                                {/* Upgrade Banner (Premium check) */}
                                {!canAccess && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 rounded-xl p-8 text-center backdrop-blur-sm">
                                        <MdOutlineWorkspacePremium className="text-5xl text-primary mb-4" />
                                        <h3 className="text-2xl font-bold text-white mb-2">Unlock this Premium Lesson</h3>
                                        <p className="text-gray-300 mb-6 max-w-sm">
                                            Upgrade your plan to get full access to this lesson and hundreds of others from creators around the world.
                                        </p>
                                        {/* Redirect to pricing page */}
                                        <Link to="/pricing" className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-black text-base font-bold leading-normal tracking-[0.015em]">
                                            <span className="truncate">Upgrade Now</span>
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Interaction Buttons */}
                            <div className="flex flex-wrap items-center gap-2 border-y border-white/10 py-4 my-8">
                                {/* Like Button */}
                                <button
                                    onClick={handleToggleLike}
                                    disabled={likeMutation.isPending || !user}
                                    className={`flex items-center gap-2 rounded-lg h-10 px-4 bg-gray-200 dark:bg-white/10 text-black dark:text-white text-sm font-medium 
                                        ${currentUserHasLiked ? 'bg-red-500/20 text-red-500 dark:bg-red-500/30 dark:text-red-400' : 'hover:bg-gray-300 dark:hover:bg-white/20'}
                                        ${(likeMutation.isPending || !user) ? 'opacity-50 cursor-not-allowed' : ''}
                                    `}
                                >
                                    <MdFavoriteBorder className="text-xl" /> {currentUserHasLiked ? 'Liked' : 'Like'}
                                </button>
                                {/* Save to Favorites Button */}
                                <button
                                    onClick={handleToggleFavorite}
                                    disabled={favoriteMutation.isPending || !user}
                                    className={`flex items-center gap-2 rounded-lg h-10 px-4 bg-gray-200 dark:bg-white/10 text-black dark:text-white text-sm font-medium 
                                        ${currentUserHasFavorited ? 'bg-primary/20 text-primary dark:bg-primary/30 dark:text-primary' : 'hover:bg-gray-300 dark:hover:bg-white/20'}
                                        ${(favoriteMutation.isPending || !user) ? 'opacity-50 cursor-not-allowed' : ''}
                                    `}
                                >
                                    <MdBookmarkBorder className="text-xl" /> {currentUserHasFavorited ? 'Saved' : 'Save to Favorites'}
                                </button>
                                {/* Share Buttons */}
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 pl-2">Share:</span>
                                    <button onClick={handleShare} className="flex items-center justify-center rounded-lg size-10 bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 cursor-pointer" title="Copy Link"><FaLinkedin size={20} /></button>
                                    <a className="flex items-center justify-center rounded-lg size-10 bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaFacebook size={20} /></a>
                                    <a className="flex items-center justify-center rounded-lg size-10 bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20" href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer"><BsTwitterX size={20} /></a>
                                </div>

                                <div className="grow"></div>
                                {/* Report Lesson Button */}
                                <button onClick={handleReport} disabled={reportMutation.isPending} className="flex items-center gap-2 rounded-lg h-10 px-4 bg-gray-200 dark:bg-white/10 text-red-500 text-sm font-medium hover:bg-gray-300 dark:hover:bg-white/20 disabled:opacity-50">
                                    <CiFlag1 className="text-xl" /> {reportMutation.isPending ? 'Reporting...' : 'Report'}
                                </button>
                            </div>

                            {/* Comments Section */}
                            <div>
                                <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Comments ({comments?.length ?? 0})</h2>

                                {/* Comment Input */}
                                {user ? (
                                    <form onSubmit={handleSubmitComment} className="flex items-start gap-4 mb-6">
                                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 overflow-hidden shrink-0">
                                            <img src={user.photoURL || 'https://via.placeholder.com/80'} alt="Your avatar" className='w-full h-full object-cover' />
                                        </div>
                                        <div className="flex-1">
                                            <textarea
                                                className="w-full rounded-lg bg-gray-200 dark:bg-white/5 border-transparent focus:border-primary focus:ring-primary text-black dark:text-white"
                                                placeholder="Add your thoughts..."
                                                rows="3"
                                                value={newCommentText}
                                                onChange={(e) => setNewCommentText(e.target.value)}
                                                disabled={commentMutation.isPending}
                                            />
                                            <button
                                                type="submit"
                                                disabled={commentMutation.isPending || !newCommentText.trim()}
                                                className="mt-2 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-black text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {commentMutation.isPending ? 'Posting...' : 'Post Comment'}
                                            </button>
                                        </div>
                                    </form>
                                ) : (
                                    <p className="mb-6 text-gray-700 dark:text-gray-300">
                                        Please <Link to="/login" className="text-primary hover:underline font-medium">log in</Link> to post a comment.
                                    </p>
                                )}

                                {/* Existing comments list */}
                                <div className="space-y-6">
                                    {commentsLoading && <p className='text-center dark:text-gray-400'>Loading comments...</p>}
                                    {(!commentsLoading && comments && comments.length > 0) ? (
                                        comments.map(comment => (
                                            <CommentCard key={comment._id} comment={comment} />
                                        ))
                                    ) : (
                                        (!commentsLoading && <p className='text-center dark:text-gray-400'>Be the first to comment!</p>)
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Column (Author Card, Metadata, Stats) */}
                        <div className="w-full lg:w-1/3 space-y-8 lg:sticky lg:top-24 self-start">
                            {/* Author / Creator Section */}
                            <div className="bg-gray-100 dark:bg-white/5 rounded-xl p-6">
                                <div className="flex flex-col items-center text-center">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-20 mb-4 overflow-hidden">
                                        <img src={currentProfileImage || 'https://via.placeholder.com/80'} alt={currentAuthorName} className='w-full h-full object-cover' />
                                    </div>
                                    <h3 className="text-xl font-bold text-black dark:text-white">{currentAuthorName}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Total {currentTotalLessons} lessons</p>
                                    <Link to={`/dashboard/profile`} className="mt-4 w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-white/10 text-black dark:text-white text-sm font-medium hover:bg-gray-300 dark:hover:bg-white/20">
                                        View all lessons by this author
                                    </Link>
                                </div>
                            </div>

                            {/* Lesson Metadata */}
                            <div className="bg-gray-100 dark:bg-white/5 rounded-xl p-6 space-y-4">
                                <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-gray-300">
                                    <SlCalender className="text-xl text-gray-500 dark:text-gray-400" />
                                    <div>
                                        <p className="font-medium">Created Date</p>
                                        <p className="text-gray-500 dark:text-gray-400">{new Date(createdDate).toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-gray-300">
                                    <MdOutlineUpdate className="text-xl text-gray-500 dark:text-gray-400" />
                                    <div>
                                        <p className="font-medium">Last Updated</p>
                                        <p className="text-gray-500 dark:text-gray-400">{new Date(lastUpdated).toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-gray-300">
                                    <MdOutlineTimer className="text-xl text-gray-500 dark:text-gray-400" />
                                    <div>
                                        <p className="font-medium">Reading Time</p>
                                        <p className="text-gray-500 dark:text-gray-400">{readingTime}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-gray-300">
                                    <MdVisibility className="text-xl text-gray-500 dark:text-gray-400" />
                                    <div>
                                        <p className="font-medium">Access</p>
                                        <p className="text-gray-500 dark:text-gray-400">{isPremiumLesson ? 'Premium' : 'Free'}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Stats & Engagement Section */}
                            <div className="bg-gray-100 dark:bg-white/5 rounded-xl p-6 flex justify-around">
                                <div className="text-center">
                                    <MdVisibility className="text-3xl text-primary" />
                                    <p className="mt-1 text-xl font-bold text-black dark:text-white">{formattedViews}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Views</p>
                                </div>
                                <div className="text-center">
                                    <MdFavoriteBorder className="text-3xl text-primary" />
                                    <p className="mt-1 text-xl font-bold text-black dark:text-white"> {formattedLikes}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Likes</p>
                                </div>
                                <div className="text-center">
                                    <MdBookmarkBorder className="text-3xl text-primary" />
                                    <p className="mt-1 text-xl font-bold text-black dark:text-white">
                                        {formattedFavorites}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Favorites</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Similar and Recommended Lessons */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Similar Lessons</h2>
                        {similarLoading && <p className='text-center dark:text-gray-300'>Loading similar lessons...</p>}
                        {(!similarLoading && (!similarLessons || similarLessons.length === 0)) && (
                            <p className='text-center dark:text-gray-300'>No similar lessons found.</p>
                        )}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {similarLessons?.map(lessonItem => (
                                <LessonCard key={lessonItem._id} lessonItem={lessonItem} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LessonDetails;