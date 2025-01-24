"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Autoplay } from "swiper/modules";

import Image from "next/image";
import { billboardsImages } from "@/public/assets/mocked_data/rooms_images";

export function FadingSwipper() {
  return (
    <Swiper
      effect={"flip"}
      grabCursor={true}
      pagination={true}
      modules={[EffectFlip, Autoplay]}
      speed={1000}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      className="aspect-square h-4/5 w-4/5"
    >
      {billboardsImages.map((image, index) => (
        <SwiperSlide key={index} className="glass">
          <Image
            src={image}
            alt="billboard image"
            fill
            className="object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
