import React from 'react';
import teacherImg1 from '../../../images/benifits/teacher1.png'
import teacherImg2 from '../../../images/benifits/teacher2.png'
import teacherImg3 from '../../../images/benifits/teacher3.png'

const Benifits = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-[7vw] my-16'>Member <span className='text-[#375B26]'>Benifits</span></h2>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                <div className='bg-white p-3 rounded-md'>
                        <img src={teacherImg1} alt="" className='w-full' />
                    <div className='px-2'>
                        <h2 className='text-[#B6990F] text-[36px]'>World Class Teacher</h2>
                        <p className='text-[#112734B2] text-[18px]'>Experience the depth of knowledge
                            from experts across all areas of yoga.</p>
                    </div>
                </div>
                <div className='bg-white p-3 rounded-md'>
                    <img src={ teacherImg2} alt="" className='w-full' />
                    <h2 className='text-[#B6990F] text-[36px]'>Stay Inspired</h2>
                    <p className='text-[#112734B2] text-[18px]'>Explore hundreds of live & on-demand classes, with new content added daily.</p>
                </div>
                <div className='bg-white p-3 rounded-md'>
                    <img src={ teacherImg3} alt="" className='w-full' />
                    <h2 className='text-[#B6990F] text-[36px]'>Everywhere You Are</h2>
                    <p className='text-[#112734B2] text-[18px]'>Take classes at your own pace,
                        on your own time, and on any device.</p>
                </div>
            </div>
        </div>
    );
};

export default Benifits;