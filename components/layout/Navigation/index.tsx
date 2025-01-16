import { Brand, DesktopMenu, MobileMenu } from "@/components/features";
import { Locale } from "@/i18n-config";
import { Content } from "../container";

export function Navigation({ lang }: { lang: Locale }) {
  return (
    <nav className="sticky inset-0 z-[3] flex items-center justify-center bg-background/70 backdrop-blur-lg">
      <Content
        className="flex items-center justify-between p-2"
        direction="horizontal"
      >
        {/* Site branding */}
        <Brand lang={lang} />
        {/* Desktop Menu */}
        <DesktopMenu lang={lang} />
        {/* Mobile Menu */}
        <MobileMenu lang={lang} />
      </Content>
    </nav>
  );
}
