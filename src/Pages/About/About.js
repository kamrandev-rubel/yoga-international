import React from 'react';
import aboutLogo from '../../images/about-logo.png'
import aboutImg from '../../images/about.png'

const About = () => {
    return (
        <div style={{ backgroundImage: `url('${aboutImg}')` }} className='w-[100%] bg-[length:100%_540px] h-[540px] lg:bg-[length:100%_675px] lg:h-[675px] md:bg-[length:100%_630px] md:h-[630px] bg-no-repeat'>
            <div className='md:w-10/12 w-11/12 lg:w-10/12 xl:w-10/12 mx-auto flex justify-center lg:items-center '>
                <div className='gap-5 mt-14 md:mt-28 lg:mt-52  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>
                    <div className='p-3 order-2 lg:order-1 px-0 md:p-3 text-center lg:text-left '>
                        <h1 className='lg:leading-10 md:leading-10'>
                            <span className='text-white text-[7vw] lg:text-[5vw] md:text-[5vw]'>About </span>
                            
                        </h1>
                        <div className='flex items-center'>
                            <div className='w-[3px] h-16 bg-[#D3B10F] rounded-3xl mr-3 hidden lg:block xl:block'></div>
                            <p className='text-white text-md md:text-lg lg:text-lg xl:text-lg  lg:w-full xl:w-full md:w-8/12 sm:w-10/12 mx-auto'>
                            Online yoga school, the main idea is that you can study anywhere, access to various practices, teachers from all over the world, a large community of like-minded people</p>
                        </div>
                    </div>
                    <div className='flex order-1 lg:order-2 flex-col justify-center items-center'>
                        <img src={aboutLogo} alt=""  />
                        <h1 className='text-white text-[8vw] font-[800]'>YOGA</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;