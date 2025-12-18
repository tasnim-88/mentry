import React, { useEffect } from 'react';
import checkmark from '../../assets/animation/Checkmark.json'
import Lottie from 'lottie-react';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router';

const PaymentSuccess = () => {
    const { refreshUser } = useAuth();


    useEffect(() => {
        const syncUser = async () => {
            setTimeout(async () => {
                await refreshUser();
            }, 2000);
        };
        syncUser();
    }, [refreshUser]);

    return (
        <div>
            <main className="flex-1 w-full py-16 sm:py-24">
                <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 px-4">
                    <div className="flex items-center justify-center rounded-full bg-primary/20 text-primary w-32 h-32">
                        <Lottie animationData={checkmark} loop={false} />
                    </div>
                    <div className="flex flex-col items-center gap-4 text-center">
                        <h1 className="text-black dark:text-white text-4xl sm:text-5xl font-bold leading-tight tracking-tighter">Success! You're now a Premium Member.</h1>
                        <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed max-w-xl">Thank you for your purchase. Your account has been upgraded, granting you access to all premium features.</p>
                    </div>

                    <div className="w-full max-w-lg rounded-xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/10 p-6 sm:p-8 mt-4">
                        <div className="grid grid-cols-1 divide-y divide-black/10 dark:divide-white/10">
                            <div className="grid grid-cols-[150px_1fr] items-center py-4">
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">Plan</p>
                                <p className="text-black dark:text-white text-sm font-medium justify-self-end">Premium Lifetime</p>
                            </div>
                            <div className="grid grid-cols-[150px_1fr] items-center py-4">
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">Amount Paid</p>
                                <p className="text-black dark:text-white text-sm font-bold justify-self-end">৳1500.00</p>
                            </div>
                            <div className="grid grid-cols-[150px_1fr] items-center py-4">
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">Status</p>
                                <p className="text-green-500 text-sm font-bold justify-self-end uppercase">Confirmed</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex w-full flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/dashboard" className="w-full sm:w-auto">
                            <button className="w-full min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary text-black text-base font-bold transform hover:scale-105 transition-transform">
                                Go to My Dashboard
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PaymentSuccess;