"use client";

import { twMerge } from "tailwind-merge";
import { ShareDataPropTypes } from "../../../../../types";
import { PiShareNetworkBold } from "../../icons";

export const ShareBtn = ({
  data,
  className,
  iconColor,
}: ShareDataPropTypes) => {
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
