"use client";
import React from "react";
import { Tabs } from "rsuite";
import { Section } from "../../../containers";
import { CommonAreas } from "./CommonAreas";
import { RoofTop } from "./RoofTop";

export function Gallery() {
  return (
    <Section className="my-2 p-2 snap-y flex items-center justify-center w-full py-10 px-2 rounded-md sm:py-20 sm:px-10">
      <article className="w-full h-full sm:p-4 sm:border sm:border-neutral-100/10 rounded-md">
        <div className="w-full mx-auto max-w-7xl text-center flex flex-items justify-center items-center flex-col h-full bg-neutral-100/10 rounded-md p-2">
          <div className="my-6 md:mb-0 md:col-span-3">
            <p className="mt-4 inline-flex items-center text-xs justify-center font-bold p-1 rounded-full px-2 text-neutral-500 bg-neutral-100/50">
              Areas comunes y entretenimiento
            </p>
            <h3 className="font-black my-2 text-neutral-500 underline text-xl">
              Familiarizate con nuestras instalaciones
            </h3>
          </div>
          <Tabs
            defaultActiveKey="1"
            reversed
            appearance="subtle"
            className="w-full home-gallery-tabs md:py-10"
          >
            <Tabs.Tab eventKey="1" title="Common Areas">
              <CommonAreas />
            </Tabs.Tab>
            <Tabs.Tab eventKey="2" title="Roof Top">
              <RoofTop />
            </Tabs.Tab>
          </Tabs>
        </div>
      </article>
    </Section>
  );
}
