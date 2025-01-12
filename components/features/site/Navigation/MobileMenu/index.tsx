import { ContactWidget } from "@/components/features";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";
import { MotionMobileNavigation } from "@/motion/MotionMobileNavigation";
import { useMobileNavigation } from "@/store/hooks";
import Link from "next/link";
import { MenuItem } from "../DesktopMenu/MenuItem";

export function MobileMenu({ lang }: { lang: Locale }) {
  const { isOpen, autoCloseNavigation } = useMobileNavigation();

  return (
    <MotionMobileNavigation
      trigger={isOpen}
      lang={lang}
      className="fixed inset-0 z-50 grid h-full grid-cols-1 grid-rows-[auto_1fr] gap-2 bg-background p-[0.60rem]"
    >
      <div className="flex h-full w-full">
        <ul className="flex w-full flex-col items-stretch justify-center gap-4 rounded-md border px-8">
          <MenuItem className="block">
            <Button
              size="full"
              variant="outline"
              className="py-4 text-xs"
              onClick={() => autoCloseNavigation()}
              asChild
            >
              <Link href={`/${lang}`}>Inicio</Link>
            </Button>
          </MenuItem>
          <MenuItem className="block">
            <Button
              size="full"
              variant="outline"
              className="py-4 text-xs"
              onClick={() => autoCloseNavigation()}
              asChild
            >
              <Link href={`/${lang}/habitaciones`}>Habitaciones</Link>
            </Button>
          </MenuItem>
          <MenuItem className="mb-5 mt-20 block">
            <ContactWidget lang={lang} />
          </MenuItem>
          <MenuItem className="block">
            <Button size="full" variant="default" className="py-4 text-xs">
              Iniciar Session
            </Button>
          </MenuItem>
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
