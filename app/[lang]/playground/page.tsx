import { FaStar } from "@/components/icons";
import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-pink-500 p-20">
      <div className="glass max-w-xs rounded-lg">
        <div className="flex items-end">
          <div className="h-20 rounded-tl-md bg-muted p-1" />
          <div className="relative overflow-hidden bg-transparent p-2 after:absolute after:content-['']">
            <div className="rounded-b-md p-2 shadow-[0_58px_0_10px_hsl(var(--muted))]">
              {/* <h1>This is a test</h1> */}
              <Image
                src="/assets/images/home/header/HQNRD-first-featured-image.webp"
                alt="random image"
                height={80}
                width={80}
                className="rounded-md"
              />
            </div>
          </div>
          <div className="flex h-20 flex-1 items-center justify-start rounded-tr-md bg-muted p-2 font-bold">
            Roman Feliz
          </div>
        </div>
        <div className="rounded-b-md bg-muted">
          <div className="p-4 pt-0">
            {/* <h3 className="py-2 text-center font-bold">Roman Feliz</h3> */}
            <p className="text-xs leading-6 text-gray-500 text-muted-foreground">
              The hotel is located in the heart of the city, close to the main.
              I was pleasantly surprised by the quality of the hotel. The staff
              was very friendly and helpful.
            </p>
          </div>
          <div className="boerder-t rounded-b-md border-t bg-background p-4">
            <div className="flex items-center gap-2">
              <p>4.7</p>
              <div className="flex items-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div className="flex gap-4 text-xs">
              <p>
                Rooms: <span className="font-semibold">5</span>
              </p>
              <p>
                Location: <span className="font-semibold">5</span>
              </p>
              <p>
                Service: <span className="font-semibold">5</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
