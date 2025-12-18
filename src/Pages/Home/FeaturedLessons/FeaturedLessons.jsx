import React from 'react';
import { Link } from 'react-router';
// import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Components/Loading/Loading';
import axios from 'axios';


// Component for a single lesson card, using your original structure
const LessonCard = ({ lesson }) => {
    const { _id, lessonInfo, author } = lesson;
    const { title, featuredImage } = lessonInfo;
    const authorName = author?.name || 'Unknown Author';
    const imageUrl = featuredImage || 'https://tse4.mm.bing.net/th/id/OIP.DQnLITKCIMuvpA6IhsdmYwHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3';

    return (
        // Your original card structure, wrapped in a Link
        <Link
            to={`/lessondetails/${_id}`}
            className="flex flex-col gap-3 rounded-xl bg-gray-100 dark:bg-white/5 p-4 transition-transform hover:-translate-y-1"
        >
            {/* Image section matching your original div structure */}
            <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden"
            >
                {/* Dynamically set the image */}
                <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            </div>

            {/* Details section */}
            <div>
                {/* Dynamically set the title */}
                <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">{title}</p>
                {/* Dynamically set the author name */}
                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">By {authorName}</p>
            </div>
        </Link>
    );
};


const FeaturedLessons = () => {
    // These unused variables are removed as they rely on 'lessonData' which is not here
    // const { id } = useParams();
    // const category = lessonData?.lesson?.lessonInfo?.category;
    // const tone = lessonData?.lesson?.lessonInfo?.tone;

    // const { axiosSecure, loading: axiosLoading } = useAxiosSecure();

    // We fetch a limited number of public lessons for the "Featured" section
    const FEATURED_LIMIT = 4; // Changed from 8 to match your 4-column layout visually

    const { data: publicLessonsData, isLoading: publicLoading, isError } = useQuery({
        // Updated queryKey to reflect fetching general public lessons
        queryKey: ['publicLessons', FEATURED_LIMIT],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/public-lessons`, {
                params: {
                    page: 1,
                    limit: FEATURED_LIMIT
                }
            });
            // Extract the lessons array from the server's paginated response
            return res.data.lessons;
        },
        staleTime: 1000 * 60 * 5,
    });

    if (publicLoading) {
        return <Loading />;
    }

    if (isError) {
        return <div className="text-center p-8 dark:text-white">Failed to load featured lessons.</div>;
    }

    if (!publicLessonsData || publicLessonsData.length === 0) {
        return <div className="text-center p-8 dark:text-white">No featured lessons available at this time.</div>;
    }


    return (
        <div>
            <section className="py-8 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Your original h2 text */}
                    <h2 className="text-gray-900 dark:text-white text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-6">Featured Life Lessons</h2>

                    {/* Your original grid layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Dynamically map and render the LessonCard component */}
                        {publicLessonsData.map(lesson => (
                            <LessonCard key={lesson._id} lesson={lesson} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturedLessons;