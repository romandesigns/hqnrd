import { Locale } from "@/i18n-config";
import { SITE_DETAILS } from "@/utils/constants/siteDetails";
import Image from "next/image";
import Link from "next/link";

/**
 * Component that renders the brand logo and title with a link to the homepage.
 *
 * @param {Object} props - The component props.
 * @param {Locale} props.lang - The locale to be used in the URL.
 *
 * @returns {JSX.Element} The rendered Brand component.
 */

export function Brand({ lang }: { lang: Locale }) {
  return (
    <Link href={`/${lang}`}>
      <div className="flex items-center justify-center gap-2">
        <Image
          width={22}
          height={22}
          src="/assets/images/brand/HQNRD-logo.svg"
          alt={`${SITE_DETAILS.brand_title} Logo`}
        />
        <div>
          <h2 className="text-[0.7rem] font-black">
            {SITE_DETAILS.brand_title}
          </h2>
          <p className="text-[0.68rem] font-medium text-muted-foreground">
            {SITE_DETAILS.brand_slogan}
          </p>
        </div>
      </div>
    </Link>
  );
}
