import { Brand, DesktopMenu, MobileMenu } from "@/components/features";
import { Locale } from "@/i18n-config";
import { Content } from "../container";
import { useUser } from "@clerk/nextjs";
/**
 * Navigation component that renders the site's navigation bar.
 *
 * @param {Object} props - The component props.
 * @param {Locale} props.lang - The locale for the navigation content.
 *
 * @returns {JSX.Element} The rendered navigation component.
 */
export function Navigation({ lang }: { lang: Locale }) {
  const { user } = useUser();
  return (
    <nav className="sticky inset-0 z-[3] flex items-center justify-center border-b border-background bg-background/95 backdrop-blur-lg md:bg-background/70">
      <Content
        className="flex items-center justify-between p-2"
        direction="horizontal"
      >
        {/* Site branding */}
        <Brand lang={lang} />
        {/* Desktop Menu */}
        <DesktopMenu lang={lang} userId={user?.id} />
        {/* Mobile Menu */}
        <MobileMenu lang={lang} userId={user?.id} />
      </Content>
    </nav>
  );
}
