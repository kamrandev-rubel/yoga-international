import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

const Stories = () => {
    return (
      <div className='container mx-auto'>
        <h2 className="text-[#112734] text-[5vw]">Stories of my <span className='text-[#375B26]'>Life</span></h2>
        <p className="text-lg text-[#11273499]">
          From incorporating mindfulness in the classroom to having virtual yoga
          practice with friends around the world, tune in to see how i uses Alo
          Moves.
        </p>
        <div>
          <Swiper
            // slidesPerView={3}
            spaceBetween={10}
            loop={true}
            breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 60,
                },
              }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide><iframe className='w-[340px] rounded-xl mx-auto' src="https://www.youtube-nocookie.com/embed/yDcs7HEwOgA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></SwiperSlide>
            <SwiperSlide><iframe className='w-[360px] rounded-xl' src="https://www.youtube-nocookie.com/embed/zlVN9IXW_kM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></SwiperSlide>
            <SwiperSlide><iframe className='w-[360px] rounded-xl' src="https://www.youtube-nocookie.com/embed/aIIEI33EUqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></SwiperSlide>
            <SwiperSlide><iframe className='w-[360px] rounded-xl' src="https://www.youtube-nocookie.com/embed/2eA2Koq6pTI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></SwiperSlide>
            <SwiperSlide><iframe className='w-[360px] rounded-xl' src="https://www.youtube-nocookie.com/embed/HnRqjjpJVA8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></SwiperSlide>
            <SwiperSlide><iframe className='w-[360px] rounded-xl' src="https://www.youtube-nocookie.com/embed/hpRat3cqX78" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
};

export default Stories;