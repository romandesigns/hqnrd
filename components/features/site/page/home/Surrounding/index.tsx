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
      <Content className="grid grid-cols-5 grid-rows-3 gap-2 p-8">
        <figure className="relative col-span-3 row-span-3 h-full overflow-hidden rounded-md bg-pink-500">
          <div className="absolute inset-0 z-[1] flex h-full w-full items-end justify-start bg-black/25 p-8">
            <div className="text-md bg-muted-foreground/60 px-4 text-primary-foreground backdrop-blur-md">
              <h3 className="text-3xl font-black uppercase">Rooms</h3>
              <p className="text-md font-bold text-foreground">Interior</p>
            </div>
          </div>
          <Image
            src="/assets/images/home/header/HQNRD-first-featured-image.webp"
            alt="random image"
            fill
          />
        </figure>
        <figure className="relative col-span-2 row-span-2 aspect-square overflow-hidden rounded-md bg-green-500">
          <div className="absolute inset-0 z-[1] flex h-full w-full items-end justify-start bg-black/25 p-8">
            <div className="text-md bg-muted-foreground/60 px-4 text-primary-foreground backdrop-blur-md">
              <h3 className="text-3xl font-black uppercase">Entertainment</h3>
              <p className="text-md font-bold text-foreground">Interior</p>
            </div>
          </div>
          <Image
            src="/assets/images/home/header/HQNRD-first-featured-image.webp"
            alt="random image"
            fill
          />
        </figure>
        <figure className="relative aspect-square h-full overflow-hidden rounded-md bg-yellow-500">
          <div className="absolute inset-0 z-[1] flex h-full w-full items-end justify-start bg-black/25 p-8">
            <div className="text-md bg-muted-foreground/60 px-4 text-primary-foreground backdrop-blur-md">
              <h3 className="text-2xl font-black uppercase">Hallways</h3>
              <p className="text-md font-bold text-foreground">Interior</p>
            </div>
          </div>
          <Image
            src="/assets/images/home/header/HQNRD-first-featured-image.webp"
            alt="random image"
            fill
          />
        </figure>
      </Content>
    </Section>
  );
}
