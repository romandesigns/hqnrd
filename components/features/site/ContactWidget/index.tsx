import {
  FaWhatsapp,
  LuMap,
  FaRegEnvelope,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";
import { cn } from "@/lib/utils";
import { MenuItem } from "../Navigation/DesktopMenu/MenuItem";
import Link from "next/link";
import { LanguagePicker } from "@/components/features";

export function ContactWidget({
  lang,
  direction = "horizontal",
  showBorders,
  className,
  variant,
  btnClassNames,
}: {
  lang: Locale;
  direction?: "horizontal" | "vertical";
  showBorders?: boolean;
  className?: string;
  variant?: "default" | "ghost";
  btnClassNames?: string;
}) {
  return (
    <div className={cn("flex w-full flex-col", className)}>
      {showBorders && <div className="h-0.5 w-full bg-secondary" />}
      <ul
        className={cn(
          `flex items-center justify-center gap-2 space-x-0.5 px-2 ${direction === "horizontal" ? "flex-row" : "flex-col"}`,
        )}
      >
        <MenuItem className="block">
          <Button
            size="icon"
            variant={variant}
            className={cn(btnClassNames)}
            asChild
          >
            <Link href={lang}>
              <LuMap />
            </Link>
          </Button>
        </MenuItem>
        <MenuItem className="block">
          <Button size="icon" variant={variant} className={cn(btnClassNames)}>
            <FaWhatsapp />
          </Button>
        </MenuItem>
        <MenuItem className="block">
          <LanguagePicker lang={lang}/>
        </MenuItem>
        <MenuItem className="block">
          <Button size="icon" variant={variant} className={cn(btnClassNames)}>
            <FaRegEnvelope />
          </Button>
        </MenuItem>
      </ul>
      {showBorders && <div className="h-0.5 w-full bg-secondary" />}
    </div>
  );
}
