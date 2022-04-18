import React, { useEffect, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='container mx-auto mt-8'>
            <div className='mb-16'>
                <h2 className='text-[#112734] text-[5vw]'>Courses</h2>
                <p className='text-lg text-[#11273499]'>Hone your skills with our professionally trained teachers who are passionate about yoga</p>
            </div>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    freeMode={true}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {
                        courses.map(course => {
                            const { title, price, img, duration } = course;
                            return (
                                <>
                                    <SwiperSlide key={course.id}>
                                        <div>
                                            <img src={img} alt="" className='w-full brightness-[.7] rounded-md' />
                                        </div>
                                    </SwiperSlide>
                                </>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Courses;