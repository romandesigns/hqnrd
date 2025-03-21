import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function CardTestimonialsSkeleton() {
  return (
    <Skeleton className="relative flex h-44 w-full max-w-md flex-col items-center justify-end">
      <Skeleton className="absolute -top-12 left-0 mx-2 h-20 w-20 p-1">
        <Skeleton className="h-full w-full" />
      </Skeleton>
      <Skeleton className="mx-2 h-20 w-full rounded-t-none px-4 py-1" />
    </Skeleton>
  );
}
