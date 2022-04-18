import React from 'react';
import { Link } from 'react-router-dom';
import memberImg from '../../../images/Rectangle 4.png'

const Member = () => {
    return (
        <div className='mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
            <div className='flex justify-center items-center'>
                <div>
                <h2 className='text-[5vw]'><span  className='text-[#375B26]'>Empowerment</span> <br /> comes from within</h2>
                <p className='text-lg text-left text-[#112734B2]'>Be part of a community of expert <br /> yoga practitioners and members alike</p>
                <Link to='/signin' className="py-1.5 px-4 text-[14px] font-bold text-white bg-[#D3B10F] rounded-md ">Start your Journey</Link>
                </div>
            </div>
            <div>
                <img src={memberImg} alt="" />
            </div>
        </div>
    );
};

export default Member;