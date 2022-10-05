import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./CarouselRoadmap.scss";
// import required modules
import { Navigation } from "swiper";
import { Autoplay } from "swiper";
import { FreeMode } from "swiper";
export default function CarouselRoadmap() {
  return (
    <div className="CarouselRoadmapContainer">
      <div className="CarouselHeading">
        <p className="CarouselDescription">Hành trình phát triển</p>
      </div>
      <Swiper
        effect="slide"
        navigation={false}
        modules={[Navigation, Autoplay, FreeMode]}
        loop={true}
        // autoplay={{ delay: 1000 }}
        autoplay={{ delay: 100 }}
        speed={3500}
        pauseOnMouseEnter={true}
        disableOnInteraction
        freeMode={{ enabled: true, sticky: true }}
        // allowTouchMove={false}
        // allowSlideNext={false}
        className="mySwiper"
        slidesPerView={3}
        spaceBetween={30}
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
}
