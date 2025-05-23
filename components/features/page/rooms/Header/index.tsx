import { ContactWidget } from "@/components/features";
import { Content } from "@/components/layout";
import { CategoriesDropDownMenu } from "@/components/ui/CategoriesDropDownMenu";
import { GoBack } from "@/components/ui/goBack";
import { Locale } from "@/i18n-config";
import { billboardsImages } from "@/public/assets/mocked_data/rooms_images";
import { HeroGallery } from "./HeaderGallery";
import { Filters } from "@/components/features/page/rooms/filters";

export function Header({ lang }: { lang: Locale }) {
  return (
    <header className="hqnrd-frosty-bg lg:static">
      <Content className="py-2 md:py-20">
        <section className="relative grid grid-cols-1 gap-4 md:grid-cols-2">
          <article className="relative z-[2] flex h-full w-full flex-col items-start justify-center">
            <div className="hidden w-full items-center justify-between px-2 lg:flex">
              <div>
                <GoBack variant="outline" />
              </div>
            </div>
            <div className="flex h-full w-full flex-col items-start justify-center px-2 py-0 md:py-8 lg:pb-0">
              <h2 className="hidden w-full text-center text-lg font-bold sm:text-3xl md:text-left lg:block lg:text-5xl">
                Select your Ideal Room
              </h2>
              <p className="hidden py-2 text-xs text-muted-foreground md:block md:text-sm">
                All rooms provide the same top of the line standards
              </p>
              <div className="mx-auto flex w-full max-w-[370px] items-center justify-center pt-2 md:ml-0">
                <CategoriesDropDownMenu lang={lang} />
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
