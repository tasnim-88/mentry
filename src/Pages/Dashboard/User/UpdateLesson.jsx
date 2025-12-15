import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Loading from "../../../Components/Loading/Loading";

const UpdateLesson = () => {
    const { id } = useParams();
    const { axiosSecure, loading: axiosLoading } = useAxiosSecure();

    const {
        register,
        handleSubmit,
        reset,
        watch,
        setValue
    } = useForm();

    const accessLevel = watch("accessLevel");

    useEffect(() => {
        axiosSecure.get(`/lessondetails/${id}`).then(res => {
            const lesson = res.data.lesson;

            reset({
                title: lesson.lessonInfo?.title,
                description: lesson.lessonInfo?.description,
                category: lesson.lessonInfo?.category,
                tone: lesson.lessonInfo?.tone,
                featuredImage: lesson.lessonInfo?.featuredImage,
                visibility: lesson.metadata?.visibility || "Public",
                accessLevel: lesson.metadata?.accessLevel || "Free",
                userName: lesson.author?.name,
                email: lesson.author?.email,
            });
        });
    }, [id, axiosSecure, reset]);

    const onSubmit = async (data) => {
        const updates = {
            lessonInfo: {
                title: data.title,
                description: data.description,
                category: data.category,
                tone: data.tone,
                featuredImage: data.featuredImage,
            },
            metadata: {
                visibility: data.visibility,
                accessLevel: data.accessLevel,
            },
        };

        await axiosSecure.patch(`/lessons/${id}`, updates);
        toast.success("Lesson updated successfully");
    };

    if (axiosLoading) {
        return <Loading />;
    }

    return (
        <div>
            <main className="max-w-5xl mx-auto grow py-8 md:py-12">
                {/* Page Heading */}
                <div className="flex flex-wrap justify-between gap-3 p-4">
                    <h1 className="text-base-content text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                        Update Your Lesson
                    </h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-8">
                    {/* Read-only Fields */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <p className="text-base-content/80 text-base font-medium leading-normal">
                                User Name
                            </p>
                            <div className="flex w-full items-center rounded-lg bg-base-200 dark:bg-base-300 border border-base-300 h-14 px-4 text-base-content/60">
                                {watch("userName")}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-base-content/80 text-base font-medium leading-normal">
                                Email
                            </p>
                            <div className="flex w-full items-center rounded-lg bg-base-200 dark:bg-base-300 border border-base-300 h-14 px-4 text-base-content/60">
                                {watch("email")}
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
                                {...register("title", { required: true })}
                                className="input input-bordered h-14 w-full bg-base-200 dark:bg-base-300 text-base-content"
                            />
                        </label>

                        {/* Full Description */}
                        <label className="flex flex-col">
                            <p className="text-base-content text-base font-medium leading-normal pb-2">
                                Full Description
                            </p>
                            <textarea
                                {...register("description")}
                                rows="5"
                                className="textarea textarea-bordered w-full bg-base-200 dark:bg-base-300 text-base-content"
                            />
                        </label>

                        {/* Category & Emotional Tone */}
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            <label className="flex flex-col">
                                <p className="text-base-content text-base font-medium leading-normal pb-2">
                                    Category
                                </p>
                                <select
                                    {...register("category")}
                                    className="select select-bordered h-14 w-full bg-base-200 dark:bg-base-300 text-base-content"
                                >
                                    <option value="">Select category</option>
                                    <option>Personal Growth</option>
                                    <option>Career</option>
                                    <option>Relationships</option>
                                    <option>Mindset</option>
                                    <option>Mistakes Learned</option>
                                </select>
                            </label>

                            <label className="flex flex-col">
                                <p className="text-base-content text-base font-medium leading-normal pb-2">
                                    Emotional Tone
                                </p>
                                <select
                                    {...register("tone")}
                                    className="select select-bordered h-14 w-full bg-base-200 dark:bg-base-300 text-base-content"
                                >
                                    <option value="">Emotional Tone</option>
                                    <option>Motivational</option>
                                    <option>Sad</option>
                                    <option>Realization</option>
                                    <option>Gratitude</option>
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
                                    src={watch("featuredImage")}
                                    alt="Lesson"
                                />
                                <div className="flex flex-col items-center sm:items-start">
                                    <p className="text-base-content/70 text-sm mb-2">
                                        Change the image for your lesson.
                                    </p>
                                    <input
                                        type="file"
                                        className="btn btn-outline btn-sm text-base-content"
                                        onChange={async (e) => {
                                            if (e.target.files?.[0]) {
                                                const file = e.target.files[0];
                                                const formData = new FormData();
                                                formData.append("image", file);
                                                const imgRes = await axiosSecure.post(
                                                    "/upload-image",
                                                    formData
                                                );
                                                setValue("featuredImage", imgRes.data.url);
                                            }
                                        }}
                                    />
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
                                            {...register("visibility")}
                                            type="radio"
                                            value="Public"
                                            className="radio radio-primary"
                                        />
                                        <span>Public</span>
                                    </label>

                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            {...register("visibility")}
                                            type="radio"
                                            value="Private"
                                            className="radio radio-primary"
                                        />
                                        <span>Private</span>
                                    </label>
                                </div>
                            </div>

                            {/* Access Level */}
                            <div>
                                <p className="text-base-content text-base font-medium leading-normal pb-3">
                                    Access Level (Premium Users)
                                </p>
                                <div className="flex items-center gap-4">
                                    <span>Free</span>
                                    <input
                                        type="checkbox"
                                        className="toggle toggle-primary"
                                        checked={accessLevel === "Premium"}
                                        onChange={(e) =>
                                            setValue(
                                                "accessLevel",
                                                e.target.checked ? "Premium" : "Free"
                                            )
                                        }
                                    />
                                    <span>Premium</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-4 pt-6 border-t border-base-300">
                        <button
                            type="button"
                            className="btn w-full sm:w-auto btn-ghost bg-base-200 dark:bg-base-300 text-base-content"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn w-full sm:w-auto btn-primary text-primary-content"
                        >
                            Update Lesson
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default UpdateLesson;
