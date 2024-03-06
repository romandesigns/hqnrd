import cn from "classnames";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { BrandLink } from "./BrandLink";

export function Brand({
  width = 21,
  height = 21,
  className = "",
  hideTypo,
}: {
  width?: number;
  height?: number;
  className?: string;
  hideTypo?: boolean;
}) {
  return (
    <BrandLink linkPath={"/"} className={twMerge(className)}>
      <>
        <Image
          src="/assets/general/logo-original.svg"
          alt="Hotel Quinto Nivel RD"
          width={width}
          height={height}
          style={{ width: "1.5rem", height: "auto" }}
          priority
        />
        <div
          className={twMerge(
            `flex items-start justify-center flex-col pl-2`,
            cn({
              hidden: hideTypo,
            })
          )}
        >
          <h1 className="font-black text-xs uppercase mt-1 text-inherit">
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
