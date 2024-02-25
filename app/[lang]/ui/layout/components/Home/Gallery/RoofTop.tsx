import React from "react";
import Image from "next/image";

export function RoofTop() {
  return (
    <ul className="grid grid-cols-2 grid-rows-3 gap-3 h-[32rem] mb-8 md:grid-cols-3">
      <li className="bg-neutral-300 rounded-md overflow-hidden flex items-center justify-center row-span-2 md:row-span-3 relative">
        <Image
          src="/assets/home/highlights/rooftop/photograph-behind-coloumn-right--at-the-hotel-quinto-nivel-rd.webp"
          alt="Front of building"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </li>
      <li className="bg-neutral-300 rounded-md overflow-hidden flex items-center justify-center relative">
        <Image
          src="/assets/home/highlights/rooftop/photograph-behind-column-left-at-the-hotel-quinto-nivel-rd.webp"
          alt="Front of building"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </li>
      <li className="bg-neutral-300 rounded-md overflow-hidden flex items-center justify-center md:row-span-2 relative">
        <Image
          src="/assets/home/highlights/rooftop/photograph-behind-palm-tree-at-the-hotel-quinto-nivel-rd.webp"
          alt="Front of building"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </li>
      <li className="bg-neutral-300 rounded-md overflow-hidden flex items-center justify-center md:row-span-2 relative">
        <Image
          src="/assets/home/highlights/rooftop/phtograph-behind-plant-on-the-table-during-sunset-at-the-hotel-quinto-nivel-rd.webp"
          alt="Front of building"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </li>
      <li className="bg-neutral-300 rounded-md overflow-hidden flex items-center justify-center relative">
        <Image
          src="/assets/home/highlights/rooftop/photograph-behind-plant-at-the-hotel-quinto-nivel-rd.webp"
          alt="Front of building"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </li>
    </ul>
  );
}
