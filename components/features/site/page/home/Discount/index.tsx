import { Content, Section } from "@/components/layout";
import React from "react";
import { CaredReview } from "../../../CardReview";
import { HeadingSection } from "@/components/features/site/Headings";
import { CardDiscount } from "../../../CardDiscount";

export function Discount() {
  return (
    <Section sectionName="discounts">
      <Content className="my-4 flex-row justify-center">
        <HeadingSection
          showBorders
          title="Exclusive Discounts"
          description="The longer you stay, the more you save!"
        />
      </Content>
      <Content className="grid grid-cols-2 grid-rows-[auto] gap-4">
        <CardDiscount highlight="Discount" percentage={5} />
        <CardDiscount highlight="Discount" percentage={8} />
      </Content>
    </Section>
  );
}
