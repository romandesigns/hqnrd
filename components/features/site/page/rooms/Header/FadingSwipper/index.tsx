"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

export function FadingSwipper() {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      pagination={{
        clickable: true,
      }}
      centeredSlides={true}
      speed={3000}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectFade]}
      className="mySwiper absolute left-0 right-0 top-0 -z-[2] h-full w-full"
    >
      <SwiperSlide className="relative">
        <Image
          src="https://swiperjs.com/demos/images/nature-1.jpg"
          alt="billboard image"
          fill
          className="object-cover"
        />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <Image
          src="https://swiperjs.com/demos/images/nature-2.jpg"
          alt="billboard image"
          fill
          className="object-cover"
        />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <Image
          src="https://swiperjs.com/demos/images/nature-3.jpg"
          alt="billboard image"
          fill
          className="object-cover"
        />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <Image
          src="https://swiperjs.com/demos/images/nature-4.jpg"
          alt="billboard image"
          fill
          className="object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
}
