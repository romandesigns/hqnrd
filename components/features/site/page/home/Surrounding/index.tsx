import ExpandableCardDemo from "@/components/expandable-card-demo-grid";
import { Content, Section } from "@/components/layout";
import React from "react";
import { HeadingSection } from "../../../Headings";
import Image from "next/image";

export function Surrounding() {
  return (
    <Section className="h-15rem" sectionName="surrounding">
      <Content className="flex-row justify-center">
        <HeadingSection
          showBorders={true}
          title="Unveil Our Scenic Spaces"
          description="Click the images to learn more"
        />
      </Content>
      <Content className="grid grid-cols-6 grid-rows-6 gap-2 p-2 lg:grid-cols-5 lg:grid-rows-3 lg:p-4">
        <figure className="relative col-start-1 col-end-4 row-start-1 row-end-7 h-full overflow-hidden rounded-md bg-pink-500 lg:col-span-3 lg:row-span-3">
          <div className="absolute inset-0 z-[1] flex h-full w-full items-end justify-start bg-black/25 p-2 lg:p-4">
            <div className="text-md overflow-hidden rounded-br-md rounded-tl-md bg-muted-foreground/60 p-1 px-5 text-primary-foreground backdrop-blur-md">
              <h3 className="-mb-1 text-lg font-black uppercase lg:text-3xl">
                Rooms
              </h3>
              <p className="lg:text-md text-sm font-bold text-foreground">
                Interior
              </p>
            </div>
          </div>
          <Image
            src="/assets/images/home/header/HQNRD-first-featured-image.webp"
            alt="random image"
            fill
            className="object-cover"
          />
        </figure>
        <figure className="relative col-start-4 col-end-7 row-start-1 row-end-4 aspect-square overflow-hidden rounded-md bg-green-500 lg:col-span-2 lg:row-span-2">
          <div className="absolute inset-0 z-[1] flex h-full w-full items-end justify-start bg-black/25 p-2 lg:p-4">
            <div className="text-md overflow-hidden rounded-br-md rounded-tl-md bg-muted-foreground/60 p-1 px-5 text-primary-foreground backdrop-blur-md">
              <h3 className="-mb-1 text-lg font-black uppercase lg:text-3xl">
                Rooftop
              </h3>
              <p className="lg:text-md text-sm font-bold text-foreground">
                Interior
              </p>
            </div>
          </div>
          <Image
            src="/assets/images/home/header/HQNRD-first-featured-image.webp"
            alt="random image"
            fill
            className="object-cover"
          />
        </figure>
        <figure className="relative col-start-4 col-end-5 row-start-4 row-end-7 aspect-square h-full overflow-hidden rounded-md bg-yellow-500 lg:row-start-3 lg:row-end-4">
          <div className="absolute inset-0 z-[1] flex h-full w-full items-end justify-start bg-black/25 p-2 lg:p-4">
            <div className="text-md overflow-hidden rounded-br-md rounded-tl-md bg-muted-foreground/60 p-1 px-5 text-primary-foreground backdrop-blur-md">
              <h3 className="-mb-1 text-lg font-black uppercase lg:text-3xl">
                Hallways
              </h3>
              <p className="lg:text-md text-sm font-bold text-foreground">
                Interior
              </p>
            </div>
          </div>
          <Image
            src="/assets/images/home/header/HQNRD-first-featured-image.webp"
            alt="random image"
            fill
            className="object-cover"
          />
        </figure>
      </Content>
    </Section>
  );
}
