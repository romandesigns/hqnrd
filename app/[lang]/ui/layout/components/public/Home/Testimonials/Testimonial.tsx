"use client";
import { SwiperComponent } from "@/app/[lang]/ui/common/Swiper";
import React from "react";
import { ReviewCard } from "../../../Home";
import { TestimonialPropTypes } from "@/types";
import { twMerge } from "tailwind-merge";

export default function Testimonial({
  testimonials,
  className = "",
}: {
  testimonials: TestimonialPropTypes[];
  className?: string;
}): React.JSX.Element {
  return (
    <SwiperComponent
      items={testimonials}
      RenderComponent={ReviewCard}
      className={twMerge(`testimonails-swiper ${className}`)}
    />
  );
}
