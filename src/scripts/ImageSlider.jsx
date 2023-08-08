import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

// import './styles.css';

export default function ImageSlider(){
    return(
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>fuck off</SwiperSlide>
        <SwiperSlide>where is the second slide</SwiperSlide>
      </Swiper>
    )
}