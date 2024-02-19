import Image from "next/image";
import { BrandLink } from "./BrandLink";
import cn from "classnames";
import { twMerge } from "tailwind-merge";

export function Brand({ width = 21, height = 21, className = "" }) {
  return (
    <BrandLink linkPath={"/"} className={twMerge(cn(className))}>
      <>
        <Image
          src="/assets/general/logo-original.svg"
          alt="Hotel Quinto Nivel RD"
          width={width}
          height={height}
          style={{ width: "1.5rem", height: "auto" }}
          priority
        />
        <div className="flex items-start justify-center flex-col pl-2">
          <h1 className="font-black text-xs uppercase mt-1">
            Hotel Quinto Nivel RD
          </h1>
          <p className="font-medium text-xs text-inherit">
            Como estar en casa!
          </p>
        </div>
      </>
    </BrandLink>
  );
}
