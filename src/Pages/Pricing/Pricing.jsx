import React from "react";
import { MdCheckCircle, MdCancel } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Navigate } from "react-router";

const Pricing = () => {

    const { user } = useAuth();
    const { axiosSecure } = useAxiosSecure();

    if (user?.isPremium) {
        return <Navigate to="/" replace />;
    }

    const isPremium = user?.isPremium;

    const handleUpgrade = async () => {
        const res = await axiosSecure.post('/create-checkout-session');
        window.location.href = res.data.url;
    }

    return (
        <div>
            <main className="grow">
                {/* Heading */}
                <div className="flex flex-col items-center gap-3 p-4 py-12 text-center">
                    <p className="text-4xl lg:text-5xl font-black text-base-content">
                        Unlock Your Full Potential
                    </p>
                    <p className="text-base text-base-content/70 max-w-xl">
                        Preserve your wisdom forever with a one-time upgrade for lifetime access to all premium features.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-3 max-w-4xl mx-auto">

                    {/* Free Plan */}
                    <div className="flex flex-col gap-4 p-6 rounded-xl border border-base-300 bg-base-100 shadow-sm max-w-md w-full mx-auto">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-base font-bold text-base-content">Free</h1>

                            <p className="flex items-baseline gap-1 text-base-content">
                                <span className="text-4xl font-black">৳0</span>
                                <span className="font-bold text-base">Per month</span>
                            </p>
                        </div>

                        <button className="btn btn-sm bg-base-200 dark:bg-base-300 text-base-content font-bold rounded-lg">
                            Current Plan
                        </button>

                        {/* Features */}
                        <div className="flex flex-col gap-3 pt-2">
                            {[
                                "Up to 10 private lessons",
                                "Basic formatting",
                                "Standard community listing"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-base-content">
                                    <MdCheckCircle className="text-primary text-xl" />
                                    {item}
                                </div>
                            ))}

                            {[
                                "Premium lesson templates",
                                "Ad-free experience",
                                "Export to PDF/Print",
                                "Priority customer support"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-base-content/50">
                                    <MdCancel className="text-base-content/40 text-xl" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Premium Plan */}
                    <div className="flex flex-col gap-4 p-6 rounded-xl border border-primary bg-primary/10 dark:bg-primary/20 shadow-md max-w-md w-full mx-auto">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center justify-between">
                                <h1 className="text-base font-bold text-base-content">Premium</h1>
                                <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-content rounded-full">
                                    Lifetime Access
                                </span>
                            </div>

                            <p className="flex items-baseline gap-1 text-base-content">
                                <span className="text-4xl font-black">৳1500</span>
                                <span className="font-bold text-base">One-time payment</span>
                            </p>
                        </div>

                        <button
                            disabled={isPremium}
                            onClick={handleUpgrade}
                            className="btn btn-sm bg-primary text-primary-content font-bold rounded-lg"
                        >
                            {isPremium ? "Already Premium ⭐" : "Upgrade to Premium"}
                        </button>


                        <div className="flex flex-col gap-3 pt-2">
                            {[
                                "Unlimited private lessons",
                                "Advanced formatting",
                                "Priority community listing",
                                "Premium lesson templates",
                                "Ad-free experience",
                                "Export to PDF/Print",
                                "Priority customer support"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-base-content">
                                    <MdCheckCircle className="text-primary text-xl" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="text-center text-base-content/70 text-sm py-4">
                    Secure payment via Stripe
                </p>
            </main>
        </div>
    );
};

export default Pricing;