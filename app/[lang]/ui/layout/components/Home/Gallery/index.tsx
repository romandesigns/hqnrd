"use client";
import React from "react";
import { Tabs } from "rsuite";
import { Section } from "../../../containers";
import { CommonAreas } from "./CommonAreas";
import { RoofTop } from "./RoofTop";
import { RiGalleryFill } from "@/app/[lang]/ui/icons";
import { Heading } from "@/app/[lang]/ui/common";

export function Gallery() {
  return (
    <Section className="my-2 p-2 snap-y flex items-center justify-center w-full py-10 px-2 rounded-md sm:py-20 sm:px-10">
      <article className="w-full h-full sm:p-4 sm:border sm:border-neutral-100/10 rounded-md">
        <div className="w-full mx-auto max-w-7xl text-center flex flex-items justify-center items-center flex-col h-full bg-neutral-100/10 rounded-md p-2">
          <Heading
            highlightText="Areas comunes y entretenimiento"
            headingText="Familiarizate con nuestras instalaciones"
            highlightColor="text-neutral-500 bg-neutral-100/50"
          />
          <Tabs
            defaultActiveKey="1"
            reversed
            appearance="subtle"
            className="w-full home-gallery-tabs md:py-10"
          >
            <Tabs.Tab
              eventKey="1"
              title="Common Areas"
              icon={<RiGalleryFill />}
            >
              <CommonAreas />
            </Tabs.Tab>
            <Tabs.Tab eventKey="2" title="Roof Top" icon={<RiGalleryFill />}>
              <RoofTop />
            </Tabs.Tab>
          </Tabs>
        </div>
      </article>
    </Section>
  );
}
