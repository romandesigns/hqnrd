import { HeadingSection } from "@/components/features/site/Headings";
import { Content, Section } from "@/components/layout";
import { Locale } from "@/i18n-config";
import { categories } from "./categories";
import React from "react";
import { CardCategoryV1 } from "@/components/features/site/CardCategorties";


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
      <Content
        className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 grid-rows-[repeat(2,20rem)] items-stretch justify-stretch lg:grid-cols-3 max-w-5xl">
        {categories.map((cat, index) => <CardCategoryV1 key={cat.id} category={cat} lang={lang} />)}
      </Content>
    </Section>
  );
}
