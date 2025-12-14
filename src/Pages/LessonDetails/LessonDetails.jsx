import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { CiFlag1 } from 'react-icons/ci';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { MdBookmarkBorder, MdFavoriteBorder, MdOutlineTimer, MdOutlineUpdate, MdOutlineWorkspacePremium, MdPictureAsPdf, MdVisibility } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Components/Loading/Loading';
import { useParams } from 'react-router';

const LessonDetails = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();

    const { data, isLoading } = useQuery({
        queryKey: ['lessonDetails', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/lessondetails/${id}`);
            return res.data; // { lesson, isPremiumUser }
        }
    });

    if (isLoading) {
        return <Loading />;
    }

    const { lesson, isPremiumUser } = data;
    const { title, category, description, featuredImage, tone, visibility } = lesson.lessonInfo;
    const { name, totalLessons, profileImage } = lesson.author;
    const { views, likes, favorites } = lesson.stats;
    const { createdDate, lastUpdated, readingTime } = lesson.metadata;

    // Determine access
    const isPremiumLesson = visibility === 'premium';
    const canAccess = !isPremiumLesson || isPremiumUser;

    return (
        <div>
            <main className="px-4 sm:px-8 md:px-16 lg:px-24 flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col w-full max-w-6xl">
                    {/* Breadcrumb */}
                    <div className="flex flex-wrap gap-2 py-4">
                        <a className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm font-medium leading-normal" href="#">Home</a>
                        <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">/</span>
                        <a className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm font-medium leading-normal" href="#">Community Lessons</a>
                        <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">/</span>
                        <span className="text-black dark:text-white text-sm font-medium leading-normal">{title}</span>
                    </div>

                    {/* Featured Image */}
                    <div className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-80">
                        <img src={featuredImage} alt={title} />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 mt-8">
                        {/* Left Column */}
                        <div className="w-full lg:w-2/3">
                            <h1 className="text-black dark:text-white tracking-tight text-4xl font-bold leading-tight pb-3">{title}</h1>
                            <div className="flex gap-3 pb-6 flex-wrap">
                                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/20 pl-4 pr-4">
                                    <p className="text-primary text-sm font-medium leading-normal">{category}</p>
                                </div>
                                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/20 pl-4 pr-4">
                                    <p className="text-primary text-sm font-medium leading-normal">{tone}</p>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="relative">
                                <div className={`prose prose-lg dark:prose-invert text-gray-800 dark:text-gray-300 space-y-4 ${!canAccess ? 'blur-lg select-none' : ''}`}>
                                    {description}
                                </div>

                                {!canAccess && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-background-dark/70 rounded-xl p-8 text-center backdrop-blur-sm">
                                        <MdOutlineWorkspacePremium className="text-5xl text-primary mb-4" />
                                        <h3 className="text-2xl font-bold text-white mb-2">Unlock this Premium Lesson</h3>
                                        <p className="text-gray-300 mb-6 max-w-sm">
                                            Upgrade your plan to get full access to this lesson and hundreds of others from creators around the world.
                                        </p>
                                        <button className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-black text-base font-bold leading-normal tracking-[0.015em]">
                                            <span className="truncate">Upgrade Now</span>
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap items-center gap-2 border-y border-white/10 py-4 my-8">
                                <button className="flex items-center gap-2 rounded-lg h-10 px-4 bg-gray-200 dark:bg-white/10 text-black dark:text-white text-sm font-medium hover:bg-gray-300 dark:hover:bg-white/20">
                                    <MdFavoriteBorder className="text-xl" /> Like
                                </button>
                                <button className="flex items-center gap-2 rounded-lg h-10 px-4 bg-gray-200 dark:bg-white/10 text-black dark:text-white text-sm font-medium hover:bg-gray-300 dark:hover:bg-white/20">
                                    <MdBookmarkBorder className="text-xl" /> Save to Favorites
                                </button>
                                <button className="flex items-center gap-2 rounded-lg h-10 px-4 bg-gray-200 dark:bg-white/10 text-black dark:text-white text-sm font-medium hover:bg-gray-300 dark:hover:bg-white/20">
                                    <MdPictureAsPdf className="text-xl" /> Export as PDF
                                </button>

                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 pl-2">Share:</span>
                                    <a className="flex items-center justify-center rounded-lg size-10 bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20" href="#"><FaFacebook size={20} /></a>
                                    <a className="flex items-center justify-center rounded-lg size-10 bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20" href="#"><BsTwitterX size={20} /></a>
                                    <a className="flex items-center justify-center rounded-lg size-10 bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20" href="#"><FaLinkedin size={20} /></a>
                                </div>

                                <div className="grow"></div>
                                <button className="flex items-center gap-2 rounded-lg h-10 px-4 bg-gray-200 dark:bg-white/10 text-black dark:text-white text-sm font-medium hover:bg-gray-300 dark:hover:bg-white/20">
                                    <CiFlag1 className="text-xl" /> Report
                                </button>
                            </div>

                            {/* Comments Section */}
                            <div>
                                <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Comments (3)</h2>
                                {/* Comment input */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzyWsE18FY2nxSJ78VWLAD4S94Ufps1jdJLXcQwG03a8aUObciSp2nF7QcRx_n4QhVD56dJ0cnZPG8_1Nfwt99S27kicpoYWy3_J1eEEbvvt_KhN4if-8KILnDqe3cBHF8cxJHmIj-u3Nwg6xp3-8KWnVKrW1ifCxdxaww9LPexCwSy5ALBZQ3rCZ1323m_joP9ZUvMXDLVl-Pr3eyyrkpKHgiYc8PKulA3Y1WUPEQUBwIp9INCtJE27QcG4OlglKKF_CTowlcX50')]" />
                                    <div className="flex-1">
                                        <textarea className="w-full rounded-lg bg-gray-200 dark:bg-white/5 border-transparent focus:border-primary focus:ring-primary text-black dark:text-white" placeholder="Add your thoughts..." rows="3"></textarea>
                                        <button className="mt-2 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-black text-sm font-bold">Post Comment</button>
                                    </div>
                                </div>
                                {/* Existing comments */}
                                <div>
                                    <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Comments (3)</h2>
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzyWsE18FY2nxSJ78VWLAD4S94Ufps1jdJLXcQwG03a8aUObciSp2nF7QcRx_n4QhVD56dJ0cnZPG8_1Nfwt99S27kicpoYWy3_J1eEEbvvt_KhN4if-8KILnDqe3cBHF8cxJHmIj-u3Nwg6xp3-8KWnVKrW1ifCxdxaww9LPexCwSy5ALBZQ3rCZ1323m_joP9ZUvMXDLVl-Pr3eyyrkpKHgiYc8PKulA3Y1WUPEQUBwIp9INCtJE27QcG4OlglKKF_CTowlcX50')]" data-alt="Current user avatar"></div>
                                        <div className="flex-1">
                                            <textarea className="w-full rounded-lg bg-gray-200 dark:bg-white/5 border-transparent focus:border-primary focus:ring-primary text-black dark:text-white" placeholder="Add your thoughts..." rows="3"></textarea>
                                            <button className="mt-2 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-black text-sm font-bold">Post Comment</button>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpSCcdN2gkd0kS5yVvoikSjiowAEZy1yzOjC-bPEYl9ZswjdjqCMnY4dpF48lTa8Op6kOpylhfUZuOc1G3aaIfdB9DHekVNFDLzv424JnQe48qq2JhGQ8X_V9VGgQI0zzYRZVwehhYnsBF4rsH5D9rxOWRbga9JrbJwG6EX-aJHp7OyASz1CUhqpGtRKEhiQ6WX5Wd8j2Z2vgpXDB804yreM73c09Fldc-cB2jauj9O_ojVyNhgyccmztqgoNZnkNX0tVwerEdlMg')]" data-alt="Commenter Jane Doe's avatar"></div>
                                            <div className="flex-1">
                                                <div className="flex items-baseline gap-2">
                                                    <p className="font-bold text-black dark:text-white">Jane Doe</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">2 days ago</p>
                                                </div>
                                                <p className="text-gray-800 dark:text-gray-300 mt-1">This is a wonderful perspective. It reminds me to slow down and appreciate the journey.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvnLjZfCsHe3NGzOvy165i5hG74B0kkmbudR4_A2kL5oJcViiOEhDRJgMlpmhC4R5ss9F_OVttPSKP5hEmLIDgEcPBc7yuZHPm7WZa-H6v1xgpVv1bCAnK_Lj0ARPCSeBFbMDOy38nVADPRdNEQE6DcZy4IaTiNthrQpL-LRKLe7nQelN5IY-IycZp8LSHZshplXc8uVsloctq3elha_OzzdwN94mpriGtHR_EmF_tlY_m7Vrxte9O94eDskBEk4nhFj0BCPR2Cmg')]" data-alt="Commenter Alex Smith's avatar"></div>
                                            <div className="flex-1">
                                                <div className="flex items-baseline gap-2">
                                                    <p className="font-bold text-black dark:text-white">{name}</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">1 day ago</p>
                                                </div>
                                                <p className="text-gray-800 dark:text-gray-300 mt-1">Great lesson! The mindfulness techniques are especially helpful.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="w-full lg:w-1/3 space-y-8 lg:sticky lg:top-24 self-start">
                            <div className="bg-gray-100 dark:bg-white/5 rounded-xl p-6">
                                <div className="flex flex-col items-center text-center">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-20 mb-4">
                                        <img src={profileImage} alt={name} />
                                    </div>
                                    <h3 className="text-xl font-bold text-black dark:text-white">{name}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Total {totalLessons} lessons</p>
                                    <button className="mt-4 w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-white/10 text-black dark:text-white text-sm font-medium hover:bg-gray-300 dark:hover:bg-white/20">
                                        View all lessons
                                    </button>
                                </div>
                            </div>

                            {/* Lesson metadata */}
                            <div className="bg-gray-100 dark:bg-white/5 rounded-xl p-6 space-y-4">
                                <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-gray-300">
                                    <SlCalender className="text-xl text-gray-500 dark:text-gray-400" />
                                    <div>
                                        <p className="font-medium">Created</p>
                                        <p className="text-gray-500 dark:text-gray-400">{createdDate}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-gray-300">
                                    <MdOutlineUpdate className="text-xl text-gray-500 dark:text-gray-400" />
                                    <div>
                                        <p className="font-medium">Last Updated</p>
                                        <p className="text-gray-500 dark:text-gray-400">{lastUpdated}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-gray-300">
                                    <MdOutlineTimer className="text-xl text-gray-500 dark:text-gray-400" />
                                    <div>
                                        <p className="font-medium">Reading Time</p>
                                        <p className="text-gray-500 dark:text-gray-400">{readingTime}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="bg-gray-100 dark:bg-white/5 rounded-xl p-6 flex justify-around">
                                <div className="text-center">
                                    <MdVisibility className="text-3xl text-primary" />
                                    <p className="mt-1 text-xl font-bold text-black dark:text-white">{views}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Views</p>
                                </div>
                                <div className="text-center">
                                    <MdFavoriteBorder className="text-3xl text-primary" />
                                    <p className="mt-1 text-xl font-bold text-black dark:text-white">{likes}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Likes</p>
                                </div>
                                <div className="text-center">
                                    <MdBookmarkBorder className="text-3xl text-primary" />
                                    <p className="mt-1 text-xl font-bold text-black dark:text-white">{favorites}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Favorites</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Similar lessons */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Similar Lessons</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-gray-100 dark:bg-white/5 rounded-xl overflow-hidden group">
                                <div className="w-full h-40 bg-cover bg-center bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuAS215Rqikp1foaZCNNEyMLLfPFvzlaa5vkR7n_EbgQoHgkmv7cEhpPdD8Nr3e5--YOioYZME_qaIV_mNsdQVKISEEQHZsWS8ElzdyAvAOABPct629KSZjSy-lQ2kQw0ImIiY_9reAA3bM3-M9fnI_57UqMvtWDbG1C2L69dp5kCqA1qVrk4YzOBHAkKMOVLMuZMiIlHcdrOrUFNOgAEUoejJKG_rcxXOAteLUsR4219lm89c5AuV0Jd3VmAN_58VTn3ML4QhJBA3w')]" data-alt="Abstract image for Finding Joy in Small Things"></div>
                                <div className="p-4">
                                    <p className="font-bold text-black dark:text-white group-hover:text-primary transition-colors">Finding Joy in Small Things</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">By Mark Hanson</p>
                                </div>
                            </div>
                            <div className="bg-gray-100 dark:bg-white/5 rounded-xl overflow-hidden group">
                                <div className="w-full h-40 bg-cover bg-center bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKoix-z4UJoES5xiwweu1LhQ3bYIjDGnzaDk76-ougkGfXGVGhdSNKRQL3A0I0Hmh8hNMD15zQeJrXOljPGKKbdI2rn135hq_F7qbV7VFzFs8d4l4Ch8e7v5eLWIoCCiQzsIDqk_69239SwgvcHTWb-XyLDNY3G7ylIHe-ljyBzTBvxg_wcEIrHRK-acBTdCwOkWLbnV7mL7qKUjOsBHOinMmkkibHo_Gy-CLibfeP2fXZR6PnBaaB_7oUJ65bmkSx9H4MkBS4vuQ')]" data-alt="Abstract image for The Power of Listening"></div>
                                <div className="p-4">
                                    <p className="font-bold text-black dark:text-white group-hover:text-primary transition-colors">The Power of Listening</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">By Emily Carter</p>
                                </div>
                            </div>
                            <div className="bg-gray-100 dark:bg-white/5 rounded-xl overflow-hidden group">
                                <div className="w-full h-40 bg-cover bg-center bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuB590Ti7rVqCqaaVbjpYYY86oJRYAISmBbIjY1-3eq1WGUWCN3oRPO1DkZaZC01BtymkCSVtJv_8e7_LdfCVXQwDTSHPhOKmeUeZxlqBTER5bAA_CTwZfMzpSGcaoOLwQI_OT5QQM-ABRu1DZizftzfvHVSuk0e-wzkOo0BsveQ50fEu9i9AL0zk2YQsasi92_uu2yTWqZX41-MXBc-lg6CrZgbLUF2j65MYuYt0kiONjmHK38xJo3_2enRScAmSUvfL06ce749k6A')]" data-alt="Abstract image for Embracing Imperfection"></div>
                                <div className="p-4">
                                    <p className="font-bold text-black dark:text-white group-hover:text-primary transition-colors">Embracing Imperfection</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">By Sarah Chen</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LessonDetails;
