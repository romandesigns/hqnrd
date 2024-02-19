"use client";
import React, { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import useViewportDimensions from "@/utils/hooks/useViewPort";
import { twMerge } from "tailwind-merge";

// Define props for the SwiperComponent
interface SwiperComponentProps<T> {
  items: T[];
  className?: string;
  RenderComponent: (props: T) => ReactElement;
}

export function SwiperComponent<T extends { reviewerName: string }>({
  items,
  className,
  RenderComponent,
}: SwiperComponentProps<T>): ReactElement {
  const { width } = useViewportDimensions();
  return (
    <Swiper
      slidesPerView={width >= 1080 ? 3 : width >= 640 ? 2 : 1}
      spaceBetween={25}
      autoplay={{
        delay: 200000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className={twMerge(`review_carousel flex items-stretch`, className)}
    >
      {items.map((item) => (
        <SwiperSlide key={item.reviewerName} className="py-1 pb-7">
          <RenderComponent {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
