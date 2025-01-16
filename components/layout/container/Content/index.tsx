import { cn } from "@/lib/utils";
import React from "react";
import { twMerge } from "tailwind-merge";

export function Content({
  children,
  className,
  direction,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "horizontal" | "vertical";
}) {
  return (
    <div
      className={cn(
        `mx-auto flex w-full max-w-7xl ${direction === "horizontal" ? "flex-row" : "flex-col"} ${className}`,
      )}
    >
      {children}
    </div>
  );
}
