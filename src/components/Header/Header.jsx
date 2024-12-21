import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Header.scss';

// import required modules
import { Pagination , Autoplay} from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper autoplay={{ delay: 1000, disableOnInteraction: false }}  pagination={{ clickable: true }} loop={true} modules={[Pagination]} className="Header-slider">

      <SwiperSlide className='header-slider-chiled'><img src="./Header-img/bg-1.N3jECmMN.png" alt="" />  <div className="container"> 
            <div className="text">
                <h3>The best tourist routes at affordable prices.</h3>
            </div>
      </div> </SwiperSlide>
      <SwiperSlide className='header-slider-chiled'><img src="./Header-img/bg-2.B_ZQ9TY_.png" alt="" /> <div className="container">
           <div className="text">
            <h3>Reliable visa processing for all countries.</h3>
           </div>
        </div> </SwiperSlide>
      <SwiperSlide className='header-slider-chiled'><img src="./Header-img/bg-3.R75aPUI8.webp" alt="" /> <div className="container">
           <div className="text">
            <h3>Your comfort in travel is our concern.</h3>
           </div>
        </div> </SwiperSlide>


      </Swiper>
    </>
  );
}
