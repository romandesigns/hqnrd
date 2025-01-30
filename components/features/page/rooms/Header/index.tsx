import { ContactWidget } from "@/components/features";
import { Content } from "@/components/layout";
import { ComboboxDemo } from "@/components/ui/Combobox";
import { GoBack } from "@/components/ui/goBack";
import { Locale } from "@/i18n-config";
import { billboardsImages } from "@/public/assets/mocked_data/rooms_images";
import { HeroGallery } from "./HeaderGallery";
import { RoomsCount } from "./RoomsCount";

export function Header({ lang }: { lang: Locale }) {
  return (
    <header className="max-md:sticky max-md:top-10 max-md:z-[2] max-md:rounded-b-md max-md:bg-background/80 max-md:backdrop-blur-xl">
      <Content className="py-2 md:py-20">
        <section className="relative grid grid-cols-1 gap-4 md:grid-cols-2">
          <article className="relative z-[2] flex h-full w-full flex-col items-start justify-center">
            <div className="flex w-full items-center justify-between px-2">
              <GoBack variant="ghost" />
              <RoomsCount className="justify-end md:hidden" />
            </div>
            <div className="flex h-full w-full flex-col items-start justify-center p-4 md:py-8 lg:pb-0">
              <h2 className="text-3xl font-bold lg:text-5xl">
                Select your Ideal Room
              </h2>
              <p className="py-2 text-xs text-muted-foreground md:text-sm">
                All rooms provide the same top of the line standards
              </p>
              <div className="flex w-full max-w-[370px] items-center justify-center pt-2">
                <ComboboxDemo />
              </div>
            </div>
            <ContactWidget
              lang={lang}
              className="hidden w-auto px-3 md:block"
              variant="ghost"
              btnClassNames="border"
            />
          </article>
          <article className="hidden h-full w-full flex-col items-center justify-center md:block">
            <HeroGallery billboardsImages={billboardsImages} />
          </article>
        </section>
      </Content>
    </header>
  );
}
