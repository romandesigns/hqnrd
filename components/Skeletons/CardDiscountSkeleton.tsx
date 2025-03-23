import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function CardDiscountSkeleton() {
  return (
    <Skeleton className="relative h-full grid-cols-1 grid-rows-[auto_1fr_auto] rounded-lg !p-0">
      <Skeleton className="mx-auto h-14 w-2/4 flex-1 -translate-y-8 rounded-md p-1 !opacity-100" />
      <div className="p-4 pt-6">
        <Skeleton className="aspect-square bg-muted" />
      </div>
      <Skeleton className="h-14 rounded-none border-none bg-muted-foreground/10 p-4" />
    </Skeleton>
  );
}
