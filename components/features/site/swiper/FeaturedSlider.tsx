"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { CaredReviewProps, Room } from "@/types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { CaredReview } from "../../page/home/Testimonials/CardReview";
import { CardRoom } from "../../page/home/Trending/CardRoom";
import { Locale } from "@/i18n-config";
import TeamCard from "@/components/features/site/TeamCard";

/**
 * Component to display featured items in a swiper slider.
 *
 * @param {Object} props - The properties object.
 * @param {boolean} [props.testimonials=false] - Flag to determine if testimonials should be displayed.
 * @param {boolean} [props.trendingRooms=false] - Flag to determine if trending rooms should be displayed.
 * @param {CaredReviewProps[]} props.itemsArray - Array of items to be displayed in the slider.
 * @param {number} [props.speed=5000] - Speed of the swiper transition in milliseconds.
 * @param {number} [props.delay=50] - Delay between autoplay transitions in milliseconds.
 *
 * @returns {JSX.Element} The FeaturedItems component.
 */

interface BreakPoints {
  sm: { slidesPerView: number; spaceBetween: number };
  md: { slidesPerView: number; spaceBetween: number };
  lg: { slidesPerView: number; spaceBetween: number };
}

const defaultBreakPoints: BreakPoints = {
  sm: { slidesPerView: 1, spaceBetween: 20 },
  md: { slidesPerView: 2, spaceBetween: 20 },
  lg: { slidesPerView: 3, spaceBetween: 20 },
};

export function FeaturedItems<T extends CaredReviewProps | Room>({
  testimonials = false,
  trendingRooms = false,
  teams = false,
  breakPoints,
  itemsArray,
  speed = 5000,
  delay = 50,
  lang,
}: {
  testimonials?: boolean;
  trendingRooms?: boolean;
  teams?: boolean;
  breakPoints?: BreakPoints;
  itemsArray: T[];
  speed?: number;
  delay?: number;
  lang: Locale;
}) {
  const testimonialsComponent = () =>
    itemsArray.map((review, index) => (
      <SwiperSlide key={index} className="pb-10">
        <CaredReview review={review as any} />
      </SwiperSlide>
    ));

  const trendingComponent = () =>
    itemsArray.map((room, index) => (
      <SwiperSlide key={index} className="pb-10">
        <CardRoom lang={lang} room={room as any} />
      </SwiperSlide>
    ));

  const teamsComponent = () =>
    itemsArray.map((review, index) => (
      <SwiperSlide key={index} className="pb-10">
        <TeamCard />
      </SwiperSlide>
    ));

  return (
    <div className="inner">
      <div className="swiper-wrapper-container">
        <Swiper
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView:
                breakPoints?.md?.slidesPerView ||
                defaultBreakPoints.md.slidesPerView,
              spaceBetween:
                breakPoints?.md?.spaceBetween ||
                defaultBreakPoints.md.spaceBetween,
            },
            1024: {
              slidesPerView:
                breakPoints?.lg?.slidesPerView ||
                defaultBreakPoints.lg.slidesPerView,
              spaceBetween:
                breakPoints?.lg?.spaceBetween ||
                defaultBreakPoints.lg.spaceBetween,
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
          {teams && teamsComponent()}
        </Swiper>
      </div>
    </div>
  );
}
