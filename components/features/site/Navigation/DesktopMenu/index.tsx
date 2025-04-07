import { FaList } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";
import Link from "next/link";
import { ModeToggle } from "../../ModeToggle";
import { ToggleNavigationBtn } from "../shared/ToggleNavBtn";
import { MenuItem } from "./MenuItem";
import { CartBookings } from "@/components/features/page/shared/CartBookings";

/**
 * Renders the desktop navigation menu for the site.
 *
 * @param {Object} props - The component props.
 * @param {Locale} props.lang - The current language/locale.
 *
 * @returns {JSX.Element} The rendered desktop menu component.
 */
export function DesktopMenu({ lang }: { lang: Locale }) {
  return (
    <ul className="flex items-start justify-center gap-3 text-xs font-medium">
      <MenuItem>
        <Button size="sm" variant="ghost" asChild>
          <Link href={`/${lang}`} className="text-center font-semibold">
            Inicio
          </Link>
        </Button>
      </MenuItem>
      <MenuItem>
        <Button size="sm" variant="ghost" asChild>
          <Link
            href={`/${lang}/habitaciones`}
            className="text-center font-semibold"
          >
            Habitaciones
          </Link>
        </Button>
      </MenuItem>
      <MenuItem>
        <Button size="sm" variant="secondary" asChild>
          <Link href={`/${lang}/auth`} className="text-center font-semibold">
            Crear Cuenta
          </Link>
        </Button>
      </MenuItem>
      <MenuItem className="block">
        <ModeToggle />
      </MenuItem>
      <MenuItem className="max-md:block">
        <CartBookings variant="outline" />
      </MenuItem>
      <MenuItem className="block md:hidden">
        <ToggleNavigationBtn />
      </MenuItem>
    </ul>
  );
}
