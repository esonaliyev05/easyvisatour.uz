import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Swiper.scss';
import { Navigation , Autoplay } from 'swiper/modules';
// import required modules
// import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
          spaceBetween={50} // Slaydlar orasidagi bo'shliq
          slidesPerView={3} // Bir vaqtning o'zida ko'rsatiladigan slaydlar soni
          navigation={true} modules={[Navigation]} // Navigatsiya tugmalari
        //   pagination={{ clickable: true }} // Pagination
          autoplay={{ delay: 2500 }} // Avtomatik o'zgartirish
        className="MainSwiper"
      >
        {/* <h1>Popular</h1> */}

        <SwiperSlide className='main-swiper'><img src="./Main-swiper/popular-1.mU9i1uuG.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='main-swiper'><img src="./Main-swiper/popular-2.DFAi4vfx.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='main-swiper'><img src="./Main-swiper/popular-3.sg5jDk_Z.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='main-swiper'><img src="./Main-swiper/popular-4.BsgCNCIo.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='main-swiper'><img src="./Main-swiper/popular-5.uIja0UcC.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='main-swiper'><img src="./Main-swiper/popular-6.IOtI1QLR.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='main-swiper'><img src="./Main-swiper/popular-7.D5qWhdzg.jpg" alt="" /></SwiperSlide>

     
    
      </Swiper>
    </>
  );
}
