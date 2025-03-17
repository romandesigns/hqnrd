"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export function CardRoomSkeleton() {
  return (
    <div className="glass grid h-full grid-cols-1 grid-rows-[auto_1fr_auto] rounded-lg border p-2">
      {/* Header Section */}
      <div className="flex items-end">
        <div className="flex-0.5 h-10 w-10 rounded-tl-md bg-muted p-1" />
        <div className="relative overflow-hidden bg-transparent p-1">
          <div className="rounded-b-md p-1 shadow-md">
            <div className="rounded-md p-1.5 px-6 pt-2.5">
              <Skeleton className="h-4 w-32 rounded-md" />
              <Skeleton className="mt-1 h-3 w-20 rounded-md" />
            </div>
          </div>
        </div>
        <div className="flex h-8 flex-1 items-center justify-end rounded-tr-md bg-muted p-5 pr-3">
          <Skeleton className="h-6 w-6 rounded-full" />
        </div>
      </div>

      {/* Image Section */}
      <div className="h-auto overflow-hidden rounded-b-md border-t bg-muted-foreground/10 p-2">
        <figure className="relative h-52 overflow-hidden rounded-md">
          <Skeleton className="absolute inset-0 h-full w-full" />
          <div className="absolute bottom-0 right-0 z-10 rounded-tl-md bg-muted p-2 px-4">
            <Skeleton className="h-4 w-16 rounded-md" />
          </div>
        </figure>

        {/* Features */}
        <div className="flex flex-col gap-2 p-2 pt-4 text-xs font-semibold">
          <div className="flex items-center">
            <Skeleton className="h-4 w-16 rounded-md" />
            <ul className="ml-2 flex gap-2">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <Skeleton key={index} className="h-4 w-16 rounded-full" />
                ))}
            </ul>
          </div>

          {/* Amenities */}
          <div className="flex w-full items-center gap-2">
            <Skeleton className="h-4 w-20 rounded-md" />
            <ul className="flex gap-4">
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <Skeleton key={index} className="h-6 w-6 rounded-full" />
                ))}
            </ul>
          </div>
        </div>

        {/* Button */}
        <div className="my-2">
          <Button size="full" className="font-semibold" disabled>
            <Skeleton className="h-10 w-full rounded-md" />
          </Button>
        </div>
      </div>
    </div>
  );
}
