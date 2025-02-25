import { HeadingSection } from "@/components/features/site/Headings";
import { FeaturedItems } from "@/components/features/site/swiper/FeaturedSlider";
import { Content, Section } from "@/components/layout";

/**
 * The `Trending` component renders a section that showcases the most trending hotels.
 * It includes a heading section with a title and description, and a list of featured items.
 *
 * @component
 * @example
 * return (
 *   <Trending />
 * )
 *
 * @returns {JSX.Element} A section displaying trending hotels.
 */
export function Trending({ heading, description }: { heading: string; description: string }): JSX.Element {
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
          speed={6000}
          delay={1000}
        />
      </Content>
    </Section>
  );
}
