import React from 'react';
import Banner from '../Banner/Banner';
import Benifits from '../Benifits/Benifits';
import Challenge from '../Challenge/Challenge';
import Courses from '../Courses/Courses';
import Member from '../Member/Member';
import WorkAtHome from '../WorkAtHome/WorkAtHome';

const Home = () => {
    return (
        <div>
            <Banner />
            <Benifits />
            <WorkAtHome />
            <Challenge />
            <Courses />
            <Member/>
        </div>
    );
};

export default Home;