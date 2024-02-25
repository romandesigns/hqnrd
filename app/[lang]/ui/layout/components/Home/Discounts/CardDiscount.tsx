import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

export function CardDiscount({
  imgSrc,
  eligibleDays,
  borderColor,
  bgColor,
}: {
  imgSrc: string;
  eligibleDays: string;
  borderColor: string;
  bgColor: string;
}): React.JSX.Element {
  return (
    <div className="w-full h-full rounded-md relative md:py-10 md:p-7 mb-4 md:mb-0">
      <div className="p-6 bg-white rounded-md shadow-sm">
        <div className="w-full h-full p-10 flex items-center flex-col justify-center rounded-md border-2 border-dashed">
          <h4 className="font-bold text-lg">{eligibleDays}</h4>
          <figure className="my-10">
            <Image
              width={300}
              height={300}
              src={imgSrc}
              alt={`${eligibleDays} image`}
              style={{ height: "auto" }}
            />
          </figure>
          <div
            className={twMerge(
              `relative border p-3 w-full rounded-md ${borderColor}`
            )}
          >
            <span className="uppercase text-white relative z-[2] font-bold">
              Special Offer
            </span>
            <span
              className={twMerge(
                `absolute w-full h-full block top-2 -left-2 rounded-md ${bgColor}`
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
