import React from 'react';
import checkmark from '../../assets/animation/Checkmark.json'
import Lottie from 'lottie-react';

const PaymentSuccess = () => {
    return (
        <div>
            <main className="flex-1 w-full py-16 sm:py-24">
                <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 px-4">
                    <div className="flex items-center justify-center rounded-full bg-primary/20 text-primary">
                        <Lottie animationData={checkmark} loop={false} className="" />
                    </div>
                    <div className="flex flex-col items-center gap-4 text-center">
                        <h1 className="text-black dark:text-white text-4xl sm:text-5xl font-bold leading-tight tracking-tighter">Success! You're now a Premium Member.</h1>
                        <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed max-w-xl">Thank you for your purchase. Your account has been upgraded, granting you access to all premium features. A receipt has been sent to your email address.</p>
                    </div>
                    <div className="w-full max-w-lg rounded-xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/10 p-6 sm:p-8 mt-4">
                        <div className="grid grid-cols-1 divide-y divide-black/10 dark:divide-white/10">
                            <div className="grid grid-cols-[150px_1fr] items-center py-4">
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">Order Confirmation</p>
                                <p className="text-black dark:text-white text-sm font-medium justify-self-end">#DLL123456789</p>
                            </div>
                            <div className="grid grid-cols-[150px_1fr] items-center py-4">
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">Date</p>
                                <p className="text-black dark:text-white text-sm font-medium justify-self-end">October 26, 2023</p>
                            </div>
                            <div className="grid grid-cols-[150px_1fr] items-center py-4">
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">Amount Paid</p>
                                <p className="text-black dark:text-white text-sm font-bold justify-self-end">$99.99</p>
                            </div>
                            <div className="grid grid-cols-[150px_1fr] items-center py-4">
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">Payment Method</p>
                                <p className="text-black dark:text-white text-sm font-medium justify-self-end">Visa ending in 1234</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex w-full flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="flex w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-black text-base font-bold leading-normal tracking-wide transform hover:scale-105 transition-transform">
                            <span className="truncate">Explore Premium Lessons</span>
                        </button>
                        <button className="flex w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white text-base font-bold leading-normal tracking-wide hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors">
                            <span className="truncate">Go to My Dashboard</span>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PaymentSuccess;