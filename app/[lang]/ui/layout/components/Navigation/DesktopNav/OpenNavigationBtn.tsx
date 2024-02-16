"use client";
import { FiMenu } from "@/app/[lang]/ui/icons";
import { NavigationState, useNavToggle } from "@/store/mobile-navigation";
import { IconButton } from "rsuite";

export const OpenNavBtn = () => {
  const { openNavigation } = useNavToggle((state: NavigationState) => state);

  return (
    <span className="border rounded-md border-[#e5e5ea]">
      <IconButton
        icon={<FiMenu size={20} />}
        size="xs"
        appearance="ghost"
        className="focus:border-none focus:outline-none !p-1"
        onClick={openNavigation}
      />
    </span>
  );
};
