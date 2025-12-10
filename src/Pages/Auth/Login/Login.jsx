import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Link } from 'react-router';
import Logo from '../../../Components/Logo/Logo';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div>
            <div className="min-h-screen bg-base-200 flex">
                {/* LEFT SIDE */}
                <div className="hidden lg:flex w-1/2 bg-[#1f3028] text-white items-center justify-center flex-col relative">
                    <div className="absolute top-6 left-6 flex items-center gap-2">
                        <Logo/>
                    </div>

                    <div className="text-center px-8">
                        <h1 className="text-3xl font-bold mb-3">Digital Life Lessons</h1>
                        <p className="opacity-80">
                            Capture Your Wisdom. Share Your Growth.
                        </p>
                    </div>

                    <p className="absolute bottom-6 text-xs opacity-70">
                        © 2024 Digital Life Lessons. All rights reserved.
                    </p>
                </div>

                {/* RIGHT SIDE */}
                <div className="w-full lg:w-1/2 bg-[#08150f] text-white flex flex-col justify-center px-8 lg:px-20">
                    <div className="text-right mb-6 text-sm">
                        <a href="#" className="hover:underline opacity-80">
                            Register
                        </a>
                    </div>

                    <h2 className="text-3xl font-semibold mb-6">Welcome Back</h2>

                    <div className="space-y-4">
                        {/* Email */}
                        <div>
                            <label className="block text-sm mb-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="input input-bordered w-full bg-transparent placeholder-gray-400"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex justify-between items-center">
                                <label className="block text-sm mb-1">Password</label>
                                <button className="text-green-400 text-xs hover:underline">
                                    Forgot Password?
                                </button>
                            </div>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className="input input-bordered w-full bg-transparent placeholder-gray-400"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-400"
                                >
                                    {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                </button>
                            </div>
                        </div>

                        {/* Login Button */}
                        <button className="btn btn-success w-full rounded-md text-black font-semibold">
                            Login
                        </button>

                        <div className="flex items-center gap-3 text-sm opacity-70">
                            <span className="flex-1 h-px bg-gray-500"></span> or{" "}
                            <span className="flex-1 h-px bg-gray-500"></span>
                        </div>

                        {/* GOOGLE */}
                        <button className="btn w-full border border-gray-600 bg-transparent hover:bg-gray-800">
                            <FcGoogle className="text-xl" />
                            Sign in with Google
                        </button>
                    </div>

                    <p className="mt-6 text-sm text-center opacity-80">
                        Don't have an account?
                        <Link to={'/register'} className="text-green-400 font-semibold hover:underline ml-1">
                            Register
                        </Link>
                    </p>

                    <div className="flex justify-between mt-10 text-xs opacity-70">
                        <a href="#" className="hover:underline">Terms of Service</a>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;