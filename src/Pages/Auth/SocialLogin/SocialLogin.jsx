import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';

const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    // const handleGoogle = async () => {
    //     try {
    //         const result = await googleLogin();
    //         const user = result.user;

    //         const userInfo = {
    //             uid: result.user.uid,
    //             email: user.email,
    //             displayName: user.displayName,
    //             photoURL: user.photoURL,
    //             role: 'user',
    //             isPremium: false,
    //             createdAt: new Date()
    //         };

    //         // 🔍 CHECK if user already exists
    //         const res = await axios.get(`http://localhost:3000/users/${user.email}`);

    //         if (!res.data) {
    //             // ✅ CREATE user only if not exists
    //             await axios.post('http://localhost:3000/users', userInfo);
    //         }

    //         navigate(location?.state || '/');
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const handleGoogle = async () => {
        try {
            const result = await googleLogin();
            const userInfo = {
                uid: result.user.uid,
                email: result.user.email,
                displayName: result.user.displayName,
                photoURL: result.user.photoURL,
                role: 'user',
                isPremium: false,
                createdAt: new Date()
            };

            // Just POST the data. The backend will handle the rest.
            await axios.post('http://localhost:3000/users', userInfo);
            navigate(location?.state || '/');
        } catch (error) {
            console.error("Google Login Error:", error);
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