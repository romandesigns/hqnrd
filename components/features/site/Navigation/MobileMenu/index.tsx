import { ContactWidget } from "@/components/features";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";
import { MotionMobileNavigation } from "@/motion/MotionMobileNavigation";
import { useMobileNavigation } from "@/store/hooks";
import Link from "next/link";
import { MenuItem } from "../DesktopMenu/MenuItem";
import { SignOutButton } from "@clerk/nextjs";

/**
 * MobileMenu component renders a mobile navigation menu with various menu items.
 *
 * @param {Object} props - The component props.
 * @param {Locale} props.lang - The locale for the navigation links.
 *
 * @returns {JSX.Element} The rendered mobile menu component.
 *
 * @example
 * <MobileMenu lang="en" />
 *
 * @component
 * @example
 * // Example usage:
 * <MobileMenu lang="es" />
 */
export function MobileMenu({
  lang,
  userId,
}: {
  lang: Locale;
  userId?: string;
}) {
  const { isOpen, autoCloseNavigation } = useMobileNavigation();
  return (
    <MotionMobileNavigation
      trigger={isOpen}
      lang={lang}
      className="fixed inset-0 z-50 grid h-screen grid-cols-1 grid-rows-[auto_1fr] gap-2 bg-background p-[0.60rem]"
    >
      <div className="flex h-full w-full">
        <ul className="flex w-full flex-col items-stretch justify-center gap-4 rounded-md bg-muted/25 px-8">
          <MenuItem className="block">
            <Button
              size="full"
              variant="ghost"
              className="bg-muted py-4 text-xs"
              onClick={() => autoCloseNavigation()}
              asChild
            >
              <Link href={`/${lang}`}>Inicio</Link>
            </Button>
          </MenuItem>
          <MenuItem className="block">
            <Button
              size="full"
              variant="ghost"
              className="bg-muted py-4 text-xs"
              onClick={() => autoCloseNavigation()}
              asChild
            >
              <Link href={`/${lang}/habitaciones`}>Habitaciones</Link>
            </Button>
          </MenuItem>
          <MenuItem className="mb-5 mt-20 block">
            <ContactWidget
              lang={lang}
              variant="ghost"
              btnClassNames="border-none bg-muted"
            />
          </MenuItem>
          {userId ? (
            <SignOutButton>
              <Button size="sm" variant="secondary" asChild>
                <Link
                  href={`/${lang}/crear-cuenta`}
                  className="text-center font-semibold"
                >
                  Cerrar Sesion
                </Link>
              </Button>
            </SignOutButton>
          ) : (
            <MenuItem className="block">
              <Button
                size="full"
                variant="default"
                className="py-4 text-xs"
                asChild
              >
                <Link
                  href={`/${lang}/inicia-sesion`}
                  className="text-center font-semibold"
                >
                  Inicia Sesion
                </Link>
              </Button>
            </MenuItem>
          )}
          <MenuItem className="flex items-center justify-center gap-2 text-xs">
            <p className="text-muted-foreground">No te has registrado?</p>
            <Link
              href={`/${lang}/auth/crear-cuenta`}
              className="text-center font-semibold underline"
            >
              Crear Cuenta
            </Link>
          </MenuItem>
        </ul>
      </div>
    </MotionMobileNavigation>
  );
}
