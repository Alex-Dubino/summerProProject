import "./Swiper.scss";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
export default function Swiperr() {
  return (
    <div className="swiperr">
      <div className="navigation">
        <span>Открытый бассейн</span>
        <span>Кафе и кальянная</span>
        <span>Десткая площадка</span>
      </div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="swiper-slide-content">
            <img src="../../../public/slider1.png" alt="#" />
            <img src="../../../public/slider2.png" alt="#" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content">
            <img src="../../../public/slider3.png" alt="#" />
            <img src="../../../public/slider4.png" alt="#" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content">
            <img src="../../../public/slider5.png" alt="#" />
            <img src="../../../public/slider6.png" alt="#" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
