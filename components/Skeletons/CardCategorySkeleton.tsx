import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function CardCategorySkeleton() {
  return (
    <Skeleton className="grid w-full grid-cols-1 grid-rows-[auto_1fr_auto] overflow-hidden rounded-md bg-secondary">
      {/* Header */}
      <div className="flex w-full items-center justify-between p-3">
        <div className="flex w-full flex-col items-start justify-start gap-2">
          <Skeleton className="h-8 w-36" />
          <div className="flex items-center justify-start gap-2 text-xs">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-6" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-6" />
          </div>
        </div>
        <Skeleton className="h-8 w-10" />
      </div>
      {/* Body */}
      <Skeleton className="aspect-square" />
      {/* Footer */}
    </Skeleton>
  );
}
