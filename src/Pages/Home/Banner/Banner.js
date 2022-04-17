import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../../images/banner.png'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url('${bannerImg}')` }} className='w-[100%]  bg-[length:100%] bg-no-repeat min-h-[100vh] absolute top-0 z-10 '>
            <div className='w-10/12 h-[100vh] mx-auto flex justify-center sm:items-center  lg:items-center '>
                <div className='gap-5 h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
                    <div className='p-3 text-left '>
                        <h1 className='lg:leading-10 md:leading-10'>
                            <span className='text-[#112734] text-[7vw] lg:text-[5vw] md:text-[5vw]'>Practice </span>
                            <span className='text-[#375B26] text-[7vw] lg:text-[5vw] md:text-[5vw]'>At Home</span><br />
                            <span className='text-[#112734B2))] text-[2.5vw]'>With theWorld’s Top Yoga Teachers</span>
                        </h1>
                        <p className='text-[#112734B2] text-lg '>
                            Stream hundreds of expertly led yoga & meditation classes on any device.
                            Your free trial awaits. Cancel online anytime.</p>
                        <button>
                            <Link to='/signin' className=" py-2.5 px-7 mt-7 text-[14px] font-bold text-white bg-[#D3B10F] rounded-md block ">Start your  free trial</Link>
                        </button>
                    </div>
                    <div className='hidden'>
                        <h1>hello</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;