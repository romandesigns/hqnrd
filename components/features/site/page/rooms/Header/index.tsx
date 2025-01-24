import { Content } from "@/components/layout";
import { Locale } from "@/i18n-config";
import React from "react";
import { FadingSwipper } from "./FadingSwipper";
import { ComboboxDemo } from "@/components/ui/Combobox";
import { ContactWidget } from "../../../ContactWidget";

export function Header({ lang }: { lang: Locale }) {
  return (
    <header>
      <Content>
        <section className="relative grid grid-cols-1 gap-4 py-10 md:grid-cols-2">
          <article className="relative z-[2] flex h-full w-full flex-col items-start justify-center">
            <h2 className="text-5xl font-bold">Select your Ideal Room</h2>
            <p className="text-sm">
              All rooms provide the same top of the line standards
            </p>
            <div className="py-4 pb-8">
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
          <FadingSwipper />
        </section>
      </Content>
    </header>
  );
}
