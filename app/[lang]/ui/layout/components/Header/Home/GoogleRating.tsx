import React from "react";
import { FcGoogle, FaStar, FaStarHalfAlt } from "../../../../icons";
import { twMerge } from "tailwind-merge";

export function GoogleRating({ className = "" }: { className?: string }) {
  return (
    <div
      className={twMerge(
        `z-[3] flex items-center justify-center py-2 ${className}`
      )}
    >
      <h3 className="flex items-center justify-centerc text-white text-sm">
        <FcGoogle />
        <span className="mx-2">Google rating 4.5</span>
        <FaStar color="yellow" />
        <FaStar color="yellow" />
        <FaStar color="yellow" />
        <FaStar color="yellow" />
        <FaStarHalfAlt color="yellow" />
      </h3>
    </div>
  );
}
