import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router';
const Banner = () => {
    return (
        <div className='mt-4'>
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} interval={3000} transitionTime={1000} stopOnHover={false}>
                <div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="group relative rounded-xl overflow-hidden">
                            <div className="flex min-h-[400px] flex-col gap-8 items-center justify-center p-8 text-center bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]" data-alt="Abstract background image with green and dark tones representing digital wisdom" >
                                <div className="flex flex-col gap-4 max-w-3xl">
                                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl md:text-6xl">
                                        Don't Live in The Past  Learn from It.
                                    </h1>
                                    <h2 className="text-gray-200 text-base font-normal leading-normal sm:text-lg">
                                        You can't start the next chapter of your life if you keep re-reading your last one.The past is a place of reference, not a place of residence; the past is a place of learning, not a place of living.
                                    </h2>
                                </div>
                                <div>
                                    <Link to={'/publiclessons'} className="btn btn-primary cursor-pointer hover:-translate-y-1 rounded-lg h-12 px-5 font-bold ">
                                        Explore Lessons
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="group relative rounded-xl overflow-hidden">
                            <div className="flex min-h-[400px] flex-col gap-8 items-center justify-center p-8 text-center bg-cover bg-center bg-no-repeat bg-[url('https://plus.unsplash.com/premium_vector-1729161404424-88e5fa52bcc0?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]" data-alt="Abstract background image with green and dark tones representing digital wisdom" >
                                <div className="flex flex-col gap-4 max-w-3xl">
                                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl md:text-6xl">
                                        Your Life, Your Lessons. Preserve Them Forever.
                                    </h1>
                                    <h2 className="text-gray-200 text-base font-normal leading-normal sm:text-lg">
                                        Turn experience into insight and discover wisdom from a global community.
                                    </h2>
                                </div>
                                <div>
                                    <Link to={'/publiclessons'} className="btn btn-primary cursor-pointer hover:-translate-y-1 rounded-lg h-12 px-5 font-bold ">
                                        Explore Lessons
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="group relative rounded-xl overflow-hidden">
                            <div className="flex min-h-[400px] flex-col gap-8 items-center justify-center p-8 text-center bg-cover bg-center bg-no-repeat bg-[url('https://plus.unsplash.com/premium_vector-1682308588325-a13da75a7c7e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]" data-alt="Abstract background image with green and dark tones representing digital wisdom" >
                                <div className="flex flex-col gap-4 max-w-3xl">
                                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl md:text-6xl">
                                        Learn from the Past, Live for the Future.
                                    </h1>
                                    <h2 className="text-gray-200 text-base font-normal leading-normal sm:text-lg">
                                        Lessons in life will be repeated until they are learned.Anyone who has never made a mistake has never tried anything new.
                                    </h2>
                                </div>
                                <div>
                                    <Link to={'/publiclessons'} className="btn btn-primary cursor-pointer hover:-translate-y-1 rounded-lg h-12 px-5 font-bold ">
                                        Explore Lessons
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;