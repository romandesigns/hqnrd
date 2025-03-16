import { HeadingSection } from "@/components/features/site/Headings";
import { Content, Section } from "@/components/layout";
import { Locale } from "@/i18n-config";
import React from "react";
import { categories } from "@/utils/constants/categories";
import { CategoryCard } from "./Components/CardCategory";

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

export function Categories({ lang }: { lang: Locale }) {
  return (
    <Section>
      {/* Section - Heading */}
      <Content className="flex-row justify-center">
        <HeadingSection
          showBorders={true}
          title="Find your perfect stay"
          description="Choose the one that fits your style!"
        />
      </Content>
      {/* Section - Content */}
      <Content className="grid max-w-5xl grid-cols-1 grid-rows-[repeat(2,20rem)] place-items-center items-stretch justify-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories
          .filter((cat) => cat.slug !== "")
          .map((cat, index) => (
            <CategoryCard key={index} category={cat} lang={lang} />
          ))}
      </Content>
    </Section>
  );
}
