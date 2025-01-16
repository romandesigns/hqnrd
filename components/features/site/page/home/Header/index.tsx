import { Content } from "@/components/layout";
import { Locale } from "@/i18n-config";
import { HeroGallery } from "./HeaderGallery";
import { TextContent } from "./TextContent";

export function Header({ lang }: { lang: Locale }) {
  return (
    <header className="h-full md:my-10 md:h-[60vh]">
      <Content className="relative h-full flex-col gap-4 overflow-hidden rounded-md p-4 pb-10 md:flex-row">
        <section className="flex items-center justify-center py-10 md:flex-1">
          <TextContent lang={lang} />
        </section>
        <section className="flex items-center justify-center pb-8 md:flex-1">
          <HeroGallery />
        </section>
      </Content>
    </header>
  );
}
