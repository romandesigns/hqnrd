"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { CaredReview } from "./CardReview";

export function SwipperJsx() {
  return (
    <div className="inner">
      <div className="swiper-wrapper-container">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="h-auto w-full min-w-0"
        >
          <SwiperSlide className="h-auto bg-pink-500">
            <CaredReview
              review={{
                id: 4,
                avatar:
                  "/assets/images/home/header/HQNRD-first-featured-image.webp",
                avatarAlt:
                  "User Roman Feliz avatar - Hotel Quinto Nivel RD guest review",
                author: "Roman Feliz",
                comment:
                  "The hotel is located in the heart of the city, close to the main. I was pleasantly.",
                rating: 4.7,
                servicesRating: {
                  rooms: 5,
                  location: 5,
                  service: 5,
                },
              }}
            />
          </SwiperSlide>
          <SwiperSlide className="h-auto bg-pink-500">
            <CaredReview
              review={{
                id: 4,
                avatar:
                  "/assets/images/home/header/HQNRD-first-featured-image.webp",
                avatarAlt:
                  "User Roman Feliz avatar - Hotel Quinto Nivel RD guest review",
                author: "Roman Feliz",
                comment:
                  "The hotel is located in the heart of the city, close to the main. I was pleasantly.",
                rating: 4.7,
                servicesRating: {
                  rooms: 5,
                  location: 5,
                  service: 5,
                },
              }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
