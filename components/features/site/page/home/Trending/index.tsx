import { HeadingSection } from "@/components/features/site/Headings";
import { Content, Section } from "@/components/layout";
import { FeaturedItems } from "@/components/swiper/FeaturedSlider";

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
      <Content className="px-2">
        <FeaturedItems
          // @ts-ignore
          itemsArray={[1, 2, 3, 4]}
          trendingRooms
          delay={0}
          speed={12000}
        />
      </Content>
    </Section>
  );
}
