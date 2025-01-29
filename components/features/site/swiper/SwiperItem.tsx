"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { SwiperSlide } from "swiper/react";

export function SwiperItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <SwiperSlide className={cn(`SwiperItem`, className)}>
      {children}
    </SwiperSlide>
  );
}
