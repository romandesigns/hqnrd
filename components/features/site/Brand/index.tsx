import { Locale } from "@/i18n-config";
import { GLOBAL } from "@/utils/constants/global";
import Image from "next/image";
import Link from "next/link";

export function Brand({ lang }: { lang: Locale }) {
  return (
    <Link href={`/${lang}`}>
      <div className="flex items-center justify-center gap-2">
        <Image
          width={22}
          height={22}
          src="/assets/images/brand/HQNRD-logo.svg"
          alt={`${GLOBAL.brand_title} Logo`}
        />
        <div>
          <h2 className="text-[0.7rem] font-black">{GLOBAL.brand_title}</h2>
          <p className="text-[0.68rem] font-medium text-muted-foreground">
            {GLOBAL.brand_slogan}
          </p>
        </div>
      </div>
    </Link>
  );
}
