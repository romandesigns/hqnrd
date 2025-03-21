import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function SectionHeading() {
  return (
    <div className="flex w-full flex-col items-center justify-center py-4 pb-8 pt-40">
      <div className="mb-3 flex w-full items-center justify-center">
        <div className="h-[0.10rem] w-1/5 bg-foreground/25" />
        <div>
          <Skeleton className="mx-2 h-8 w-48 rounded-full px-4 py-1" />
        </div>
        <div className="h-[0.10rem] w-1/5 bg-foreground/25" />
      </div>
      <Skeleton className="mx-2 h-2 w-80 rounded-full px-4 py-1" />
    </div>
  );
}
