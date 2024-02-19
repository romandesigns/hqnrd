"use client";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import homeBillboards from "@/public/assets/data/homeBillboard.json";
import { GoogleRating } from "./GoogleRating";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import {
  Autoplay,
  Controller,
  EffectCards,
  EffectFade,
  Pagination,
} from "swiper/modules";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import { HeaderButtonsGroup } from "./ButtonsGroup";

export const HomeHeader = () => {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperType | null>(
    null
  );
  const [textControlledSwipper, setTextControlledSwipper] =
    useState<SwiperType | null>(null);

  return (
    <div
      className={`w-[100%] h-[100%] rounded-md grid grid-cols-1 grid-rows-[auto_1fr_auto_auto] items-center justify-center overflow-hidden transition-background relative`}
    >
      <div className="mt-6 lg:m-0 lg:place-self-end w-full lg:bg-charcoal/60 lg:backdrop-filter lg:backdrop-blur-md lg:rounded-t-md z-[3]">
        <Swiper
          modules={[Controller]}
          allowTouchMove={false}
          spaceBetween={0}
          slidesPerView={1}
          speed={2000}
          onSwiper={setTextControlledSwipper}
          className="h-auto w-auto"
        >
          {homeBillboards.billboard.map((slide, index) => {
            return (
              <SwiperSlide
                key={index}
                className="text-center lg:p-0 text-white lg:text-left lg:px-7"
              >
                <h3 className="font-semibold text-sm lg:font-extrabold lg:text-2xl">
                  {slide.title}
                </h3>
                <p className="hidden lg:block lg:text-sm leading-7m pb-1">
                  {slide.description}
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay, Pagination, Controller]}
        className={`w-[70vw] h-[60vh] aspect-[9/16] shadow-lg self-center relative !z-[3]`}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
          waitForTransition: true,
        }}
        //@ts-ignore
        controller={{ control: [controlledSwiper, textControlledSwipper] }}
      >
        {homeBillboards.billboard.map((item, idx) => (
          <SwiperSlide className="rounded-md overflow-hidden" key={idx}>
            <Image
              src={item.src}
              alt="front building airview image"
              fill
              quality={100}
              style={{ objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <GoogleRating />
      <HeaderButtonsGroup className="relative z-[3]" />

      {/* <HeaderButtonsGroup /> */}
      <div className=" w-full h-full absolute top-0 bottom-0 left-0 right-0 bg-black/10 z-[2]" />
      <div className="backdrop-filter backdrop-blur-md z-[2] w-full h-full absolute top-0 bottom-0 left-0 right-0" />

      {/* BackDrop Image Component  */}
      <Swiper
        effect={"fade"}
        allowTouchMove={false}
        spaceBetween={0}
        slidesPerView={1}
        speed={1000}
        modules={[EffectFade, Controller]}
        onSwiper={setControlledSwiper}
        className="!absolute h-full w-full top-0 right-0 left-0 bottom-0"
      >
        {homeBillboards.billboard.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <figure className="w-full h-full after:content[*] top-0 left-0 right-0 after:absolute after:backdrop-filter after:backdrop-blur-lg after:w-full after:h-full after:block after:left-0 after:right-0 after:top-0 after:bottom-0 ">
                <Image
                  className="w-full h-full object-cover"
                  src={slide.src}
                  placeholder="blur"
                  fill={true}
                  blurDataURL="/assets/home/billboard/hqnrd-air-view-building.jpg"
                  alt={slide.title + " billoard image"}
                />
              </figure>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
