"use client";
import useViewportDimensions from "@/utils/hooks/useViewPort";
import { ReactElement } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from "tailwind-merge";

type TrendingListType = Array<
  { a: number } | { b: number } | { c: number } | { d: number } | { e: number }
>;
// Define props for the SwiperComponent
interface SwiperComponentProps<T> {
  items: T[] | TrendingListType;
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
      slidesPerView={width >= 1080 ? 3 : width >= 740 ? 2 : 1}
      spaceBetween={25}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className={twMerge(`review_carousel flex items-stretch`, className)}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} className="py-1 pb-7">
          <RenderComponent {...(item as T)} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
