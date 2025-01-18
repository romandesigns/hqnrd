import {
  FaShareNodes,
  FaWheelchair,
  MdOutlineCoffeeMaker,
  MdOutlineWifi,
  TbAirConditioning,
  TbBrandIntercom,
  TbToolsKitchen,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function CardRoom() {
  return (
    <div className="glass h-full grid-cols-1 grid-rows-[auto_1fr_auto] rounded-lg border">
      <div className="flex items-end">
        <div className="flex-0.5 h-10 rounded-tl-md bg-muted p-1" />
        <div className="relative overflow-hidden bg-transparent p-1 after:absolute after:content-['']">
          <div className="rounded-b-md p-1 shadow-[0_34px_0_10px_hsl(var(--muted))]">
            <div className="rounded-md bg-foreground/10 p-1 px-6">
              <p className="text-sm font-bold uppercase">Double Cama</p>
              <small className="text-xs">
                Unit <span className="font-bold">#302</span>
              </small>
            </div>
          </div>
        </div>
        <div className="flex h-8 flex-1 items-center justify-end rounded-tr-md bg-muted p-5 pr-3 font-bold">
          <Button size="icon" variant="ghost">
            <FaShareNodes />
          </Button>
        </div>
      </div>
      <div className="h-auto rounded-b-md border-t bg-muted-foreground/10 p-2">
        <figure className="relative h-52 overflow-hidden">
          <div className="absolute bottom-0 right-0 z-[2] rounded-tl-md bg-muted p-2 px-4 font-black">
            2,500$ / Night
          </div>
          <Image
            src="/assets/images/home/header/HQNRD-first-featured-image.webp"
            alt="random image"
            fill
            className="rounded-md object-cover"
          />
        </figure>
        <div className="flex flex-col gap-2 p-2 pt-4 text-xs font-semibold text-muted-foreground">
          <div className="flex items-center gap-2">
            <p>Features:</p>
            <ul className="flex gap-1">
              <li className="rounded-full bg-muted-foreground/10 p-2 py-1 text-[0.70rem] font-medium">
                258 sqft
              </li>
              <li className="rounded-full bg-muted-foreground/10 p-2 py-1 text-[0.70rem] font-medium">
                Intercom
              </li>
              <li className="rounded-full bg-muted-foreground/10 p-2 py-1 text-[0.70rem] font-medium">
                2.5 Beds
              </li>
              <li className="rounded-full bg-muted-foreground/10 p-2 py-1 text-[0.70rem] font-medium">
                Balcony
              </li>
              <li className="rounded-full py-1 text-[0.70rem] font-medium">
                ..6+
              </li>
            </ul>
          </div>
          <div className="flex w-full items-center gap-2">
            <p>Ameneties:</p>
            <ul className="flex gap-2">
              <li className="flex items-center justify-center text-[0.80rem] font-medium">
                <FaWheelchair />
              </li>
              <li className="flex items-center justify-center text-[0.80rem] font-medium">
                <TbAirConditioning />
              </li>
              <li className="flex items-center justify-center text-[0.80rem] font-medium">
                <MdOutlineCoffeeMaker />
              </li>
              <li className="flex items-center justify-center text-[0.80rem] font-medium">
                <TbToolsKitchen />
              </li>
              <li className="flex items-center justify-center text-[0.80rem] font-medium">
                <TbBrandIntercom />
              </li>
              <li className="flex items-center justify-center text-[0.80rem] font-medium">
                <MdOutlineWifi />
              </li>
              <li className="rounded-full py-1 text-[0.70rem] font-medium">
                ..6+
              </li>
            </ul>
          </div>
        </div>
        <div className="my-2">
          <Button size="full" className="font-semibold" asChild>
            <Link href={"/foo"}>View Rooms</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
