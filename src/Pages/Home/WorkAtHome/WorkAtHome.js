import React from 'react';
import workImg from '../../../images/work-home/work.png'
import workUserImg2 from '../../../images/work-home/work-user.png'
import { GiMeditation } from 'react-icons/gi'
import { AiOutlineClockCircle } from 'react-icons/ai'

const WorkAtHome = () => {
    return (
        <div className='container mx-auto mb-16'>
            <h2 className='text-[#112734] text-[5vw] leading-[68px] my-24'>At Home Or  On-The-Go <br /> <span className='text-[#375B26]'>Always On Your Time</span></h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
                <div className='flex justify-center md:justify-start'>
                    <img src={workImg} alt="" className='' />
                </div>
                <div className='flex justify-center items-center'>
                    <div className='w-[555px]'>
                        <p className='text-lg text-[#112734B2] p-3 pt-0 text-left'>Customize your membership and grow your practice by choosing from our expansive library of classes, courses, and articles.</p>
                        <div className='bg-white rounded-2xl'>
                            <div>
                            <iframe  className='rounded-t-2xl w-full h-[297px]' src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fhistorytv18ind%2Fvideos%2F2123485067685795%2F&show_text=false&width=560&t=0" style={{border:"none", overflow:"hidden"}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                            </div>
                            <div className='flex justify-between w-[] m-3 box-border'>
                                <div className=''>
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
                                <div className='flex flex-col justify-between'>
                                    <h3 className='text-[#112734B2] text-lg font-[700]'>Level 2</h3>
                                    <div className='flex items-center mb-6'>
                                        <AiOutlineClockCircle className='bg-[#F1D44B] w-9 h-9 p-1 text-white rounded-full mr-4' />
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