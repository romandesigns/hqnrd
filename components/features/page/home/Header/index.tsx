import { Content } from "@/components/layout";
import { Locale } from "@/i18n-config";
import { HeroGallery } from "./HeaderGallery";
import { TextContent } from "./TextContent";
import { JSX } from "react";
import { billboardsImages } from "@/public/assets/mocked_data/rooms_images";
interface HeaderProps {
  lang: Locale;
}

/**
 * Header component that displays the header section of the home page.
 *
 * @param {HeaderProps} props - The properties object.
 * @param {string} props.lang - The language to be used for the text content.
 *
 * @returns {JSX.Element} The rendered header component.
 */

export function Header({ lang }: HeaderProps): JSX.Element {
  return (
    <header className="h-full md:my-10 md:mb-0 md:h-[60vh]">
      <Content className="relative h-full flex-col gap-4 overflow-hidden rounded-md p-4 pb-10 md:flex-row">
        <section className="flex items-center justify-center py-10 md:flex-1">
          <TextContent lang={lang} />
        </section>
        <section className="flex items-center justify-center pb-8 md:flex-1">
          <HeroGallery billboardsImages={billboardsImages} />
        </section>
      </Content>
    </header>
  );
}
