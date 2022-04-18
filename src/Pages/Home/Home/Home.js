import React from 'react';
import Banner from '../Banner/Banner';
import Benifits from '../Benifits/Benifits';
import Challenge from '../Challenge/Challenge';
import WorkAtHome from '../WorkAtHome/WorkAtHome';

const Home = () => {
    return (
        <div>
            <Banner />
            <Benifits />
            <WorkAtHome />
            <Challenge />
        </div>
    );
};

export default Home;