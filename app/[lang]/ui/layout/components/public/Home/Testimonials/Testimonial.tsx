"use client";
import { SwiperComponent } from "@/app/[lang]/ui/common/Swiper";
import React from "react";
import { ReviewCard } from "../../../Home";
import { TestimonialPropTypes } from "@/types";

export default function Testimonial({
  testimonials,
}: {
  testimonials: TestimonialPropTypes[];
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
