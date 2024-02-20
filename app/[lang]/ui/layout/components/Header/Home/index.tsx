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
import { ButtonToolbar, IconButton } from "rsuite";
import {
  MdGTranslate,
  IoLogoWhatsapp,
  FaLocationDot,
} from "@/app/[lang]/ui/icons";

export const HomeHeader = () => {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperType | null>(
    null
  );
  const [textControlledSwipper, setTextControlledSwipper] =
    useState<SwiperType | null>(null);

  return (
    <div
      className={`w-[100%] h-[100%] rounded-md grid grid-cols-1 grid-rows-[1fr_auto_auto] md:grid-rows-1fr] items-center justify-center overflow-hidden transition-background relative`}
    >
      <div className="z-[3] grid grid-cols-1 grid-rows-[auto_1fr] md:grid-cols-2 md:grid-rows-[1fr] px-2 w-full max-w-6xl mx-auto overflow-hidden rounded-md">
        <div className="md:place-self-center w-full">
          {/* Header Text Description */}
          <GoogleRating className="hidden md:block md:mb-4" />
          <div className="mb-10 md:mb-0 lg:m-0 md:bg-neutral-500/60 md:backdrop-filter md:backdrop-blur-md md:rounded-md z-[3] ">
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
                    className="text-center text-white md:text-left"
                  >
                    <h3 className="font-extrabold text-lg md:font-bold sm:text-2xl md:text-xl md:mb-4 md:bg-neutral-500/60 md:p-4 rounded-tl-md rounded-tr-md">
                      {slide.title}
                    </h3>
                    <p className="hidden md:block md:text-sm text-left leading-7m md:pt-1 md:p-5">
                      {slide.description}
                    </p>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <HeaderButtonsGroup className="hidden relative z-[3] md:flex pr-32" />
          </div>
          <ButtonToolbar className="md:mt-4 hidden md:flex">
            <IconButton
              size="md"
              appearance="primary"
              color="blue"
              active
              icon={<FaLocationDot />}
            />
            <IconButton
              size="md"
              appearance="primary"
              color="green"
              active
              icon={<IoLogoWhatsapp />}
            />
            <IconButton
              size="md"
              appearance="default"
              active
              icon={<MdGTranslate />}
            />
          </ButtonToolbar>
        </div>
        {/* Header Cards Swipper */}
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay, Pagination, Controller]}
          className={`w-[70vw] h-[60vh] md:w-[22rem] aspect-[9/16] shadow-lg self-start relative !z-[3] md:place-content-start`}
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
      </div>

      <GoogleRating className="md:hidden" />
      <HeaderButtonsGroup className="relative z-[3] md:hidden" />

      {/* BackDrop Overlay */}
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
