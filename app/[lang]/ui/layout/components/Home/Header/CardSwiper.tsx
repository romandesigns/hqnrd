"use client";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Controller, EffectCards, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function CardSwiper({
  controlledSwiper,
  textControlledSwipper,
  homeBillboards,
}: {
  controlledSwiper: SwiperType | null;
  textControlledSwipper: SwiperType | null;
  homeBillboards: { src: string; title: string; description: string }[];
}) {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Autoplay, Pagination, Controller]}
      className={`w-[70vw] h-[60vh] md:w-[22rem] aspect-[9/16] shadow-lg place-self-center relative !z-[3] md:place-content-start`}
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
      {homeBillboards.map((item, idx) => (
        <SwiperSlide className="rounded-md overflow-hidden relative" key={idx}>
          <Image
            src={item.src}
            alt="front building airview image"
            fill
            quality={100}
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
