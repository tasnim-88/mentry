import React, { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router';
import Logo from '../../../Components/Logo/Logo';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import axios from 'axios';
import SocialLogin from '../SocialLogin/SocialLogin';
import Theme from '../../../Components/Theme/Theme';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const { registerUser, updateUser } = useAuth();
    const axiosSecure = useAxiosSecure();

    const location = useLocation();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const profileImg = data.photo[0];

            // 1. Register User
            const result = await registerUser(data.email, data.password);
            console.log(result.user);
            

            // 2. Upload image to imgbb
            const formData = new FormData();
            formData.append('image', profileImg);

            const imgUploadURL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`;
            const imgRes = await axios.post(imgUploadURL, formData);
            const photoURL = imgRes.data.data.url;

            // 3. Save user to database
            const userInfo = {
                uid: result.user.uid,
                email: data.email,
                displayName: data.fullName,
                photoURL: photoURL,
                role:'user',
                isPremium: false,
                createdAt: new Date(),
            };

            await axiosSecure.post('/users', userInfo);

            // 4. Update Firebase profile
            await updateUser({
                displayName: data.fullName,
                photoURL: photoURL,
            });

            // 5. Redirect
            navigate(location?.state || '/');
        } catch (err) {
            console.log("Registration Error:", err);
        }
    };

    return (
        <div className="min-h-screen bg-base-200 flex flex-col">
            {/* NAV */}
            <div className="navbar bg-base-200 border-b border-base-300 px-4 md:px-20">
                <div className="flex-1">
                    <Logo />
                </div>
                <Theme />
            </div>

            {/* MAIN */}
            <div className="flex flex-col items-center justify-center grow px-4 py-10">
                <h1 className="text-3xl font-bold text-center">Create Your Account</h1>
                <p className="text-base-content/70 mt-1 text-center">
                    Start preserving your wisdom today.
                </p>

                <form
                    className="w-full max-w-md mt-10 space-y-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {/* FULL NAME */}
                    <div>
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("fullName", { required: "Full name is required" })}
                            placeholder="Enter your full name"
                            className="input input-bordered w-full"
                        />
                        {errors.fullName && (
                            <p className="text-sm text-red-500 mt-1">{errors.fullName.message}</p>
                        )}
                    </div>

                    {/* EMAIL */}
                    <div>
                        <label className="label">
                            <span className="label-text">Email Address</span>
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            placeholder="Enter your email address"
                            className="input input-bordered w-full"
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* PHOTO */}
                    <div>
                        <label className="label">
                            <span className="label-text">Profile Photo</span>
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            {...register("photo", { required: "Profile photo is required" })}
                            className="file-input file-input-bordered w-full"
                        />
                        {errors.photo && (
                            <p className="text-sm text-red-500 mt-1">{errors.photo.message}</p>
                        )}
                    </div>

                    {/* PASSWORD */}
                    <div className="relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <input
                            type={showPassword ? "text" : "password"}
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                                validate: {
                                    hasUppercase: (value) =>
                                        /[A-Z]/.test(value) ||
                                        "Must include at least one uppercase letter",
                                    hasLowercase: (value) =>
                                        /[a-z]/.test(value) ||
                                        "Must include at least one lowercase letter",
                                }
                            })}
                            placeholder="Enter your password"
                            className="input input-bordered w-full"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-11 z-50 -translate-y-1/2 text-xl text-gray-400"
                        >
                            {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                        </button>

                        {errors.password && (
                            <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    {/* CREATE BUTTON */}
                    <button type="submit" className="btn btn-success w-full mt-2">
                        Create Account
                    </button>

                    {/* DIVIDER */}
                    <div className="divider">OR</div>

                    {/* GOOGLE */}
                    <SocialLogin />

                    {/* LOGIN LINK */}
                    <p className="text-center mt-2 text-sm">
                        Already have an account?{" "}
                        <Link to="/login" className="link link-success">
                            Log In
                        </Link>
                    </p>
                </form>
            </div>

            {/* FOOTER */}
            <footer className="py-6 text-center text-sm text-base-content/60">
                <div className="space-x-4">
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                </div>
                <p className="mt-2">© 2025 Digital Life Lessons. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Register;
