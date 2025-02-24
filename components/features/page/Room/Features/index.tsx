import React from "react";
import { featuresList } from "./items";
import { twMerge } from "tailwind-merge";

export function Features() {
  return (
    <div className="w-full">
      <h3 className="font-bold text-xl mb-2">Features</h3>
      <ul className="flex grid-cols-4 grid-rows-2 flex-wrap items-center justify-start gap-2 sm:grid">
        {featuresList.map((feature) => (
          <li
            key={feature.id}
            className={twMerge(
              `p-0.5 border rounded-md`
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
