import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillInstagram} from 'react-icons/ai';
import {FaTwitter,FaPinterestP,FaFacebookF} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-black py-[70px]'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mx-auto'>
                    <div className='flex  justify-center text-lg'>
                        <div className='w-64  flex flex-col text-center md:text-left text-gray-100'>
                            <Link className='mb-2 text-[#D3B10F] font-[700]' to='/'>Courses</Link>
                            <Link className='mb-2' to='/'>Featured</Link>
                            <Link className='mb-2' to='/'>Asana</Link>
                            <Link className='mb-2' to='/'>Ayurveda</Link>
                            <Link className='mb-2' to='/'>Conferance</Link>
                        </div>
                    </div>
                    <div className='flex flex-col items-center text-lg'>
                        <div className='w-64  flex flex-col text-center md:text-left text-gray-100'>
                            <Link className='mb-2 text-[#D3B10F] font-[700]' to='/'>Classes</Link>
                            <Link className='mb-2' to='/'>Beginner</Link>
                            <Link className='mb-2' to='/'>Hatha Yoga</Link>
                            <Link className='mb-2' to='/'>Prenatial</Link>
                            <Link className='mb-2' to='/'>Restorative</Link>
                            <Link className='mb-2' to='/'>Vinyasa</Link>
                        </div>
                    </div>
                    <div className='flex flex-col items-center text-gray-100 text-lg'>
                        <div className='w-64  flex flex-col text-center md:text-left '>
                            <Link className='mb-2 text-[#D3B10F] font-[700]' to='/'>About</Link>
                            <Link className='mb-2 text-gray-400' to='/'>Need help&</Link>
                            <Link className='mb-2 text-gray-400' to='/'>Careers</Link>
                            <Link className='mb-2 text-gray-400' to='/'>Privacy Policy</Link>
                            <Link className='mb-2 text-gray-400' to='/'>Terms of Service</Link>
                        </div>
                    </div>
            </div>
            <div className='w-[90%] mx-auto flex justify-between flex-col md:flex-row'>
                <div className='mt-[100px]'>
                    <p className='text-gray-400'><small>Copyright &copy; {new Date().getFullYear()} Yoga International</small></p>
                </div>
                <div className='text-gray-100 text-lg flex mt-[80px] justify-center'>
                    <AiFillInstagram className='bg-[#F1D44B] w-9 h-9 ml-8 p-1.5 rounded-full text-gray-900 cursor-pointer'/>
                    <FaTwitter className='bg-[#F1D44B] w-9 h-9 ml-8 p-1.5 rounded-full text-gray-900 cursor-pointer'/>
                    <FaPinterestP className='bg-[#F1D44B] w-9 h-9 ml-8 p-1.5 rounded-full text-gray-900 cursor-pointer'/>
                    <FaFacebookF className='bg-[#F1D44B] w-9 h-9 ml-8 p-1.5 rounded-full text-gray-900 cursor-pointer'/>
                </div>
            </div>
        </div>
    );
};

export default Footer;