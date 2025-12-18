import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdCloudUpload } from 'react-icons/md';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../../../Components/Loading/Loading';
import success from '../../../assets/animation/Confetti.json'
import Lottie from 'lottie-react';

const AddLesson = () => {
    const { axiosSecure, loading: axiosLoading } = useAxiosSecure();
    const { user, loading } = useAuth();

    const [isPremium, setIsPremium] = useState(false);
    const [loadingRole, setLoadingRole] = useState(true);
    const [showSuccess, setShowSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            accessLevel: 'Free',
            privacy: 'Public',
        },
    });

    // 🔐 Get premium status of logged-in user
    useEffect(() => {
        if (!user) return;

        const fetchUserRole = async () => {
            try {
                const res = await axiosSecure.get('/users/me');
                setIsPremium(res.data.isPremium);
            } catch (err) {
                console.error('Failed to fetch user role:', err);
            } finally {
                setLoadingRole(false);
            }
        };

        fetchUserRole();
    }, [user, axiosSecure]);

    const handleForm = async (data) => {
        try {
            let featuredImage = '';

            // 🖼 Optional image upload
            if (data.image?.[0]) {
                const formData = new FormData();
                formData.append('image', data.image[0]);

                const imgUploadURL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`;
                const imgRes = await axios.post(imgUploadURL, formData);
                featuredImage = imgRes.data.data.url;
            }

            // ⏱ Reading time calculation
            const wordCount = data.description.trim().split(/\s+/).length;
            const readingTime = `${Math.ceil(wordCount / 200)} min`;

            // 📦 Final lesson object
            const lessonData = {
                lessonInfo: {
                    title: data.title,
                    description: data.description,
                    category: data.category,
                    tone: data.emotionalTone,
                    featuredImage,
                },
                metadata: {
                    visibility: data.privacy,
                    accessLevel: isPremium ? data.accessLevel : 'Free',
                    readingTime,
                    createdDate: new Date().toISOString(),
                    lastUpdated: new Date().toISOString(),
                },
                author: {
                    uid: user.uid,
                    name: user.displayName,
                    email: user.email,
                    profileImage: user.photoURL,
                },
                stats: {
                    views: 0,
                    likes: 0,
                    favorites: 0,
                },
            };

            await axiosSecure.post('/lessons', lessonData);

            setShowSuccess(true)
            toast.success('Lesson published successfully 🎉');
            reset();

            setTimeout(() => setShowSuccess(false), 3000)
        } catch (error) {
            console.error('Failed to publish lesson:', error);
            toast.error('Failed to publish lesson');
        }
    };

    if (loading || axiosLoading || loadingRole) {
        return <Loading />;
    }

    return (
        <main className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-16 flex justify-center">
            {showSuccess && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/10 backdrop-blur-[2px] pointer-events-none">
                    <div className="w-full max-w-[500px]">
                        <Lottie animationData={success} loop={false} />
                    </div>
                </div>
            )}
            <div className="w-full max-w-[960px]">

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-4xl sm:text-5xl font-black text-black dark:text-white">
                        Share a New Lesson
                    </h1>
                    <p className="text-black/60 dark:text-[#9db9a8] mt-2">
                        Preserve your wisdom and share it with the community.
                    </p>
                </div>

                <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-8">

                    {/* Title + Category */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="font-medium pb-2 block">Lesson Title</label>
                            <input
                                {...register('title', { required: true })}
                                className="form-input w-full rounded-lg border-2 border-black/20 dark:border-[#3b5445] bg-white dark:bg-[#1c2720] p-3 h-12"
                                placeholder="The Importance of Listening"
                            />
                            {errors.title && (
                                <p className="text-red-500 text-sm mt-1">Title is required</p>
                            )}
                        </div>

                        <div>
                            <label className="font-medium pb-2 block">Category</label>
                            <select
                                {...register('category', { required: true })}
                                className="select w-full h-12 rounded-lg border-2 border-black/20 dark:border-[#3b5445] bg-white dark:bg-[#1c2720] px-3"
                            >
                                <option value="">Select category</option>
                                <option>Personal Growth</option>
                                <option>Career</option>
                                <option>Relationships</option>
                                <option>Mindset</option>
                                <option>Mistakes Learned</option>
                            </select>
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="font-medium pb-2 block">Full Description</label>
                        <textarea
                            {...register('description', { required: true })}
                            className="w-full min-h-40 rounded-lg border-2 border-black/20 dark:border-[#3b5445] bg-white dark:bg-[#1c2720] p-3"
                            placeholder="Share your story and insight..."
                        />
                    </div>

                    {/* Image Upload */}
                    <label className="border-2 border-dashed border-black/20 dark:border-[#3b5445] rounded-lg p-8 text-center cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition">
                        <MdCloudUpload className="text-4xl mx-auto mb-2 opacity-60" />
                        <p className="font-medium">Upload Image (Optional)</p>
                        <input
                            type="file"
                            accept="image/*"
                            {...register('image')}
                            className="hidden"
                        />
                    </label>

                    {/* Tone / Privacy / Access */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <select
                            {...register('emotionalTone', { required: true })}
                            className="select h-12 rounded-lg border-2 border-black/20 dark:border-[#3b5445] bg-white dark:bg-[#1c2720] px-3"
                        >
                            <option value="">Emotional Tone</option>
                            <option>Motivational</option>
                            <option>Sad</option>
                            <option>Realization</option>
                            <option>Gratitude</option>
                        </select>

                        <select
                            {...register('privacy')}
                            className="select h-12 rounded-lg border-2 border-black/20 dark:border-[#3b5445] bg-white dark:bg-[#1c2720] px-3"
                        >
                            <option>Public</option>
                            <option>Private</option>
                        </select>

                        {/* Access Level */}
                        <div className="relative group">
                            <select
                                {...register('accessLevel')}
                                className="select w-full h-12 pl-4 pr-9 rounded-lg border-2 border-black/20 dark:border-[#3b5445] bg-white dark:bg-[#1c2720]"
                                disabled={!isPremium}
                            >
                                <option value="Free">Free</option>
                                <option value="Premium">Premium</option>
                            </select>

                            {!isPremium && (
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
                                    Upgrade to Premium to create paid lessons
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="flex justify-end">
                        <button className="px-6 h-12 rounded-lg bg-primary text-black font-bold hover:opacity-90">
                            Submit Lesson
                        </button>
                    </div>

                </form>
            </div>
        </main>
    );
};

export default AddLesson;
