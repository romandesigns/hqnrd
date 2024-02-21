"use client";
import { RoomCard } from "@/app/[lang]/ui/common/RoomCard";
import React from "react";
import { Heading } from "../../../Home";
import { SwiperComponent } from "@/app/[lang]/ui/common/Swiper";

export default function Trendings() {
  const trendingList = [{ a: 1 }, { b: 1 }, { c: 1 }, { d: 1 }, { e: 1 }];
  return (
    <section
      className="w-full relative rounded-md my-2 mb-8 bg-secondary-50
        after:content-['']
        after:absolute
        after:w-full
        after:h-full
        after:-top-2
        after:-z-[1]
       after:bg-primary-200
        after:rounded-md
        after:-rotate-1
        after:block
        before:content-['']
        before:absolute
        before:w-full
        before:h-full
        before:-top-2
        before:-z-[1]
       before:bg-secondary-200
        before:rounded-md
        before:rotate-1
        before:-skew-y-3
        before:block
        "
    >
      <article className="mx-auto w-full max-w-7xl flex items-center justify-center flex-col py-20 ">
        <Heading className="flex items-center justify-center flex-col" />
        <div className="w-11/12">
          <SwiperComponent
            items={trendingList}
            RenderComponent={RoomCard}
            className="testimonails-swiper"
          />
        </div>
      </article>
    </section>
  );
}
