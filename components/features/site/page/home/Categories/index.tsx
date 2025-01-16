import { Content, Section } from "@/components/layout";
import React from "react";
import { HeadingSection } from "@/components/features/site/Headings";
import { CategoryItem } from "./CategoryItem";

export function Categories() {
  return (
    <Section sectionName="testimonials">
      <Content className="flex-row justify-center">
        <HeadingSection
          showBorders={true}
          title="Find your perfect stay"
          description="Choose the room that fits your style and book your stay today!"
        />
      </Content>
      <Content className="grid grid-cols-2 grid-cols-3 gap-4">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </Content>
    </Section>
  );
}
