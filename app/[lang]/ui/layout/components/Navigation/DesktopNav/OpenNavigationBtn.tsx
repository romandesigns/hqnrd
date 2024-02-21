"use client";
import { FiMenu } from "@/app/[lang]/ui/icons";
import { NavigationState, useNavToggle } from "@/store/mobile-navigation";
import { IconButton } from "rsuite";
import { twMerge } from "tailwind-merge";

export const OpenNavBtn = ({ className = "" }: { className: string }) => {
  const { openNavigation } = useNavToggle((state: NavigationState) => state);

  return (
    <span
      className={twMerge(`border rounded-md border-[#e5e5ea] ${className}`)}
    >
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
