"use client";
import { SwiperComponent } from "@/app/[lang]/ui/common/Swiper";
import { TestimonialPropTypes } from "@/types";
import React from "react";
import { twMerge } from "tailwind-merge";
import { ReviewCard } from "../../../Home";

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
