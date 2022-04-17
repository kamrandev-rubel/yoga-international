import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../../images/banner.png'
import class200Img from '../../../images/class200.png'

// className = 'w-[100%] h-[100vh] lg:bg-[length:100%] md:bg-[length:100%] bg-[length:100%_340px] xl:bg-[length:100%] bg-no-repeat min-h-screen '

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url('${bannerImg}')` }}
            className='w-[100%] bg-[length:100%_340px] h-[340px] lg:bg-[length:100%_100vh] lg:h-[100vh] md:bg-[length:100%_430px] md:h-[430px] bg-no-repeat'
        >
            <div className='md:w-10/12 w-11/12 lg:w-10/12 xl:w-10/12 mx-auto flex justify-center lg:items-center '>
                <div className='gap-5 mt-14 md:mt-28 lg:mt-36  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>
                    <div className='p-3 px-0 md:p-3 text-center lg:text-left '>
                        <h1 className='lg:leading-10 md:leading-10'>
                            <span className='text-[#112734] text-[7vw] lg:text-[5vw] md:text-[5vw]'>Practice </span>
                            <span className='text-[#375B26] text-[7vw] lg:text-[5vw] md:text-[5vw]'>At Home</span><br />
                            <span className='text-[#112734B2))] text-[2.5vw]'>With theWorld’s Top Yoga Teachers</span>
                        </h1>
                        <p className='text-[#112734B2] text-md md:text-lg lg:text-lg xl:text-lg  lg:w-full xl:w-full md:w-8/12 sm:w-10/12 mx-auto'>
                            Stream hundreds of expertly led yoga & meditation classes on any device.
                            Your free trial awaits. Cancel online anytime.</p>
                        <button>
                            <Link to='/signin' className=" py-2.5 px-7 mt-4 text-[14px] font-bold text-white bg-[#D3B10F] rounded-md block ">Start your  free trial</Link>
                        </button>
                    </div>
                    <div className='hidden lg:block xl:block'>
                        <div className='flex justify-center items-center'>
                            <h1 className='text-[#375B2669] text-[5vw] mr-1 font-[600]'>more then</h1>
                            <img src={class200Img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;