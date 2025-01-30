import { HeadingSection } from "@/components/features/site/Headings";
import { Content, Section } from "@/components/layout";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { CategoryItem } from "./CategoryItem";

/**
 * The `Categories` component renders a section that includes a heading and a grid of category items.
 *
 * @returns {JSX.Element} A section containing a heading and a grid of category items.
 *
 * @component
 * @example
 * return (
 *   <Categories />
 * )
 */
export function Categories() {
  return (
    <Section>
      {/* Heading Section */}
      <Content className="flex-row justify-center">
        <HeadingSection
          showBorders={true}
          title="Find your perfect stay"
          description="Choose the one that fits your style!"
        />
      </Content>

      {/* Centered Category Items */}
      <Content className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
        <SpotlightCard>
          <CategoryItem />
        </SpotlightCard>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </Content>
    </Section>
  );
}
