import { HeadingSection } from "@/components/features/site/Headings";
import { FeaturedItems } from "@/components/features/site/swiper/FeaturedSlider";
import { Content, Section } from "@/components/layout";
import { reviews as testimonialsReviews } from "./reviews";

/**
 * Testimonials component renders a section displaying testimonials from guests.
 *
 * @returns {JSX.Element} The Testimonials component.
 *
 * @component
 * @example
 * return (
 *   <Testimonials />
 * )
 *
 * @remarks
 * This component uses the `Section`, `Content`, `HeadingSection`, and `FeaturedItems` components
 * to structure and display the testimonials. The `HeadingSection` component is used to display
 * the title and description, while the `FeaturedItems` component displays the testimonials
 * with a specified speed for transitions.
 *
 * @see Section
 * @see Content
 * @see HeadingSection
 * @see FeaturedItems
 */
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
