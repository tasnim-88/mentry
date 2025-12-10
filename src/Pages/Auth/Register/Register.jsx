import React, { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Link } from 'react-router';
import Logo from '../../../Components/Logo/Logo';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div>
            <div className="min-h-screen bg-base-200 flex flex-col">
                {/* NAVBAR */}
                <div className="navbar bg-base-200 border-b border-base-300 px-4 md:px-20">
                    <div className="flex-1">
                        <Logo/>
                    </div>

                    <div className="flex-none space-x-6">
                        <a className="link link-hover">Explore Lessons</a>
                        <a className="link link-hover">About</a>
                        <button className="btn btn-sm btn-success">Login</button>
                    </div>
                </div>

                {/* MAIN CONTENT */}
                <div className="flex flex-col items-center justify-center grow px-4 py-10">
                    <h1 className="text-3xl font-bold text-center">Create Your Account</h1>
                    <p className="text-base-content/70 mt-1 text-center">
                        Start preserving your wisdom today.
                    </p>

                    <form className="w-full max-w-md mt-10 space-y-4">
                        {/* Full Name */}
                        <div>
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Profile Photo URL */}
                        <div>
                            <label className="label">
                                <span className="label-text">
                                    Profile Photo URL{" "}
                                    <span className="text-base-content/50">(Optional)</span>
                                </span>
                            </label>
                            <input
                                type="url"
                                placeholder="https://example.com/photo.jpg"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Password */}
                        <div className='relative'>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-2/3 z-50 -translate-y-1/2 text-xl text-gray-400"
                            >
                                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                            </button>
                        </div>

                        {/* Create Account Button */}
                        <button className="btn btn-success w-full mt-4">
                            Create Account
                        </button>

                        {/* OR Divider */}
                        <div className="divider">OR</div>

                        {/* Google Button */}
                        <button className="btn bg-neutral w-full text-base-content">
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                className="w-5 h-5"
                                alt="Google"
                            />
                            Sign up with Google
                        </button>

                        {/* Login Link */}
                        <p className="text-center mt-2 text-sm">
                            Already have an account?{" "}
                            <Link to={'/login'} className="link link-success">Log In</Link>
                        </p>
                    </form>
                </div>

                {/* FOOTER */}
                <footer className="py-6 text-center text-sm text-base-content/60">
                    <div className="space-x-4">
                        <a className="link link-hover">Terms of Service</a>
                        <a className="link link-hover">Privacy Policy</a>
                    </div>
                    <p className="mt-2">
                        © 2025 Digital Life Lessons. All rights reserved.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default Register;