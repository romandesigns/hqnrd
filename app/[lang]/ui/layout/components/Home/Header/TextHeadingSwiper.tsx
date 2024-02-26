"use client";
import React from "react";
import { Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

export function TextHeadingSwiper({
  setTextControlledSwipper,
  homeBillboards,
}: {
  setTextControlledSwipper: React.Dispatch<
    React.SetStateAction<SwiperType | null>
  >;
  homeBillboards: { src: string; title: string; description: string }[];
}) {
  return (
    <Swiper
      modules={[Controller]}
      allowTouchMove={false}
      spaceBetween={0}
      slidesPerView={1}
      speed={2000}
      onSwiper={setTextControlledSwipper}
      className="h-auto w-auto"
    >
      {homeBillboards.map((slide, index) => {
        return (
          <SwiperSlide
            key={index}
            className="text-center text-white md:text-left"
          >
            <h3 className="font-semibold text-md md:font-bold sm:text-2xl md:text-xl md:mb-4 md:bg-neutral-500/60 md:p-4 rounded-tl-md rounded-tr-md">
              {slide.title}
            </h3>
            <p className="hidden md:block md:text-sm text-left leading-7m md:pt-1 md:p-5">
              {slide.description}
            </p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
