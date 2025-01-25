import { Content } from "@/components/layout";
import { Locale } from "@/i18n-config";
import React from "react";
import { ComboboxDemo } from "@/components/ui/Combobox";
import { ContactWidget } from "../../../ContactWidget";
import { GoBack } from "@/components/ui/goBack";
import { HeroGallery } from "./HeaderGallery";
import { billboardsImages } from "@/public/assets/mocked_data/rooms_images";

export function Header({ lang }: { lang: Locale }) {
  return (
    <header>
      <Content>
        <section className="relative grid grid-cols-1 gap-4 py-20 md:grid-cols-2">
          <article className="relative z-[2] flex h-full w-full flex-col items-start justify-center">
            <GoBack />
            <h2 className="mt-20 text-5xl font-bold">Select your Ideal Room</h2>
            <p className="py-2 text-sm">
              All rooms provide the same top of the line standards
            </p>
            <div className="py-8 pb-8">
              <ComboboxDemo />
            </div>
            <ContactWidget
              lang={lang}
              className="w-auto"
              variant="ghost"
              btnClassNames="border"
            />
          </article>
          {/* Fading Banner */}
          <article className="flex h-full w-full flex-col items-center justify-center">
            <HeroGallery billboardsImages={billboardsImages} />
          </article>
        </section>
      </Content>
    </header>
  );
}
