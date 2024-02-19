"use client";
import React from "react";
import { SwiperComponent } from "@/app/[lang]/ui/common/Swiper";
import ReviewCard from "./ReviewCard";

type TestimonialProps = {
  reviewerName: string;
  description: string;
  rating: string;
  review: { rooms: number; service: number; location: number }[];
};

export default function Testimonial({
  testimonials,
}: {
  testimonials: TestimonialProps[];
}): React.JSX.Element {
  return (
    <li className="w-full flex items-center justify-center">
      <SwiperComponent
        items={testimonials}
        RenderComponent={ReviewCard}
        className="testimonails-swiper"
      />
    </li>
  );
}
