import { ContactWidget } from "@/components/features";
import { HiLocationMarker } from "@/components/icons";
import BoxReveal from "@/components/ui/box-reveal";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";
import { GoogleStats } from "./GoogleStats";

export function TextContent({ lang }: { lang: Locale }) {
  return (
    <article className="relative flex h-auto w-full flex-col items-center justify-center gap-4 md:justify-start md:gap-6">
      <GoogleStats reviewsCount={4.9} lang={lang} ratingCount={139} />
      <small className="flex w-full items-center justify-center gap-2 text-muted-foreground md:items-center md:justify-start">
        <HiLocationMarker />
        <span>In Salcedo, Republica Dominicana</span>
      </small>
      <BoxReveal>
        <h1 className="text-center text-3xl font-black md:text-left md:text-5xl">
          Experience unmatched comfort and elegance
        </h1>
      </BoxReveal>
      <p className="text-center text-xs text-muted-foreground md:text-left md:text-sm">
        Whether you're traveling solo, with family, or on a romantic escape, our
        thoughtfully designed rooms cater to every need{" "}
        <span className="font-bold underline">Visit us today!</span>
      </p>
      <div className="mb-4 flex w-full items-center justify-center gap-2 md:justify-start">
        <Button>Explore Rooms</Button>
        <Button variant="secondary">Contact Us</Button>
      </div>
      <ContactWidget
        lang={lang}
        className="hidden justify-start md:flex [&_ul]:justify-start"
        direction="horizontal"
      />
    </article>
  );
}
