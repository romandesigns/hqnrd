import { FaWhatsapp, LuMap, MdTranslate } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";
import { cn } from "@/lib/utils";
import { MenuItem } from "../Navigation/DesktopMenu/MenuItem";

export function ContactFeatures({
  lang,
  direction = "horizontal",
  showBorders,
}: {
  lang: Locale;
  direction?: "horizontal" | "vertical";
  showBorders?: boolean;
}) {
  return (
    <div className="flex items-center justify-center">
      {showBorders && <div className="h-0.5 w-full bg-secondary" />}
      <ul
        className={cn(
          `flex h-full w-full items-center justify-center gap-2 space-x-0.5 px-2 ${direction === "horizontal" ? "flex-row" : "flex-col"}`,
        )}
      >
        <MenuItem className="block">
          <Button size="icon" variant="outline">
            <LuMap />
          </Button>
        </MenuItem>
        <MenuItem className="block">
          <Button size="icon" variant="outline">
            <FaWhatsapp />
          </Button>
        </MenuItem>
        <MenuItem className="block">
          <Button size="icon" variant="outline">
            <MdTranslate />
          </Button>
        </MenuItem>
      </ul>
      {showBorders && <div className="h-0.5 w-full bg-secondary" />}
    </div>
  );
}
