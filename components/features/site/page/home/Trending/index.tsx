import { HeadingSection } from "@/components/features/site/Headings";
import { Content, Section } from "@/components/layout";
import { FeaturedItems } from "@/components/swiper/FeaturedSlider";

export function Trending() {
  return (
    <Section>
      <Content className="flex-row justify-center">
        <HeadingSection
          showBorders
          title="Trending"
          description="Explore the most trending hotels today"
        />
      </Content>
      <Content className="px-2">
        <FeaturedItems
          // @ts-expect-error - Temporary workaround for type conflict
          itemsArray={[1, 2, 3, 4]}
          trendingRooms
          delay={50}
          speed={13000}
        />
      </Content>
    </Section>
  );
}
