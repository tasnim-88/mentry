import React, { useEffect, useState } from 'react';
import { FaRegEye } from 'react-icons/fa';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router';
import Loading from '../../../Components/Loading/Loading';
import useAuth from '../../../Hooks/useAuth';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const UserProfile = () => {
    const { axiosSecure, loading: axiosLoading } = useAxiosSecure();
    const { user, updateUser, loading } = useAuth();

    
    const [stats, setStats] = useState({
        totalLessons: 0,
        savedLessons: 0,
        totalViews: 0,
        isPremium: false,
    });
    const [lessons, setLessons] = useState([]);
    const [sort, setSort] = useState('newest');

    
    useEffect(() => {
        if (!user || axiosLoading) return;

        axiosSecure.get('/users/me').then(res => {
            setStats(prev => ({
                ...prev,
                totalLessons: res.data.totalLessons || 0,
                savedLessons: res.data.savedLessons || 0,
                isPremium: res.data.isPremium || false,
            }));
        });
    }, [axiosSecure, user, axiosLoading]);

    
    useEffect(() => {
        if (!user || axiosLoading) return;

        axiosSecure.get(`/lessons?uid=${user.uid}`).then(res => {
            let publicLessons = res.data.filter(
                l =>
                    l.metadata?.privacy !== 'Private' &&
                    l.metadata?.visibility !== 'Hidden'
            );

            if (sort === 'popular') {
                publicLessons.sort(
                    (a, b) => (b.stats?.views || 0) - (a.stats?.views || 0)
                );
            } else {
                publicLessons.sort(
                    (a, b) =>
                        new Date(b.metadata?.createdDate) -
                        new Date(a.metadata?.createdDate)
                );
            }

            const totalViews = publicLessons.reduce(
                (sum, l) => sum + (l.stats?.views || 0),
                0
            );

            setLessons(publicLessons);
            setStats(prev => ({ ...prev, totalViews }));
        });
    }, [axiosSecure, user, axiosLoading, sort]);

    const handleEditProfile = async () => {
        const { value } = await Swal.fire({
            title: 'Edit Profile',
            html: `
            <input id="swal-name" class="swal2-input" placeholder="Display Name" value="${user.displayName || ''}">
            <input id="swal-photo" class="swal2-input" placeholder="Photo URL" value="${user.photoURL || ''}">
        `,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Save',
            preConfirm: () => {
                const name = document.getElementById('swal-name').value;
                const photo = document.getElementById('swal-photo').value;

                if (!name) {
                    Swal.showValidationMessage('Name is required');
                    return;
                }

                return { name, photo };
            },
        });

        if (!value) return;

        try {
            // 1️⃣ Firebase
            await updateUser({
                displayName: value.name,
                photoURL: value.photo,
            });

            // 2️⃣ MongoDB
            await axiosSecure.patch('/users/me', {
                displayName: value.name,
                photoURL: value.photo,
            });

            toast.success('Profile updated');
        } catch (err) {
            console.error(err);
            toast.error('Failed to update profile');
        }
    };




    if (loading || axiosLoading) {
        return <Loading />;
    }

    if (!user) return null;



    return (
        <main className="flex flex-col gap-8 py-10">

            
            <div className="flex p-4">
                <div className="flex w-full flex-col gap-6 md:flex-row md:justify-between md:items-center">

                    <div className="flex gap-4 items-center">
                        <div
                            className="rounded-full w-32 h-32 bg-cover bg-center border"
                            style={{
                                backgroundImage: `url(${user.photoURL || 'https://via.placeholder.com/128'})`,
                            }}
                        />
                        <div>
                            <p className="text-3xl font-bold">
                                {user.displayName || 'Unnamed User'}
                            </p>
                            <p className="opacity-70">{user.email}</p>
                            {stats.isPremium && (
                                <p className="text-primary font-semibold">
                                    Premium ⭐
                                </p>
                            )}
                        </div>
                    </div>

                    <button
                        onClick={handleEditProfile}
                        className="btn btn-sm bg-base-300"
                    >
                        Edit Profile
                    </button>


                    
                </div>
            </div>

            
            <div className="flex flex-wrap gap-4 px-4">
                {[
                    [stats.totalLessons, 'Lessons Created'],
                    [stats.savedLessons, 'Lessons Saved'],
                    [stats.totalViews, 'Total Views'],
                ].map(([value, label], i) => (
                    <div
                        key={i}
                        className="flex flex-col gap-2 flex-1 min-w-[140px] rounded-xl border bg-base-100 p-4"
                    >
                        <p className="text-3xl font-bold">{value}</p>
                        <p className="text-sm opacity-70">{label}</p>
                    </div>
                ))}
            </div>

            
            <div className="flex flex-col">
                <div className="flex justify-between px-4 pt-6">
                    <h2 className="text-xl font-bold">My Public Lessons</h2>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setSort('newest')}
                            className={`btn btn-sm ${sort === 'newest' ? 'btn-primary' : 'btn-ghost'}`}
                        >
                            Newest
                        </button>
                        <button
                            onClick={() => setSort('popular')}
                            className={`btn btn-sm ${sort === 'popular' ? 'btn-primary' : 'btn-ghost'}`}
                        >
                            Popular
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                    {lessons.map(lesson => (
                        <Link to={`/lessondetails/${lesson._id}`} key={lesson._id} className="rounded-xl border p-5 bg-base-100">
                            <h3 className="font-bold text-lg">
                                {lesson.lessonInfo?.title}
                            </h3>
                            <p className="opacity-70 text-sm line-clamp-3">
                                {lesson.lessonInfo?.description}
                            </p>
                            <div className="flex justify-between mt-4 opacity-70 text-xs">
                                <span>
                                    {lesson.metadata?.createdDate?.slice(0, 10)}
                                </span>
                                <span className="flex items-center gap-1">
                                    <FaRegEye />
                                    {lesson.stats?.views || 0}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default UserProfile;
