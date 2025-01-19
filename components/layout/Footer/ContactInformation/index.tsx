import React from "react";
import {
  FaEnvelope,
  FaInternetExplorer,
  HiLocationMarker,
  TbBrandWhatsappFilled,
} from "@/components/icons";

export function ContactInformation() {
  return (
    <ul className="mt-10 space-y-6 py-4 text-xs md:py-10 md:text-[0.80rem]">
      <li className="flex items-center justify-start gap-2">
        <span>
          <TbBrandWhatsappFilled />
        </span>
        <span>+1809-753-7500</span>
      </li>
      <li className="flex items-center justify-start gap-2">
        <span>
          <FaEnvelope />
        </span>
        <span>hotelquintonivelrd@gmail.com</span>
      </li>
      <li className="flex items-center justify-start gap-2">
        <span>
          <HiLocationMarker />
        </span>
        <span>Calle de la Mujer #2, Urb, Salcedo 34000, RD</span>
      </li>
      <li className="flex items-center justify-start gap-2">
        <span>
          <FaInternetExplorer />
        </span>
        <span>https://hotelquintonivelrd.com</span>
      </li>
    </ul>
  );
}
