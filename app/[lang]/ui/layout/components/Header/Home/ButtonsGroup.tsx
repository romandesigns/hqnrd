import React from "react";
import { IconButton, ButtonToolbar, ButtonGroup } from "rsuite";
import { PiSignInFill, RiDoorClosedLine } from "../../../../icons";
import { twMerge } from "tailwind-merge";

export function HeaderButtonsGroup({ className = "" }: { className?: string }) {
  return (
    <ButtonToolbar className={twMerge(`p-4 w-full ${className}`)}>
      <IconButton
        size="md"
        active
        appearance="primary"
        className="flex-1 uppercase"
        icon={<PiSignInFill className="rs-icon" />}
      >
        Sign In
      </IconButton>
      <IconButton
        size="md"
        appearance="default"
        active
        className="flex-1 uppercase"
        icon={<RiDoorClosedLine className="rs-icon" />}
      >
        Rooms
      </IconButton>
    </ButtonToolbar>
  );
}
