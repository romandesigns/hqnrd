"use client";
import Image from "next/image";
import React from "react";
import type { Swiper as SwiperType } from "swiper";
import { Controller, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";

export function BackgroundSwiper({
  homeBillboards,
  setControlledSwiper,
}: {
  homeBillboards: { src: string; title: string; description: string }[];
  setControlledSwiper: React.Dispatch<React.SetStateAction<SwiperType | null>>;
}) {
  return (
    <Swiper
      effect={"fade"}
      allowTouchMove={false}
      spaceBetween={0}
      slidesPerView={1}
      speed={1000}
      modules={[EffectFade, Controller]}
      onSwiper={setControlledSwiper}
      className="!absolute h-full w-full top-0 right-0 left-0 bottom-0 -z-[15]"
    >
      {homeBillboards.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <figure className="w-full h-full after:content[*] top-0 left-0 right-0 after:absolute after:backdrop-filter after:backdrop-blur-lg after:w-full after:h-full after:block after:left-0 after:right-0 after:top-0 after:bottom-0 relative">
              <Image
                className="w-full h-full object-cover"
                src={slide.src}
                placeholder="blur"
                fill
                blurDataURL="/assets/home/billboard/hqnrd-air-view-building.jpg"
                alt={slide.title + " billoard image"}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </figure>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
