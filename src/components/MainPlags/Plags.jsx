import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Plags.scss";
import { Navigation } from "swiper/modules";

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef(null);
  const thumbnails = [
    "/Plags-swiper/work-slide1.BeuZ4KJm.jpg",
    "./Plags-swiper/work-slide2.BJDQW2uM.jpg",
    "./Plags-swiper/work-slide3.BSf3vuZz.jpg",
    "./Plags-swiper/work-slide4.BBrd_6dI.jpg",
    "./Plags-swiper/work-slide5.k_KIf_jV.jpg",
    "./Plags-swiper/work-slide6.CPdJobVy.jpg",
  ];

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    if (mainSwiperRef.current) {
      mainSwiperRef.current.slideTo(index);
    }
  };

  return (
    <>

    <div className="Plags-container">
         
         <div className="Plags-text" data-aos="fade-right">
          <h1 >Travels</h1>
          <hr />
         </div>
      
   
    <div className="corusel" data-aos="zoom-in">
      
 
      <div className="corusel-left">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
          className="main-swiper"
        >
          {thumbnails.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Slide ${index + 1}`} className="current-image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Section */}
      <div className="corusel-right">
        <div className="miniature-container">
          {thumbnails.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${activeIndex === index ? "active-thumbnail" : ""}`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
