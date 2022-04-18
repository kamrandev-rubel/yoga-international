import React from "react";
import { IoIosDoneAll } from "react-icons/io";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { title, price, img, duration } = course;
  return (
    <div className="flex justify-center  relative">
      <div className="">
        <img src={img} alt="" className="w-[360px] h-[410px] brightness-[.5] rounded-lg " />
        <div className="absolute top-0 text-center">
          <div className="flex flex-col justify-around w-[360px] h-[410px] lg:w-[320px] xl:w-[360px] p-3">
            <div className="flex items-center justify-start text-white">
              <p>
                <IoIosDoneAll className="text-5xl" />{" "}
              </p>
              <p className="text-lg after:mx-1 after:border-r-2 border-white after:rounded-xl">
                Courses
              </p>
              <p className="text-2xl">{price}</p>
            </div>
            <div className="flex justify-center items-center text-white">
              <h2 className="text-[6vw] md:text-[4vw] lg:text-[3vw] font-[700] my-16">{title}</h2>
            </div>
            <div className="flex justify-between items-center text-white">
              <div>
		    <Link to='/signin' className=" py-1.5 px-4 text-[14px] font-bold text-white bg-[#D3B10F] rounded-md md:hidden lg:block xl:block">Purchase</Link>
              </div>
              <div className="flex items-center">
                <AiOutlineClockCircle className="text-4xl mr-2"/>
                <p>{duration} min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
