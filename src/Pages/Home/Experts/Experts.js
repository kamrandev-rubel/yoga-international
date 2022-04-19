import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay, FreeMode } from "swiper";
import useServiceData from '../../../Hooks/useServiceData';

const Experts = () => {
    const [services, setServices]= useServiceData();
    const [experts, setExperts] = useState([]);
    const expertData = services.filter(expert => expert.category === 'expert')
    useEffect(()=>{
        setExperts(expertData)
      },[services])

    return (
      <div>
        <h2 className="text-[#112734] text-[5vw]">
          Practice with <span className="text-[#375B26]">confidence</span>
        </h2>
        <p>
          Connect and study with 500+ expert teachers across yoga therapy,
          anatomy. meditation, and more. The world’s most diverse yoga site.
        </p>
        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            // breakpoints={{
            //     640: {
            //       slidesPerView: 2,
            //       spaceBetween: 20,
            //     },
            //     768: {
            //       slidesPerView: 4,
            //       spaceBetween: 40,
            //     },
            //     1024: {
            //       slidesPerView: 5,
            //       spaceBetween: 50,
            //     },
            //   }}
            // autoplay={{
            //     delay: 2500,
            //     disableOnInteraction: false,
            //   }}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
              {
                  experts.map(expert => {
                      const {img} = expert;
                    //   console.log(expert);
                      return (
                          
                              <SwiperSlide key={expert.id}> 
                                <img src={img} alt="" className='w-5/12' />
                              </SwiperSlide>
                          
                      )
                  })
              }
{/*             
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    );
};

export default Experts;