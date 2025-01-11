import { FaList } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";
import { ModeToggle } from "../../ModeToggle";
import { ToggleNavigationBtn } from "../shared/ToggleNavBtn";
import { MenuItem } from "./MenuItem";
import Link from "next/link";

export function DesktopMenu({ lang }: { lang: Locale }) {
  return (
    <ul className="flex items-start justify-center gap-3 text-xs font-medium">
      <MenuItem>
        <Button size="sm" variant="ghost" asChild>
          <Link
            href={`/${lang}/auth/crear-cuenta`}
            className="text-center font-semibold"
          >
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
        <Button size="sm" variant="outline" asChild>
          <Link
            href={`/${lang}/auth/crear-cuenta`}
            className="text-center font-semibold"
          >
            Crear Cuenta
          </Link>
        </Button>
      </MenuItem>
      <MenuItem className="block">
        <ModeToggle />
      </MenuItem>
      <MenuItem className="max-md:block">
        <Button size="icon" variant="ghost">
          <FaList />
        </Button>
      </MenuItem>
      <MenuItem className="block md:hidden">
        <ToggleNavigationBtn />
      </MenuItem>
    </ul>
  );
}
