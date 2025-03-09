import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { CategoryItem } from "@/components/features/page/home/Categories/categories";
import { Locale } from "@/i18n-config";


export function CardCategoryV1({ category: { title, Icon, totalUnits, maxGuestsPerUnit, slug }, lang }: {
  category: CategoryItem,
  lang: Locale
}) {
  return (<article
    className="grid grid-cols-1 grid-rows-[auto_1fr_auto] bg-secondary rounded-md w-full aspect-square overflow-hidden">
    <div className="p-3 flex justify-between items-center">
      <div>
        <h3 className="font-bold text-md text-foreground uppercase mb-2">{title}</h3>
        <div className="flex items-center justify-start gap-4 text-xs">
          <p className="text-muted-foreground text-xs">Units <span
            className="rounded-full bg-muted-foreground/10 p-0.5 px-4 font-bold text-primary">{totalUnits}</span>
          </p>
          <p className="text-muted-foreground text-xs">Max per Unit <span
            className="rounded-full bg-muted-foreground/10 p-0.5 px-4 font-bold text-primary">{maxGuestsPerUnit}</span>
          </p>
        </div>
      </div>
      <Icon />
    </div>

    {/* Body */}
    <div className="relative rounded-md w-full h-full border-6 border-secondary overflow-hidden">
      <div
        className="bg-gradient-to-b from-black/40 via-transparent to-transparent z-[2] w-full h-48" />
      <Image
        src="/assets/images/home/header/HQNRD-first-featured-image.webp"
        alt="random image"
        fill
        className="w-full h-full object-cover"
      />
    </div>
    {/* Footer */}

    <div className=" p-2">
      <Button size="full" className="font-semibold py-4" asChild>
        <Link href={`${lang}/habitaciones${slug}`}>View All</Link>
      </Button>
    </div>
  </article>);
}
