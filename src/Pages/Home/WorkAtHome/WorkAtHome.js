import React from 'react';
import workImg from '../../../images/work-home/work.png'
import workUserImg2 from '../../../images/work-home/work-user.png'
import { GiMeditation } from 'react-icons/gi'
import { AiOutlineClockCircle } from 'react-icons/ai'

const WorkAtHome = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-[#112734] text-[5vw] leading-[68px] my-24'>At Home Or  On-The-Go <br /> <span className='text-[#375B26]'>Always On Your Time</span></h2>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
                <div>
                    <img src={workImg} alt="" />
                </div>
                <div className='flex justify-center items-center'>
                    <div className='w-[555px]'>
                        <p>Customize your membership and grow your practice by choosing from our expansive library of classes, courses, and articles.</p>
                        <div className='bg-white rounded-2xl'>
                            <div>
                                <iframe className='rounded-t-2xl w-full' height="315" src="https://www.youtube-nocookie.com/embed/wz5UT2VA3V8?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className='flex justify-between w-[555px]'>
                                <div className='m-3'>
                                    <div className='flex items-center mb-3'>
                                        <GiMeditation className='w-11 h-11 bg-[#F1D44B] text-white p-1.5 rounded-full mr-3' />
                                        <h2 className='text-[#112734] text-4xl'>Hatha yoga</h2>
                                    </div>
                                    <h4 className='text-[#112734B2] text-lg font-[700]'>Love Your (Warrior) Feet</h4>
                                    <div className='flex items-center my-6'>
                                        <img src={workUserImg2} alt="" />
                                        <p className='text-[#112734B2] text-lg ml-3'>Noah Maze </p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-[#112734B2] text-lg font-[700]'>Level 2</h3>
                                    <div className='flex items-center'>
                                        <AiOutlineClockCircle className='bg-[#F1D44B] w-9 h-9 p-1 text-white rounded-full' />
                                        <p className='text-[#112734B2] text-lg font-[]Open_Sans'>45 min </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkAtHome;