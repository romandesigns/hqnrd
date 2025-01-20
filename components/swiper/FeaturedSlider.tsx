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

export function FeaturedItems({
  testimonials = false,
  itemsArray,
}: {
  testimonials?: boolean;
  itemsArray: CaredReviewProps[];
}) {
  return (
    <div className="inner">
      <div className="swiper-wrapper-container">
        <Swiper
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          speed={5000}
          autoplay={{
            delay: 50,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-auto"
        >
          {itemsArray.map((review, index) => (
            <SwiperSlide key={index} className="pb-10">
              <CaredReview review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
