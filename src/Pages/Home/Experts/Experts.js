import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper";
import useServiceData from '../../../Hooks/useServiceData';

const Experts = () => {
    const [services, setServices]= useServiceData();
    const [experts, setExperts] = useState([]);
    const expertData = services.filter(expert => expert.category === 'expert')
    useEffect(()=>{
        setExperts(expertData)
      },[services])

    return (
      <div className='my-16'>
        <h2 className="text-[#112734] text-[5vw]">
          Practice with <span className="text-[#375B26]">confidence</span>
        </h2>
        <p className=' mb-16'>
          Connect and study with 500+ expert teachers across yoga therapy,
          anatomy. meditation, and more. The world’s most diverse yoga site.
        </p>
        <div>
          <Swiper
            // slidesPerView={1}
            spaceBetween={0}
            loop={true}
            breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                //   spaceBetween: 50,
                },
              }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
          >
              {
                  experts.map(expert => {
                      const {img} = expert;
                      return (
                          
                              <SwiperSlide key={expert.id}> 
                                <img src={img} alt="" className='w-[237px] h-[237px] rounded-full mx-auto' />
                              </SwiperSlide>
                          
                      )
                  })
              }
          </Swiper>
        </div>
      </div>
    );
};

export default Experts;