"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { CaredReview } from "@/components/features/site/page/home/Testimonials/CardReview";

const reviews = [
  {
    id: 1,
    avatar: "/assets/images/home/header/HQNRD-first-featured-image.webp",
    avatarAlt: "User Roman Feliz avatar - Hotel Quinto Nivel RD guest review",
    author: "Roman Feliz",
    comment:
      "The hotel is located in the heart of the city, close to the main. I was pleasantly.",
    rating: 4.7,
    servicesRating: {
      rooms: 5,
      location: 5,
      service: 5,
    },
  },
  {
    id: 2,
    avatar: "/assets/images/home/header/HQNRD-first-featured-image.webp",
    avatarAlt: "User Roman Feliz avatar - Hotel Quinto Nivel RD guest review",
    author: "Roman Feliz",
    comment:
      "The hotel is located in the heart of the city, close to the main. I was pleasantly.",
    rating: 4.7,
    servicesRating: {
      rooms: 5,
      location: 5,
      service: 5,
    },
  },
  {
    id: 3,
    avatar: "/assets/images/home/header/HQNRD-first-featured-image.webp",
    avatarAlt: "User Roman Feliz avatar - Hotel Quinto Nivel RD guest review",
    author: "Roman Feliz",
    comment:
      "The hotel is located in the heart of the city, close to the main. I was pleasantly.",
    rating: 4.7,
    servicesRating: {
      rooms: 5,
      location: 5,
      service: 5,
    },
  },
  {
    id: 4,
    avatar: "/assets/images/home/header/HQNRD-first-featured-image.webp",
    avatarAlt: "User Roman Feliz avatar - Hotel Quinto Nivel RD guest review",
    author: "Roman Feliz",
    comment:
      "The hotel is located in the heart of the city, close to the main. I was pleasantly.",
    rating: 4.7,
    servicesRating: {
      rooms: 5,
      location: 5,
      service: 5,
    },
  },
];

export default function App() {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-center border border-red-500 p-4">
      <div className="mx-auto flex h-screen w-screen items-center justify-center p-2">
        <div className="max-w-7xl border border-red-500">
          <Swiper
            width={300}
            slidesPerView={3}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            navigation={true}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            freeMode={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="h-full w-full"
          >
            <SwiperSlide>Roman</SwiperSlide>
            <SwiperSlide>Roman</SwiperSlide>
            <SwiperSlide>Roman</SwiperSlide>
            {/* <SwiperSlide className="w-full">
              <CaredReview review={reviews[0]} />
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <CaredReview review={reviews[0]} />
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <CaredReview review={reviews[0]} />
            </SwiperSlide> */}

            {/* <SwiperSlide className="grid place-items-center bg-pink-500">
            Slide 1
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center bg-yellow-500">
            Slide 2
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center bg-green-500">
            Slide 3
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center bg-red-500">
            Slide 4
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center bg-blue-500">
            Slide 5
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center bg-orange-500">
            Slide 6
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center bg-zinc-500">
            Slide 7
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center bg-purple-500">
            Slide 8
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center bg-violet-500">
            Slide 9
          </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
