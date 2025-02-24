import { FaRegEnvelope, FaWhatsapp, LuMap } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";
import { cn } from "@/lib/utils";
import { MenuItem } from "../Navigation/DesktopMenu/MenuItem";
import { LanguagePicker } from "@/components/features";
import { ExternalLink } from "@/components/ui/ExLink";
import { GLOBAL } from "@/utils/constants/global";

export function ContactWidget({
                                lang,
                                direction = "horizontal",
                                showBorders,
                                className,
                                variant,
                                btnClassNames
                              }: {
  lang: Locale;
  direction?: "horizontal" | "vertical";
  showBorders?: boolean;
  className?: string;
  variant?: "default" | "ghost" | "outline";
  btnClassNames?: string;
}) {
  return (
    <div className={cn("flex w-full flex-col", className)}>
      {showBorders && <div className="h-0.5 w-full bg-secondary" />}
      <ul
        className={cn(
          `flex items-center justify-center gap-2 space-x-0.5 px-2 ${direction === "horizontal" ? "flex-row" : "flex-col"}`
        )}
      >
        <MenuItem className="block">
          <Button
            size="icon"
            variant={variant}
            className={cn(btnClassNames)}
            asChild
          >
            <ExternalLink href={GLOBAL.contact.googleMap}>
              <LuMap />
            </ExternalLink>
          </Button>
        </MenuItem>
        <MenuItem className="block">
          <Button size="icon" variant={variant} className={cn(btnClassNames)}>
            <ExternalLink href={GLOBAL.contact.whatsapp}>
              <FaWhatsapp />
            </ExternalLink>
          </Button>
        </MenuItem>
        <MenuItem className="block">
          <LanguagePicker lang={lang} variant={variant} className={cn(btnClassNames)} />
        </MenuItem>
        <MenuItem className="block">
          <Button size="icon" variant={variant} className={cn(btnClassNames)}>
            <ExternalLink href={GLOBAL.contact.email}>
              <FaRegEnvelope />
            </ExternalLink>
          </Button>
        </MenuItem>
      </ul>
      {showBorders && <div className="h-0.5 w-full bg-secondary" />}
    </div>
  );
}
