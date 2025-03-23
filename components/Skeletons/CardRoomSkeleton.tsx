import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function CardRoomSkeleton() {
  return (
    <Skeleton className="relative h-full grid-cols-1 grid-rows-[auto_auto_auto] rounded-lg !p-0">
      <div className="p-2">
        <Skeleton className="h-8 w-24" />
      </div>
      <Skeleton className="h-64 w-full" />
      <div className="flex flex-col px-2">
        <div className="flex items-center justify-start gap-2">
          <Skeleton className="h-2 w-16" />:<Skeleton className="h-2 w-10" />
          <Skeleton className="h-2 w-10" />
          <Skeleton className="h-2 w-10" />
        </div>
        <div className="flex items-center justify-start gap-2">
          <Skeleton className="h-2 w-16" />:<Skeleton className="h-2 w-10" />
          <Skeleton className="h-2 w-10" />
          <Skeleton className="h-2 w-10" />
        </div>
      </div>
      <div className="flex items-center justify-center px-2 pb-2">
        <Skeleton className="h-10 w-full" />
      </div>
    </Skeleton>
  );
}
