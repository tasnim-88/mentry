import React from 'react';

const Banner = () => {
    return (
        <div>
            <section className="py-10 sm:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="group relative rounded-xl overflow-hidden">
                        <div
                            className="flex min-h-[480px] flex-col gap-8 items-center justify-center p-8 text-center bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: 'linear-gradient(rgba(16, 34, 24, 0.7) 0%, rgba(16, 34, 24, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFY88oh_pof11XDxXx8l2eakzAmOLHeRVKvMF3kYNZ5BKkDDTAvxzDBcD8EkLKYmLDgKBeeHWbTPhC3sCxbDk9AF8lQoAHOB4oPf_iMNcwCUkeOTbPfT3aixH_KwYjRNBNtRfqJwDXyIoHConEQl10YN56EAb7G8c2Ndq8X_-rxACCt7Fe0MAmZRSP_PlcHeo4uXVmIy8r2YL2d54i3nrr3KnMPCXUOWvu8BVqeSlUP-QGMBm0lOaqdwpTCPJ1uZYio-16xGtd2BA")' }}
                        >
                            <div className="flex flex-col gap-4 max-w-3xl">
                                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl md:text-6xl">
                                    Your Life, Your Lessons. Preserve Them Forever.
                                </h1>
                                <h2 className="text-gray-200 text-base font-normal leading-normal sm:text-lg">
                                    Turn experience into insight and discover wisdom from a global community.
                                </h2>
                            </div>
                            <div className="flex-wrap gap-4 flex justify-center">
                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em]">
                                    <span className="truncate">Create a Lesson</span>
                                </button>
                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-white/10 text-white text-base font-bold leading-normal tracking-[0.015em]">
                                    <span className="truncate">Explore Public Lessons</span>
                                </button>
                            </div>
                        </div>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            <span className="block size-2 rounded-full bg-white"></span>
                            <span className="block size-2 rounded-full bg-white/50"></span>
                            <span className="block size-2 rounded-full bg-white/50"></span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;