import React from "react";
import { featuresList } from "./items";
import { twMerge } from "tailwind-merge";

export function Features() {
  return (
    <div className="w-full">
      <h3 className="font-bold text-xl mb-2">Features</h3>
      <ul className="flex flex-wrap items-center justify-start gap-2 lg:grid lg:grid-cols-4 lg:grid-rows-2">
        {featuresList.map((feature) => (
          <li
            key={feature.id}
            className={twMerge(
              `p-0.5 border rounded-md flex-1`
            )}
          >
            <div className="p-1 bg-muted/20 flex flex-1 items-center gap-2 rounded-md">
                 <span
                   className={twMerge(
                     `flex ${feature.color} text-secondary h-8 w-8 items-center justify-center rounded-md`
                   )}
                 >
                 <feature.Icon />
               </span>
              <span className="ml-1 text-xs text-muted-foreground">{feature.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
