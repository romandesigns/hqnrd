import { Content } from "@/components/layout";
import { Locale } from "@/i18n-config";
import React from "react";
import { FadingSwipper } from "./FadingSwipper";

export function Header({ lang }: { lang: Locale }) {
  return (
    <header>
      <Content>
        <section className="relative h-[40rem]">
          <article>Content</article>
          {/* Fading Banner */}
          <FadingSwipper />
        </section>
      </Content>
    </header>
  );
}
