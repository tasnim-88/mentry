import React from 'react';
import error from '../../assets/animation/Error animation.json'
import Lottie from 'lottie-react';

const PaymentCancelled = () => {
    return (
        <div>
            <main className="grow flex items-center justify-center py-12 sm:py-20">
                {/* <!-- EmptyState modified for Payment Canceled --> */}
                <div className="flex flex-col px-4 py-6 w-full max-w-lg">
                    <div className="flex flex-col items-center gap-6 text-center">
                        <div className="flex items-center justify-center  rounded-full bg-red-500/10 text-red-500">
                            <Lottie animationData={error} loop={false} className="" />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <p className="text-white text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em]">Your Payment Was Canceled</p>
                            <p className="text-gray-400 text-sm font-normal leading-normal max-w-md">
                                Your payment did not go through, and you have not been charged. Please check your payment details and try again. If you continue to have issues, please contact our support team.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mt-4">
                            <button className="flex w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-opacity">
                                <span className="truncate">Retry Payment</span>
                            </button>
                            <button className="flex w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-white/10 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-white/20 transition-colors">
                                <span className="truncate">Return to Pricing Page</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PaymentCancelled;