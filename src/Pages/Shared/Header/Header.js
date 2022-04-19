import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { BiSearch } from 'react-icons/bi'

const Header = () => {
    return (
        <div className='bg-gray-900 absolute w-full bg-opacity-0 top-0 z-10'>

        <nav className=" pt-6 flex items-center  h-[50px] border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to='/' className="flex items-center">
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-[18px]"> <span className='text-[#375B26]'>Yoga</span> International </span>
                </Link>
                <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                    {/* icon toggle */}
                </button>
                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-col items-center mt-4 md:flex-row md:space-x-9 md:mt-0 ">
                        <li>
                            <Link to="#" className="block py-2 text-[14px] font-[700] font-['Open_Sans']">Home</Link>
                        </li>
                        <li>
                            <Link to="#" className="block py-2 text-[14px] font-[700] font-['Open_Sans']">Articles</Link>
                        </li>
                        <li>
                            <Link to="#" className="block py-2 text-[14px] font-[700] font-['open_sans'] ">classNamees</Link>
                        </li>
                        <li>
                            <Link to="#" className="block py-2 text-[14px] font-[700] font-['Open_Sans']">Courses</Link>
                        </li>
                        <li>
                            <Link to="#" className="block py-2 text-[14px] font-[700] font-['Open_Sans']">About</Link>
                        </li>
                        <div className=' md:hidden lg:hidden xl:hidden'>
                            <ul className='flex'>
                                <li>
                                    <BiSearch className=' w-6 h-6 cursor-pointer' />
                                </li>
                                <li>
                                    <Link to='/signin' className="py-1 px-3 text-[14px] font-bold text-[#112734] border border-[#112734] rounded-md">Sign In</Link>
                                </li>
                                <li>
                                    <Link to='/signin' className=" py-1 px-3 text-[14px] font-bold text-white bg-[#D3B10F] rounded-md md:hidden lg:block xl:block">Start your  free trial</Link>
                                </li>
                            </ul>
                        </div>
                    </ul>
                </div>
                    <div className='hidden md:block lg:block xl:block'>
                    <ul className='flex flex-col items-center mt-4 md:flex-row md:space-x-7 md:mt-0'>
                            <li>
                                <BiSearch className=' w-6 h-6 cursor-pointer' />
                            </li>
                            <li>
                                <Link to='/signin' className="py-1 px-3 text-[14px] font-bold text-[#112734] border border-[#112734] rounded-md">Sign In</Link>
                            </li>
                            <li>
                                <Link to='/signin' className=" py-1 px-3 text-[14px] font-bold text-white bg-[#D3B10F] rounded-md md:hidden lg:block xl:block">Start your  free trial</Link>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
    </div>
    );
};

export default Header;

// {/* <ul className='flex'>
//     <li>
//         <BiSearch className=' w-6 h-6 cursor-pointer' />
//     </li>
//     <li>
//         <Link to='/signin' className="py-1 px-3 text-[14px] font-bold text-[#112734] border border-[#112734] rounded-md">Sign In</Link>
//     </li>
//     <li>
//         <Link to='/signin' className=" py-1 px-3 text-[14px] font-bold text-white bg-[#D3B10F] rounded-md md:hidden lg:block xl:block">Start your  free trial</Link>
//     </li>
// </ul> */}