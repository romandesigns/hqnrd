import { Brand, Fqa } from "@/components/features";
import { FaShareNodes } from "@/components/icons";
import { Locale } from "@/i18n-config";
import { Content } from "../container";
import { ContactInformation } from "./ContactInformation";
import { SocialInformation } from "./Social";

export function Footer({ lang }: { lang: Locale }) {
  return (
    <footer className="bg-muted-foreground/10 p-1 md:p-5">
      <Content className="rounded-md bg-muted p-2 px-3 md:p-10">
        <Fqa />
        <div className="flex items-center justify-between gap-2 border-t border-background pt-20">
          <Brand lang={lang} />
          <FaShareNodes />
        </div>
        <article className="grid-rows-auto mt-4 grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 md:gap-10">
          <ContactInformation />
          <SocialInformation />
        </article>
      </Content>
    </footer>
  );
}
