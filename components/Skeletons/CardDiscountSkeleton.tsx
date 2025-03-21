import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function CardDiscountSkeleton() {
  return (
    <Skeleton className="glass h-full grid-cols-1 grid-rows-[auto_1fr_auto] rounded-lg">
      <div className="flex items-end">
        <Skeleton className="h-12 flex-1 rounded-tl-md bg-muted p-1" />
        <div className="flex h-12 flex-1 items-center justify-start rounded-tr-md bg-muted p-2 font-bold" />
      </div>
      <Skeleton className="aspect-square bg-muted" />
      <Skeleton className="border-t-none h-14 rounded-b-md bg-muted-foreground/10 p-4" />
    </Skeleton>
  );
}
