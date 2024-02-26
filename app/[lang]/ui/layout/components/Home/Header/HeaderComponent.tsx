"use client";
import { useState } from "react";
// Import only used Swiper styles to reduce bundle size
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";

import type { Swiper as SwiperType } from "swiper";
import {
  BackgroundSwiper,
  CardSwiper,
  GoogleRating,
  HeaderButtonsGroup,
  TextHeadingSwiper,
  UtilitiesIcons,
} from "./"; // Assuming index.js is properly set in your components folder
import homeBillboards from "@/public/assets/data/homeBillboard.json";

export const HomeHeader = () => {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperType | null>(
    null
  );
  const [textControlledSwipper, setTextControlledSwipper] =
    useState<SwiperType | null>(null);

  return (
    <div className="w-full h-full rounded-md grid grid-cols-1 grid-rows-[1fr_auto_auto] md:grid-rows-1fr items-center justify-center overflow-hidden transition-background relative">
      <div className="z-3 h-full grid grid-cols-1 grid-rows-[15%_1fr] md:grid-cols-2 md:grid-rows-1 px-2 w-full max-w-6xl mx-auto overflow-hidden rounded-md md:z-[3]">
        <div className="md:place-self-center w-full flex justify-center items-center md:block z-[2]">
          <GoogleRating className="hidden md:block md:mb-4" />
          <div className="md:mb-0 lg:m-0 md:bg-neutral-500/60 md:backdrop-filter md:backdrop-blur-md md:rounded-md">
            <TextHeadingSwiper
              homeBillboards={homeBillboards.billboard}
              setTextControlledSwipper={setTextControlledSwipper}
            />
            <HeaderButtonsGroup className="hidden relative z-[3] md:flex pr-32" />
          </div>
          <UtilitiesIcons />
        </div>

        <CardSwiper
          controlledSwiper={controlledSwiper}
          textControlledSwipper={textControlledSwipper}
          homeBillboards={homeBillboards.billboard}
        />
      </div>

      <GoogleRating className="md:hidden" />
      <HeaderButtonsGroup className="relative z-[3] md:hidden" />

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/10 backdrop-filter backdrop-blur-md w-full h-full" />
      <BackgroundSwiper
        homeBillboards={homeBillboards.billboard}
        setControlledSwiper={setControlledSwiper}
      />
    </div>
  );
};
