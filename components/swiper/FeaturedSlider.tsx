"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { CaredReviewProps } from "@/types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { CaredReview } from "../features/site/page/home/Testimonials/CardReview";
import { CardRoom } from "../features/site/page/home/Trending/CardRoom";

export function FeaturedItems({
  testimonials = false,
  trendingRooms = false,
  itemsArray,
  speed = 5000,
  delay = 50,
}: {
  testimonials?: boolean;
  trendingRooms?: boolean;
  itemsArray: CaredReviewProps[];
  speed?: number;
  delay?: number;
}) {
  const testimonialsComponent = () =>
    itemsArray.map((review, index) => (
      <SwiperSlide key={index} className="pb-10">
        <CaredReview review={review} />
      </SwiperSlide>
    ));

  const trendingComponent = () =>
    itemsArray.map((review, index) => (
      <SwiperSlide key={index} className="pb-10">
        <CardRoom />
      </SwiperSlide>
    ));
  return (
    <div className="inner">
      <div className="swiper-wrapper-container">
        <Swiper
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          speed={speed}
          autoplay={{
            delay: delay,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-auto"
        >
          {testimonials && testimonialsComponent()}
          {trendingRooms && trendingComponent()}
        </Swiper>
      </div>
    </div>
  );
}
