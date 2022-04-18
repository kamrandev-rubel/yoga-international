import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Pagination } from "swiper";
const Courses = () => {
    return (
        <div>
            <div>
                <h2 className='text-[#112734] text-[5vw]'>Courses</h2>
                <p className='text-lg text-[#11273499]'>Hone your skills with our professionally trained teachers who are passionate about yoga</p>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Courses;