import React from 'react';
import Banner from '../Banner/Banner';
import Benifits from '../Benifits/Benifits';
import Challenge from '../Challenge/Challenge';
import Courses from '../Courses/Courses';
import Stories from '../Stories/Stories';
import WorkAtHome from '../WorkAtHome/WorkAtHome';

const Home = () => {
    return (
        <div>
            <Banner />
            <Benifits />
            <WorkAtHome />
            <Challenge />
            <Courses />
            <Stories/>
        </div>
    );
};

export default Home;