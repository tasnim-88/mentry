import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { 
    ResponsiveContainer, 
    AreaChart, 
    Area, 
    XAxis, 
    YAxis, 
    Tooltip, 
    CartesianGrid 
} from 'recharts';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loading from '../../../Components/Loading/Loading';
import { Link } from 'react-router';

/**
 * COMPONENT: Recent Lesson List Item
 */
const RecentLessonItem = ({ lesson }) => {
    const { _id, lessonInfo, metadata } = lesson;
    const date = new Date(metadata.createdDate);

    return (
        <Link 
            to={`/lessondetails/${_id}`} 
            className="flex justify-between items-center p-4 rounded-xl border border-black/10 dark:border-[#3b5445] bg-white dark:bg-black/20 transition duration-150 hover:bg-gray-50 dark:hover:bg-black/30"
        >
            <div>
                <h3 className="font-bold text-black dark:text-white">{lessonInfo.title}</h3>
                <p className="text-sm text-black/60 dark:text-white/60">
                    Created: {format(date, 'MMMM dd, yyyy')}
                </p>
            </div>
            <button className="text-black dark:text-white">
                <FaChevronRight />
            </button>
        </Link>
    );
};

/**
 * COMPONENT: Recharts Activity Visualizer
 */
const RechartsActivity = ({ data }) => {
    return (
        <div className="p-4 rounded-xl border border-black/10 dark:border-[#3b5445] bg-white dark:bg-black/20 h-72">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorLessons" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#88888833" />
                    <XAxis 
                        dataKey="day" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fontSize: 10, fill: '#888'}} 
                        dy={10}
                    />
                    <YAxis hide domain={[0, 'auto']} />
                    <Tooltip 
                        contentStyle={{ 
                            borderRadius: '12px', 
                            border: 'none', 
                            backgroundColor: '#111', 
                            color: '#fff',
                            fontSize: '12px'
                        }}
                    />
                    <Area 
                        type="monotone" 
                        dataKey="lessons" 
                        stroke="#10b981" 
                        fillOpacity={1} 
                        fill="url(#colorLessons)" 
                        strokeWidth={3}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

/**
 * MAIN COMPONENT: UserDashboard
 */
const UserDashboard = () => {
    const { user, loading: userLoading } = useAuth();
    const { axiosSecure, loading: axiosLoading } = useAxiosSecure();

    // 1. Fetch User Stats (Matches favoritesArray and totalLessons in DB)
    const { data: userStats, isLoading: statsLoading } = useQuery({
        queryKey: ['dashboardStats', user?.uid],
        queryFn: async () => {
            const lessonsRes = await axiosSecure.get(`/mylessons/count`);
            const favoritesRes = await axiosSecure.get(`/myfavorites/count`);
            return {
                totalLessons: lessonsRes.data.count,
                totalFavorites: favoritesRes.data.count, 
            };
        },
        enabled: !!user?.uid,
    });

    // 2. Fetch Recently Added Lessons (Paginated)
    const { data: recentLessons, isLoading: recentLoading } = useQuery({
        queryKey: ['recentLessons', user?.uid],
        queryFn: async () => {
            const res = await axiosSecure.get(`/mylessons`, {
                params: { page: 1, limit: 3 } 
            });
            return res.data.lessons;
        },
        enabled: !!user?.uid,
    });

    // 3. Fetch Activity Data for Recharts
    const { data: activityData, isLoading: activityLoading } = useQuery({
        queryKey: ['userActivity', user?.uid],
        queryFn: async () => {
            const res = await axiosSecure.get('/user-activity');
            return res.data;
        },
        enabled: !!user?.uid,
    });

    // Fallback data for Chart
    const finalChartData = activityData?.length > 0 ? activityData : [
        { day: 'Mon', lessons: 0 }, { day: 'Tue', lessons: 0 }, 
        { day: 'Wed', lessons: 0 }, { day: 'Thu', lessons: 0 }, 
        { day: 'Fri', lessons: 0 }, { day: 'Sat', lessons: 0 }, 
        { day: 'Sun', lessons: 0 }
    ];

    if (userLoading || axiosLoading || statsLoading || recentLoading || activityLoading) {
        return <Loading />;
    }

    const userName = user?.displayName || 'Fellow Learner';

    return (
        <div className="min-h-screen">
            <main className="flex-1 p-4 md:p-6 lg:p-8">
                {/* Welcome Header */}
                <div className="p-4 mb-4">
                    <h1 className="text-black dark:text-white text-4xl font-black tracking-tight">
                        Welcome back, {userName}!
                    </h1>
                    <p className="text-black/60 dark:text-[#9db9a8] text-base mt-2">
                        Here's a summary of your journey so far.
                    </p>
                </div>

                {/* Stat Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                    <div className="flex flex-col gap-2 rounded-xl p-6 border border-black/10 dark:border-[#3b5445] bg-white dark:bg-black/20">
                        <p className="text-black/80 dark:text-white/80 text-base font-medium">Total Lessons Created</p>
                        <p className="text-black dark:text-white text-4xl font-bold">
                            {userStats?.totalLessons ?? 0}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 rounded-xl p-6 border border-black/10 dark:border-[#3b5445] bg-white dark:bg-black/20">
                        <p className="text-black/80 dark:text-white/80 text-base font-medium">Total Saved Lessons</p>
                        <p className="text-black dark:text-white text-4xl font-bold">
                            {userStats?.totalFavorites ?? 0}
                        </p>
                    </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="px-4 py-6">
                    <h2 className="text-black dark:text-white text-xl font-bold mb-4">Quick Actions</h2>
                    <div className="flex flex-wrap gap-3">
                        <Link to="/dashboard/addlesson" className="px-6 h-12 flex items-center bg-primary text-[#111814] rounded-lg font-bold hover:opacity-90 transition-opacity">
                            Create New Lesson
                        </Link>
                        <Link to="/dashboard/mylessons" className="px-6 h-12 flex items-center bg-black/5 dark:bg-[#28392f] text-black dark:text-white rounded-lg font-bold hover:bg-black/10 transition-colors">
                            View My Lessons
                        </Link>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-4">
                    {/* Recent Lessons List */}
                    <div className="lg:col-span-2">
                        <h2 className="text-black dark:text-white text-xl font-bold mb-4">Recently Added</h2>
                        <div className="space-y-4">
                            {recentLessons?.length > 0 ? (
                                recentLessons.map(lesson => (
                                    <RecentLessonItem key={lesson._id} lesson={lesson} />
                                ))
                            ) : (
                                <div className="p-8 text-center rounded-xl border border-dashed border-black/20 dark:border-white/10 text-black/40 dark:text-white/40">
                                    No lessons found. Create your first one!
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Recharts Activity Section */}
                    <div className="lg:col-span-1">
                        <h2 className="text-black dark:text-white text-xl font-bold mb-4">Activity Trend</h2>
                        <RechartsActivity data={finalChartData} />
                        <p className="text-xs text-black/40 dark:text-white/40 mt-4 text-center">
                            Contribution activity for the last 7 days
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default UserDashboard;