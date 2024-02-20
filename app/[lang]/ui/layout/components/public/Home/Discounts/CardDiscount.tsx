import Image from "next/image";
import React from "react";

export default function CardDiscount({
  imgSrc,
  eligibleDays,
  color,
}: {
  imgSrc: string;
  eligibleDays: string;
  color: string;
}): React.JSX.Element {
  return (
    <div className="w-full h-full rounded-md md:px-4 relative">
      <div className="p-6 bg-white rounded-md md:my-20 shadow-sm">
        <div className="w-full h-full p-10 flex items-center flex-col justify-center rounded-md border-2 border-dashed">
          <h4 className="font-bold text-lg">{eligibleDays}</h4>
          <figure className="my-10">
            <Image
              width={300}
              height={300}
              src={imgSrc}
              alt={`${eligibleDays} image`}
            />
          </figure>
          <div
            className={`relative border p-3 w-full border-${color}-600 rounded-md`}
          >
            <span className="uppercase text-white relative z-[2] font-bold">
              Special Offer
            </span>
            <span
              className={`absolute w-full h-full block border bg-${color}-600/90 top-2 -left-2 rounded-md`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
