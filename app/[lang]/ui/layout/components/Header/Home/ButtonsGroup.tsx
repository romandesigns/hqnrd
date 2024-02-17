import React from "react";
import { IconButton } from "rsuite";
import { RiDoorClosedLine } from "../../../../icons";
import { twMerge } from "tailwind-merge";

export function HeaderButtonsGroup({ className = "" }: { className?: string }) {
  return (
    <div className={twMerge(`p-4 pt-0 w-full ${className}`)}>
      <div className="grid grid-cols-2 grid-rows-1 gap-2 py-1">
        <IconButton
          appearance="primary"
          className="relative z-[2] uppercase text-xs"
          icon={<RiDoorClosedLine className="rs-icon" />}
          size="lg"
        >
          Sign In
        </IconButton>
        <IconButton
          appearance="primary"
          className="relative z-[2] uppercase text-xs"
          icon={<RiDoorClosedLine className="rs-icon" />}
          size="lg"
        >
          Rooms
        </IconButton>
      </div>
    </div>
  );
}
