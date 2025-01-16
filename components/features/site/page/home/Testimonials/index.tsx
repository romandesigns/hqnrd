import { Content, Section } from "@/components/layout";
import React from "react";
import { CaredReview } from "../../../CardReview";
import { HeadingSection } from "@/components/features/site/Headings";

export function Testimonials() {
  return (
    <Section sectionName="testimonials">
      <Content className="flex-row justify-center">
        <HeadingSection
          showBorders
          title="Testimonials"
          description="Don't hear it from us, hear it from our guests!"
        />
      </Content>
      <Content className="grid grid-cols-3 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <CaredReview />
        <CaredReview />
        <CaredReview />
      </Content>
    </Section>
  );
}
