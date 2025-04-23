import { cn } from "@/lib/utils";
import React from "react";

export function RoomsCount({
  className,
  roomsCount,
}: {
  className?: string;
  roomsCount: number;
}) {
  return (
    <div
      className={cn(
        `flex items-center justify-start md:justify-end`,
        className,
      )}
    >
      <p className="mr-2 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        {/* <span>Showing</span> */}
        <span className="rounded-full bg-muted-foreground px-3 font-bold text-primary-foreground">
          {roomsCount}
        </span>
        <span>Rooms</span>
      </p>
    </div>
  );
}
