import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import clsx from "clsx";

export function SectionHeadingSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "flex w-full flex-col items-center justify-center py-4 pb-8 pt-40",
        className,
      )}
    >
      <div className="mb-3 flex w-full items-center justify-center">
        <Skeleton className="h-[0.10rem] w-1/5" />
        <div>
          <Skeleton className="mx-2 h-8 w-48 rounded-full px-4 py-1" />
        </div>
        <Skeleton className="h-[0.10rem] w-1/5" />
      </div>
      <Skeleton className="mx-2 h-3 w-80 rounded-full px-4 py-1" />
    </div>
  );
}
