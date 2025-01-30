import { ContactWidget } from "@/components/features";
import { HiLocationMarker } from "@/components/icons";
import BoxReveal from "@/components/ui/box-reveal";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import { Locale } from "@/i18n-config";
import { GoogleStats } from "./GoogleStats";
import { JSX } from "react";
import Link from "next/link";
/**
 * Renders the text content for the home page header.
 *
 * @param {Object} props - The component props.
 * @param {Locale} props.lang - The locale for the content.
 * @returns {JSX.Element} The rendered text content component.
 */
export function TextContent({ lang }: { lang: Locale }): JSX.Element {
  return (
    <article className="relative flex h-auto w-full flex-col items-center justify-center gap-4 md:justify-start md:gap-6">
      <GoogleStats reviewsCount={4.9} ratingCount={139} />
      <small className="flex w-full items-center justify-center gap-2 text-muted-foreground md:items-center md:justify-start">
        <HiLocationMarker />
        <span>In Salcedo, Republica Dominicana</span>
      </small>
      <BoxReveal>
        <h1 className="text-center text-3xl font-black md:text-left md:text-2xl lg:text-4xl">
          Experience unmatched comfort and elegance
        </h1>
      </BoxReveal>
      <TextAnimate
        delay={8}
        animation="blurInUp"
        by="character"
        className="text-center text-xs leading-relaxed text-muted-foreground md:text-left md:text-sm"
      >
        Whether you&apos;re traveling solo, with family, or on a romantic
        escape, our top of the line rooms cater to every need. -Visit us today!
      </TextAnimate>
      <div className="mb-4 flex w-full items-center justify-center gap-2 md:justify-start">
        <Button asChild>
          <Link href={`${lang}/habitaciones`}>Explore Rooms</Link>
        </Button>
        <Button variant="secondary">Contact Us</Button>
      </div>
      <ContactWidget
        lang={lang}
        className="hidden justify-start md:flex [&_ul]:justify-start"
        direction="horizontal"
        btnClassNames="border"
        variant="ghost"
      />
    </article>
  );
}
