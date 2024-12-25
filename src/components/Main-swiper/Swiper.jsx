import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Swiper.scss';
import { Navigation, Autoplay } from 'swiper/modules';
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1} // Bir vaqtning o'zida 3 slayd ko'rsatiladi
        navigation={{
          prevEl: '.prevleft', // Previous tugmasi
          nextEl: '.prevrigt', // Next tugmasi
        }}
        modules={[Navigation, Autoplay]} // Navigation modulini o'z ichiga oladi
        autoplay={{ delay: 2500 }} // Avtomatik slayd o'zgartirish
        breakpoints={{
          648: {
            slidesPerView: 1, // 320px dan kichik ekranlarda 1 slayd
          },
          668: {
            slidesPerView: 2, // 768px dan kichik ekranlarda 2 slayd
          },
          990: {
            slidesPerView: 2,
          },
          1300: {
           slidesPerView: 3
          }

         
        }}
        className="MainSwiper"
      >
        <button className="prevleft"><SlArrowLeft/> </button>
        <SwiperSlide className="main-swiper">
          <img src="./Main-swiper/popular-1.mU9i1uuG.jpg" alt="Popular 1" />
        </SwiperSlide>
        <SwiperSlide className="main-swiper">
          <img src="./Main-swiper/popular-2.DFAi4vfx.jpg" alt="Popular 2" />
        </SwiperSlide>
        <SwiperSlide className="main-swiper">
          <img src="./Main-swiper/popular-3.sg5jDk_Z.jpg" alt="Popular 3" />
        </SwiperSlide>
        <SwiperSlide className="main-swiper">
          <img src="./Main-swiper/popular-4.BsgCNCIo.jpg" alt="Popular 4" />
        </SwiperSlide>
        <SwiperSlide className="main-swiper">
          <img src="./Main-swiper/popular-5.uIja0UcC.jpg" alt="Popular 5" />
        </SwiperSlide>
        <SwiperSlide className="main-swiper">
          <img src="./Main-swiper/popular-6.IOtI1QLR.jpg" alt="Popular 6" />
        </SwiperSlide>
        <button className="prevrigt"><SlArrowRight/></button>
      </Swiper>
    </>
  );
}
