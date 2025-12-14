import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useLocation, useNavigate } from 'react-router';

const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const axiosSecure = useAxiosSecure();
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogle = async () => {
        try {
            const result = await googleLogin();
            const user = result.user;

            const userInfo = {
                uid: result.user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                role: 'user',
                isPremium: false,
                createdAt: new Date()
            };

            // 🔍 CHECK if user already exists
            const res = await axiosSecure.get(`/users/${user.email}`);

            if (!res.data) {
                // ✅ CREATE user only if not exists
                await axiosSecure.post('/users', userInfo);
            }

            navigate(location?.state || '/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <button
            onClick={handleGoogle}
            className="w-full mb-8 btn bg-white text-black border-[#e5e5e5]"
        >
            <FcGoogle size={24} />
            Login with Google
        </button>
    );
};

export default SocialLogin;