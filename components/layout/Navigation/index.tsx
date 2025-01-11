import { Brand, DesktopMenu, MobileMenu } from "@/components/features";
import { Locale } from "@/i18n-config";
import { Wrapper } from "../container";

export function Navigation({ lang }: { lang: Locale }) {
  return (
    <nav className="flex items-center justify-center">
      <Wrapper
        className="flex items-center justify-between p-2"
        direction="horizontal"
      >
        {/* Site branding */}
        <Brand lang={lang} />
        {/* Desktop Menu */}
        <DesktopMenu lang={lang} />
        {/* Mobile Menu */}
        <MobileMenu lang={lang} />
      </Wrapper>
    </nav>
  );
}
