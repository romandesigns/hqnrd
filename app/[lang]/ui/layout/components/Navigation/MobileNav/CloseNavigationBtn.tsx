"use client";
import { IoClose } from "@/app/[lang]/ui/icons";
import { NavigationState, useNavToggle } from "@/store/mobile-navigation";
import { IconButton } from "rsuite";

export const CloseNavBtn = () => {
  const { closeNavigation } = useNavToggle((state: NavigationState) => state);
  return (
    <span className="border rounded-md border-[#e5e5ea] translate-x-1">
      <IconButton
        icon={<IoClose size={20} />}
        size="xs"
        appearance="ghost"
        className="focus:border-none focus:outline-none !p-1"
        onClick={closeNavigation}
      />
    </span>
  );
};
