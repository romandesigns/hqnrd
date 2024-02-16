"use client";
import React, { useState } from "react";
import { IconButton } from "rsuite";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import homeBillboards from "@/public/assets/data/homeBillboard.json";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import {
  EffectCards,
  Autoplay,
  Pagination,
  EffectFade,
  Controller,
} from "swiper/modules";
import Image from "next/image";
import { RiDoorClosedLine } from "../../../../icons";
import type { Swiper as SwiperType } from "swiper";

export const HomeHeader = () => {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperType | null>(
    null
  );
  const [bgImage, setBgImage] = useState(homeBillboards.billboard[0].src);

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background 0.5s ease-in-out",
      }}
      className={`max-w-[100%] h-[100%] rounded-md grid grid-cols-1 grid-rows-[auto_1fr_auto] items-center justify-center overflow-hidden transition-background ease-in-out delay-150 relative`}
    >
      <div className="relative z-[2] text-center pt-8 flex px-8">
        <Swiper
          effect={"fade"}
          modules={[EffectFade, Controller]}
          onSwiper={setControlledSwiper}
        >
          {homeBillboards.billboard.map((item, idx) => (
            <SwiperSlide
              className="rounded-sm border border-white bg-white/30"
              key={idx}
            >
              {controlledSwiper?.activeIndex === idx && (
                <h3 className="text-sm font-semibold  backdrop-filter text-black backdrop-blur-md rounded-sm py-2 px-4">
                  {item.mobile.title}
                </h3>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay, Pagination, Controller]}
        className={`w-[70vw] h-[60vh] aspect-[9/16] shadow-lg self-center`}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
          waitForTransition: true,
        }}
        controller={{ control: controlledSwiper }}
        onSlideChange={(swiper) =>
          setBgImage(homeBillboards.billboard[swiper.activeIndex].src)
        }
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

      <div className="p-4 pt-0 w-full">
        <div className="grid grid-cols-2 grid-rows-1 gap-2 py-1">
          <IconButton
            appearance="primary"
            color="blue"
            className="relative z-[2] uppercase text-xs font-semibold"
            active
            icon={<RiDoorClosedLine className="rs-icon" />}
            size="lg"
          >
            Sign In
          </IconButton>
          <IconButton
            appearance="default"
            className="relative z-[2] rs-btn-dark uppercase text-xs font-semibold"
            active
            icon={<RiDoorClosedLine className="rs-icon" />}
            size="lg"
          >
            Rooms
          </IconButton>
        </div>
      </div>

      {/* <div className=" w-full h-full absolute top-0 bottom-0 left-0 right-0 z-[0] bg-radial-gradient" /> */}
      <div className="backdrop-filter backdrop-blur-md w-full h-full absolute top-0 bottom-0 left-0 right-0" />
    </div>
  );
};
