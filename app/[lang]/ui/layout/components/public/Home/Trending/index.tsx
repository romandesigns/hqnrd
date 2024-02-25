"use client";
import { RoomCard } from "@/app/[lang]/ui/common/RoomCard";
import { SwiperComponent } from "@/app/[lang]/ui/common/Swiper";
import { Section } from "../../../../containers";
import { Heading } from "../../../../../common";

type TrendingListType = Array<
  { a: number } | { b: number } | { c: number } | { d: number } | { e: number }
>;
export default function Trendings() {
  const trendingList: TrendingListType = [
    { a: 1 },
    { b: 1 },
    { c: 1 },
    { d: 1 },
    { e: 1 },
  ];
  return (
    <Section className="w-full relative rounded-md my-2 bg-primary-100/30">
      <article className="w-full h-full rounded-md sm:p-4 sm:border sm:border-primary-100/40">
        <div className="p-2 sm:p-0 bg-primary-100/40 rounded-md sm:px-4 relative flex flex-col justify-center items-center">
          <Heading
            className="flex items-center justify-center flex-col"
            highlightColor="text-primary-500 bg-primary-100/50"
            highlightText="Trending Now!"
            headingText="Discover Our Most Popular Rooms!"
          />
          <div className="w-full md:my-10 pl-0 md:pr-3">
            <SwiperComponent
              items={trendingList}
              RenderComponent={RoomCard}
              className="testimonails-swiper !pl-0 md:!pl-3"
            />
          </div>
        </div>
      </article>
    </Section>
  );
}
