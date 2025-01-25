import { HeadingSection } from "@/components/features/site/Headings";
import { Content, Section } from "@/components/layout";
import { FeaturedItems } from "@/components/swiper/FeaturedSlider";
import { reviews as testimonialsReviews } from "./reviews";

export function Testimonials() {
  return (
    <Section>
      <Content className="flex-row justify-center">
        <HeadingSection
          showBorders
          title="Testimonials"
          description="Don't hear it from us, hear it from our guests!"
        />
      </Content>
      <Content className="px-2">
        <FeaturedItems
          itemsArray={testimonialsReviews}
          testimonials
          speed={13000}
        />
      </Content>
    </Section>
  );
}
