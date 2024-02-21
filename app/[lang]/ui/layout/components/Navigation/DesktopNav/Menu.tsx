"use client";
import { twMerge } from "tailwind-merge";
import { Button } from "rsuite";
import {
  PiSignInFill,
  GoHomeFill,
  BsDoorOpenFill,
  MdDashboard,
} from "@/app/[lang]/ui/icons";

export const Menu = ({ className = "" }: { className: string }) => {
  return (
    <ul className={twMerge(`flex items-center justify-center ${className}`)}>
      <li>
        <Button
          appearance="link"
          color="blue"
          startIcon={<GoHomeFill className="rs-icon" />}
        >
          Home
        </Button>
      </li>
      <li>
        <Button
          appearance="link"
          color="blue"
          startIcon={<BsDoorOpenFill className="rs-icon" />}
        >
          Rooms
        </Button>
      </li>
      <li>
        <Button
          appearance="link"
          color="blue"
          startIcon={<MdDashboard className="rs-icon" />}
        >
          Dashboard
        </Button>
      </li>
      <li>
        <Button
          appearance="primary"
          color="blue"
          startIcon={<PiSignInFill className="rs-icon" />}
          className="bg-primary-500 border border-primary-500 shadow-xs rounded-md py-1 px-6 text-white shadow-md shadow-primary-300 hover:bg-primary-500 focus:bg-primary-500"
        >
          Sign in
        </Button>
      </li>
    </ul>
  );
};
