import React from 'react';
import challengeImg1 from '../../../images/challenge/yoga-challenge1.png'
import challengeImg2 from '../../../images/challenge/yoga-challenge2.png'

const Challenge = () => {
    return (
        <div className='container mx-auto'>
            <div className=' mb-20 flex items-center justify-center lg:justify-start xl:justify-start'>
                <div className='w-[3px] h-28 bg-[#D3B10F] rounded-3xl mr-3 hidden lg:block xl:block'></div>
                <div className='text-left'>
                    <h2 className='text-[#112734] text-[5vw] leading-[88px]'> Challenge <span className='text-[#375B26]'>Yourself</span></h2>
                    <p className='text-[#112734B2] text-lg'>Take your practice to the next level with our on-going yoga challenges</p>
                </div>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
                <div>
                <img src={challengeImg1} alt="" className='mx-auto' />

                </div>
                <div>

                <img src={challengeImg2} alt="" className='mx-auto'/>
                </div>
            </div>
        </div>
    );
};

export default Challenge;