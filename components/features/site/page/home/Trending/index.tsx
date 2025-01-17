import { Content, Section } from "@/components/layout";
import React from "react";
import { CardRoom } from "./CardRoom";
import { HeadingSection } from "@/components/features/site/Headings";

export function Trending() {
  return (
    <Section sectionName="trending">
      <Content className="flex-row justify-center">
        <HeadingSection
          showBorders
          title="Trending"
          description="Explore the most trending hotels today"
        />
      </Content>
      <Content className="grid grid-cols-3 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <CardRoom />
        <CardRoom />
        <CardRoom />
      </Content>
    </Section>
  );
}
