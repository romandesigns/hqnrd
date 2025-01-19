"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { CaredReview } from "../features/site/page/home/Testimonials/CardReview";
import { SwiperItem } from "./SwiperItem";
import { CaredReviewProps } from "@/types";

export function FeaturedItems({
  testimonials = false,
  itemsArray,
}: {
  testimonials?: boolean;
  itemsArray: CaredReviewProps[];
}) {
  return (
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
      modules={[Autoplay, Pagination, Navigation]}
      className="h-full w-full"
    >
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide> */}
      <SwiperSlide className="swiper-slide flex h-full w-full items-stretch justify-center rounded-md">
        Slide 2
      </SwiperSlide>
      <SwiperSlide className="swiper-slide flex h-full w-full items-stretch justify-center rounded-md">
        Slide 2
      </SwiperSlide>
    </Swiper>
  );
}
