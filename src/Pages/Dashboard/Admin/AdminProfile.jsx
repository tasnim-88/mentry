import React, { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';

const AdminProfile = () => {
    const { user, updateUser } = useAuth();
    const { axiosSecure } = useAxiosSecure();
    const [loading, setLoading] = useState(false);

    // Form States
    const [newName, setNewName] = useState(user?.displayName || '');
    const [newPhoto, setNewPhoto] = useState(user?.photoURL || '');

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // 1. Update Firebase and AuthContext via your provider's method
            await updateUser({
                displayName: newName,
                photoURL: newPhoto
            });

            // 2. Update MongoDB using the email filter from the token
            const response = await axiosSecure.patch('/users/update-profile', {
                displayName: newName,
                photoURL: newPhoto
            });

            if (response.data.modifiedCount > 0 || response.data.matchedCount >= 0) {
                Swal.fire({
                    icon: 'success',
                    title: 'Profile Updated',
                    text: 'Changes saved successfully!',
                    timer: 1500,
                    showConfirmButton: false
                });
            }
        } catch (error) {
            console.error('Update Error:', error);
            Swal.fire('Error', 'Failed to synchronize profile data', 'error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex-1 p-8 bg-gray-50 dark:bg-[#0a0f0c] min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap justify-between gap-3 mb-8">
                    <p className="text-gray-900 dark:text-white text-4xl font-black">My Profile</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Profile Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white dark:bg-[#111814] p-6 rounded-xl border border-gray-200 dark:border-[#3b5445] sticky top-8">
                            <div className="flex flex-col gap-4 items-center text-center">
                                <div className="relative group">
                                    <img
                                        src={user?.photoURL || 'https://via.placeholder.com/150'}
                                        alt="Admin"
                                        className="h-32 w-32 rounded-full object-cover border-4 border-primary/20"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center justify-center gap-2">
                                        <p className="text-gray-900 dark:text-white text-[22px] font-bold">{user?.displayName}</p>
                                        <span className="bg-amber-100 dark:bg-amber-500/20 px-2 py-1 text-xs font-bold text-amber-600 rounded-md uppercase tracking-wider">
                                            {user?.role || 'Admin'}
                                        </span>
                                    </div>
                                    <p className="text-gray-500 dark:text-[#9db9a8]">{user?.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Edit Form & Activity */}
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        {/* Edit Form */}
                        <div className="bg-white dark:bg-[#111814] p-8 rounded-xl border border-gray-200 dark:border-[#3b5445]">
                            <h2 className="text-gray-900 dark:text-white text-[22px] font-bold pb-6">Edit Profile</h2>
                            <form onSubmit={handleUpdateProfile} className="space-y-6">
                                <div>
                                    <label className="block text-gray-800 dark:text-white font-medium mb-2">Display Name</label>
                                    <input
                                        type="text"
                                        value={newName}
                                        onChange={(e) => setNewName(e.target.value)}
                                        className="w-full h-12 rounded-lg border border-gray-300 dark:border-[#3b5445] bg-transparent px-4 dark:text-white focus:border-primary outline-none"
                                        placeholder="Enter full name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-800 dark:text-white font-medium mb-2">Profile Photo URL</label>
                                    <input
                                        type="url"
                                        value={newPhoto}
                                        onChange={(e) => setNewPhoto(e.target.value)}
                                        className="w-full h-12 rounded-lg border border-gray-300 dark:border-[#3b5445] bg-transparent px-4 dark:text-white focus:border-primary outline-none"
                                        placeholder="https://image-link.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-800 dark:text-white font-medium mb-2">Email Address</label>
                                    <input
                                        type="text"
                                        disabled
                                        value={user?.email || ''}
                                        className="w-full h-12 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-gray-800 px-4 text-gray-500 cursor-not-allowed"
                                    />
                                </div>
                                <div className="flex justify-end pt-4">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="px-8 py-3 bg-primary text-black font-black rounded-lg hover:bg-primary/90 transition-all disabled:opacity-50"
                                    >
                                        {loading ? 'Saving Changes...' : 'Save Changes'}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Recent Activity Card */}
                        <div className="bg-white dark:bg-[#111814] p-6 rounded-xl border border-gray-200 dark:border-[#3b5445]">
                            <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">Recent Activity</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="flex flex-col items-start p-4 bg-gray-50 dark:bg-[#1c2720] rounded-lg">
                                    <p className="text-3xl font-bold text-primary">42</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Lessons Moderated</p>
                                    <p className="text-xs text-gray-400 dark:text-gray-500">Last 30 days</p>
                                </div>
                                <div className="flex flex-col items-start p-4 bg-gray-50 dark:bg-[#1c2720] rounded-lg">
                                    <p className="text-3xl font-bold text-primary">15</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Flags Reviewed</p>
                                    <p className="text-xs text-gray-400 dark:text-gray-500">Last 30 days</p>
                                </div>
                                <div className="flex flex-col items-start p-4 bg-gray-50 dark:bg-[#1c2720] rounded-lg">
                                    <p className="text-3xl font-bold text-primary">112</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Total Actions</p>
                                    <p className="text-xs text-gray-400 dark:text-gray-500">Since joining</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AdminProfile;