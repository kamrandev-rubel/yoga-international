import React from 'react';
import bannerImg from '../../../images/banner.png'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url('${bannerImg}')` }} className='w-[100%] h-[100vh] bg-[length:100%] bg-no-repeat absolute top-0 z-10'>
            
        </div>
    );
};

export default Banner;