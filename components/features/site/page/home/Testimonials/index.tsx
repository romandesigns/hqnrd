import { Content, Section } from "@/components/layout";
import React from "react";
import { CaredReview } from "./CardReview";
import { HeadingSection } from "@/components/features/site/Headings";
import Marquee from "@/components/ui/marquee";
import { FeaturedItems } from "@/components/swiper/FeaturedSlider";
import { SwiperSlide } from "swiper/react";
import { SwiperItem } from "@/components/swiper/SwiperItem";

const reviews = [
  {
    id: 1,
    avatar: "/assets/images/home/header/HQNRD-first-featured-image.webp",
    avatarAlt: "User Roman Feliz avatar - Hotel Quinto Nivel RD guest review",
    author: "Roman Feliz",
    comment:
      "The hotel is located in the heart of the city, close to the main. I was pleasantly.",
    rating: 4.7,
    servicesRating: {
      rooms: 5,
      location: 5,
      service: 5,
    },
  },
  {
    id: 2,
    avatar: "/assets/images/home/header/HQNRD-first-featured-image.webp",
    avatarAlt: "User Roman Feliz avatar - Hotel Quinto Nivel RD guest review",
    author: "Roman Feliz",
    comment:
      "The hotel is located in the heart of the city, close to the main. I was pleasantly.",
    rating: 4.7,
    servicesRating: {
      rooms: 5,
      location: 5,
      service: 5,
    },
  },
  {
    id: 3,
    avatar: "/assets/images/home/header/HQNRD-first-featured-image.webp",
    avatarAlt: "User Roman Feliz avatar - Hotel Quinto Nivel RD guest review",
    author: "Roman Feliz",
    comment:
      "The hotel is located in the heart of the city, close to the main. I was pleasantly.",
    rating: 4.7,
    servicesRating: {
      rooms: 5,
      location: 5,
      service: 5,
    },
  },
  {
    id: 4,
    avatar: "/assets/images/home/header/HQNRD-first-featured-image.webp",
    avatarAlt: "User Roman Feliz avatar - Hotel Quinto Nivel RD guest review",
    author: "Roman Feliz",
    comment:
      "The hotel is located in the heart of the city, close to the main. I was pleasantly.",
    rating: 4.7,
    servicesRating: {
      rooms: 5,
      location: 5,
      service: 5,
    },
  },
];

export function Testimonials() {
  return (
    <Section sectionName="testimonials">
      <Content className="flex-row justify-center">
        <HeadingSection
          showBorders
          title="Testimonials"
          description="Don't hear it from us, hear it from our guests!"
        />
      </Content>
      <Content className="overflow-hidden border border-red-400 px-2">
        {/* <FeaturedItems testimonials itemsArray={reviews} /> */}
      </Content>
    </Section>
  );
}
