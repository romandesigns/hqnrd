"use client";

import { PiShareNetworkBold } from "../../icons";
import { twMerge } from "tailwind-merge";
import { ShareDataTypes } from "./types";

export const ShareBtn = ({ data, className, iconColor }: ShareDataTypes) => {
  const showShareScreen = async () => {
    try {
      await navigator.share(data);
      console.log("Done");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      className={twMerge(`p-1 border rounded-md ${className}`)}
      onClick={() => showShareScreen()}
    >
      <PiShareNetworkBold color={iconColor} />
    </button>
  );
};
