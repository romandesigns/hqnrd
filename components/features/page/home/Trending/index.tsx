import { HeadingSection } from "@/components/features/site/Headings";
import { FeaturedItems } from "@/components/features/site/swiper/FeaturedSlider";
import { Content, Section } from "@/components/layout";
import { JSX } from "react";
import { Locale } from "@/i18n-config";
import { Room } from "@/types";

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
export function Trending({
  heading,
  description,
  lang,
  rooms,
}: {
  heading: string;
  description: string;
  lang: Locale;
  rooms: Room[];
}): JSX.Element {
  const randomRooms = (): Room[] => {
    return rooms.sort(() => Math.random() - 0.5).slice(0, 4);
  };
  return (
    <Section>
      <Content className="flex-row justify-center">
        <HeadingSection showBorders title={heading} description={description} />
      </Content>
      <Content className="px-2">
        <FeaturedItems<Room>
          itemsArray={randomRooms()}
          trendingRooms
          speed={6000}
          delay={1000}
          lang={lang}
        />
      </Content>
    </Section>
  );
}
