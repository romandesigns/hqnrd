import { Wrapper } from "@/components/layout";
import { HeroGallery } from "./HeaderGallery";
import { TextContent } from "./TextContent";
import { Locale } from "@/i18n-config";

export function Header({ lang }: { lang: Locale }) {
  return (
    <header className="h-full md:my-10 md:h-[60vh]">
      <Wrapper className="relative h-full flex-col gap-4 overflow-hidden rounded-md p-4 pb-10 md:flex-row">
        <article className="absolute inset-0 z-[-1] bg-[var(--brand-primary-shade)] opacity-5" />
        {/* <article className="absolute inset-0 z-[-2] bg-[url('/assets/images/home/header/HQNRD.webp')] bg-cover bg-center bg-no-repeat" /> */}
        <section className="flex items-center justify-center py-10 md:flex-1">
          <TextContent lang={lang} />
        </section>
        <section className="flex items-center justify-center pb-8 md:flex-1">
          <HeroGallery />
        </section>
      </Wrapper>
    </header>
  );
}
