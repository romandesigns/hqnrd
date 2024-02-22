"use client";
import { RoomCard } from "@/app/[lang]/ui/common/RoomCard";
import { SwiperComponent } from "@/app/[lang]/ui/common/Swiper";
import { Section } from "../../../../containers";
import { Heading } from "../../../Home";

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
      <article className="w-full h-full sm:p-2 rounded-md">
        <div className="w-full h-full p-2 rounded-md sm:px-4 relative flex flex-col justify-center items-center">
          <Heading
            className="flex items-center justify-center flex-col"
            textColor="text-primary-500 bg-primary-100/50"
          />
          <div className="w-11/12 md:my-10">
            <SwiperComponent
              items={trendingList}
              RenderComponent={RoomCard}
              className="testimonails-swiper"
            />
          </div>
        </div>
      </article>
    </Section>
  );
}
