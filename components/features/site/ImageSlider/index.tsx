"use client";
// Import Swiper React components
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function ImageSlider({
  itemsArray,
  speed = 3000,
  direction = "vertical",
  delay = 3000,
  spaceBetween = 10,
  showBlurredOverlay,
}: {
  itemsArray: string[];
  speed?: number;
  direction?: "vertical" | "horizontal";
  delay?: number;
  spaceBetween?: number;
  showBlurredOverlay?: boolean;
}) {
  return (
    <div className="inner">
      <div className="swiper-wrapper-container">
        <Swiper
          loop={true}
          speed={speed}
          direction={direction}
          spaceBetween={spaceBetween}
          autoplay={{
            delay: delay,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="h-full w-full"
        >
          {itemsArray.map((image, index) => (
            <SwiperSlide
              key={index}
              className="flex h-full w-full items-center justify-center overflow-hidden"
            >
              {showBlurredOverlay && (
                <div className="absolute inset-0 z-[2] rounded-md backdrop-blur-sm" />
              )}
              <Image src={image} layout="fill" alt="billboard image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
