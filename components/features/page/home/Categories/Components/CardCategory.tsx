import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Locale } from "@/i18n-config";
import { CategoryInterface } from "@/types";

export function CategoryCard({
  category: { label, Icon, totalUnits, maxGuestsPerUnit, slug },
  lang,
}: {
  category: CategoryInterface;
  lang: Locale;
}) {
  return (
    <article className="grid aspect-square w-full grid-cols-1 grid-rows-[auto_1fr_auto] overflow-hidden rounded-md bg-secondary">
      <div className="flex items-center justify-between p-3">
        <div>
          <h3 className="mb-2 text-sm font-bold uppercase text-foreground">
            {label}
          </h3>
          <div className="flex items-center justify-start gap-4 text-xs">
            <p className="text-xs text-muted-foreground">
              Units{" "}
              <span className="p-0.25 ml-1 rounded-full bg-muted-foreground/10 px-4 font-bold text-primary">
                {totalUnits}
              </span>
            </p>
            <p className="text-xs text-muted-foreground">
              Max per Unit{" "}
              <span className="p-0.25 ml-1 rounded-full bg-muted-foreground/10 px-4 font-bold text-primary">
                {maxGuestsPerUnit}
              </span>
            </p>
          </div>
        </div>
        <Icon />
      </div>
      {/* Body */}
      <div className="border-6 relative h-full w-full overflow-hidden rounded-md border-secondary">
        <div className="z-[2] h-48 w-full bg-gradient-to-b from-black/40 via-transparent to-transparent" />
        <Image
          src="/assets/images/home/header/HQNRD-first-featured-image.webp"
          alt="random image"
          fill
          className="h-full w-full object-cover"
        />
      </div>
      {/* Footer */}

      <div className="p-2">
        <Button size="full" className="py-4 font-semibold" asChild>
          <Link href={`${lang}/habitaciones?categoria=${slug}`}>View All</Link>
        </Button>
      </div>
    </article>
  );
}
