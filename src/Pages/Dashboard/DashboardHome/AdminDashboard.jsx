import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import {
    Users,
    BookOpen,
    AlertTriangle,
    TrendingUp,
    UserCheck
} from 'lucide-react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    Legend
} from 'recharts';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loading from '../../../Components/Loading/Loading';

const AdminDashboard = () => {
    const { axiosSecure } = useAxiosSecure();
    const [timePeriod, setTimePeriod] = useState('7d'); // '7d', '30d', 'all'

    // 1. Fetch Admin Data from Backend
    // ... inside AdminDashboard component ...

    const { data: adminData, isLoading, isError, error } = useQuery({
        queryKey: ['admin-stats', timePeriod],
        queryFn: async () => {
            const res = await axiosSecure.get(`/admin-stats?period=${timePeriod}`);
            return res.data;
        }
    });

    // 1. First guard: Loading state
    if (isLoading) return <Loading />;

    // 2. Second guard: Error state
    if (isError) return <div className="p-10 text-error text-center">Error: {error.message}</div>;

    // 3. Third guard: Defensive Destructuring with Defaults ✅
    const {
        stats = {
            totalUsers: 0,
            totalLessons: 0,
            reportedLessons: 0,
            todayNewLessons: 0
        },
        chartData = [],
        activeContributors = []
    } = adminData || {};

    // ... rest of your return statement ...

    return (
        <div className="min-h-screen bg-base-200/30">
            <main className="flex-1 p-6 lg:p-10 max-w-[1600px] mx-auto">

                {/* --- HEADING & FILTERS --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
                    <div>
                        <h1 className="text-4xl font-black tracking-tight text-base-content">
                            Admin Overview
                        </h1>
                        <p className="text-base-content/60 mt-1">Platform-wide analytics and system activity.</p>
                    </div>

                    <div className="join bg-base-100 border border-base-300 shadow-sm">
                        <button
                            onClick={() => setTimePeriod('7d')}
                            className={`join-item btn btn-sm ${timePeriod === '7d' ? 'btn-primary' : 'btn-ghost'}`}
                        >
                            Last 7 Days
                        </button>
                        <button
                            onClick={() => setTimePeriod('30d')}
                            className={`join-item btn btn-sm ${timePeriod === '30d' ? 'btn-primary' : 'btn-ghost'}`}
                        >
                            Last 30 Days
                        </button>
                        <button
                            onClick={() => setTimePeriod('all')}
                            className={`join-item btn btn-sm ${timePeriod === 'all' ? 'btn-primary' : 'btn-ghost'}`}
                        >
                            All Time
                        </button>
                    </div>
                </div>

                {/* --- STATS CARDS --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <StatCard
                        icon={<Users className="text-blue-500" />}
                        label="Total Users"
                        value={stats.totalUsers.toLocaleString()}
                    />
                    <StatCard
                        icon={<BookOpen className="text-green-500" />}
                        label="Public Lessons"
                        value={stats.totalLessons.toLocaleString()}
                    />
                    <StatCard
                        icon={<AlertTriangle className="text-error" />}
                        label="Reported Lessons"
                        value={stats.reportedLessons}
                        alert={stats.reportedLessons > 0}
                    />
                    <StatCard
                        icon={<TrendingUp className="text-primary" />}
                        label="New Lessons Today"
                        value={`+${stats.todayNewLessons}`}
                    />
                </div>

                {/* --- CHARTS SECTION --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                    {/* User Growth Chart */}
                    <div className="card bg-base-100 border border-base-300 shadow-sm p-6">
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <UserCheck size={20} className="text-primary" /> User Growth
                        </h3>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                                    <XAxis dataKey="date" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                                    <Line type="monotone" dataKey="newUsers" stroke="#3b82f6" strokeWidth={4} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Lesson Growth Chart */}
                    <div className="card bg-base-100 border border-base-300 shadow-sm p-6">
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <TrendingUp size={20} className="text-success" /> Lesson Creation Growth
                        </h3>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={chartData}>
                                    <defs>
                                        <linearGradient id="colorLessons" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                                    <XAxis dataKey="date" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="newLessons" stroke="#10b981" fillOpacity={1} fill="url(#colorLessons)" strokeWidth={3} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* --- ACTIVE CONTRIBUTORS TABLE --- */}
                <div className="card bg-base-100 border border-base-300 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-base-300 flex justify-between items-center">
                        <h3 className="text-lg font-bold">Most Active Contributors</h3>
                        <button className="btn btn-ghost btn-xs text-primary">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead className="bg-base-200/50">
                                <tr>
                                    <th className="text-base-content/70">Contributor</th>
                                    <th className="text-base-content/70 text-center">Lessons</th>
                                    <th className="text-base-content/70">Joined Date</th>
                                    <th className="text-base-content/70">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activeContributors.map((user) => (
                                    <tr key={user._id} className="hover:bg-base-200/30 transition-colors">
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-10 h-10">
                                                        <img src={user.photoURL} alt={user.displayName} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{user.displayName}</div>
                                                    <div className="text-xs opacity-50">{user.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <span className="badge badge-ghost font-mono font-bold">
                                                {user.totalLessons || 0}
                                            </span>
                                        </td>
                                        <td className="text-sm">
                                            {new Date(user.createdAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </td>
                                        <td>
                                            <span className={`badge badge-sm ${user.role === 'admin' ? 'badge-secondary' : 'badge-outline'}`}>
                                                {user.role}
                                            </span>
                                        </td>
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

// --- HELPER COMPONENT FOR STAT CARDS ---
const StatCard = ({ icon, label, value, alert = false }) => (
    <div className={`card bg-base-100 p-6 border ${alert ? 'border-error/50 bg-error/5' : 'border-base-300'} shadow-sm`}>
        <div className="flex items-center gap-4">
            <div className="p-3 bg-base-200 rounded-lg">{icon}</div>
            <div>
                <p className="text-sm font-medium text-base-content/60 uppercase tracking-wider">{label}</p>
                {/* Use optional chaining and a fallback for the value */}
                <p className="text-3xl font-black text-base-content">
                    {value?.toLocaleString() || "0"}
                </p>
            </div>
        </div>
    </div>
);

export default AdminDashboard;