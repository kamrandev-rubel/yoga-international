import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

const Course = ({ course }) => {
    const { title, price, img, duration } = course;
    return (
        <>
            {/* <SwiperSlide>{title}</SwiperSlide> */}
        </>
    );
};

export default Course;