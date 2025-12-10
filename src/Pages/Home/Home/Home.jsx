import React from 'react';
import FeaturedLessons from '../FeaturedLessons/FeaturedLessons';
import WhyMatters from '../WhyMatters/WhyMatters';
import TopContributors from '../TopContributors/TopContributors';
import MostSavedLessons from '../MostSavedLessons/MostSavedLessons';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <FeaturedLessons />
            <WhyMatters />
            <TopContributors />
            <MostSavedLessons />
        </div>
    );
};

export default Home;