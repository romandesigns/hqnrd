"use client";

import { i18n, Locale } from "@/i18n-config";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export const redirectedPathName = (locale: Locale, pathName: string) => {
  if (!pathName) return "/";
  const segments = pathName.split("/");
  segments[1] = locale;
  return segments.join("/");
};

export function LocaleSwitcher({ lang }: { lang: string }) {
  const pathName = usePathname();
 const flags = ['dominican','american']
  return (
      <ul className="grid grid-cols-2 grid-rows-[10rem] gap-6 py-6">
        {i18n.locales.map((locale) => {
          return (
            <li
              key={locale}
              className={twMerge(
                `w-full`,
                cn({
                  "text-blue-500": locale === lang,
                }),
              )}
            >
              <Link href={redirectedPathName(locale, pathName)}>
                <div className="flex w-full flex-col space-y-2.5 items-center justify-center">
                  <div className="flex flex-col w-full border p-4 rounded-md items-center justify-center bg-secondary/20">
                    <Image src={`/assets/images/general/${locale === "en" ? "american" : "dominican"}-flag.svg`} width={120} height={120} alt="Image" className="object-cover" />
                  </div>
                  <p className="font-medium">{locale === "en" ? "English" : "Spanish"}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
  );
}
