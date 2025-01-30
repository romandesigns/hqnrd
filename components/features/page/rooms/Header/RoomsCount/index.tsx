import { cn } from "@/lib/utils";
import React from "react";

export function RoomsCount({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        `flex w-full items-center justify-start px-2 py-4 md:justify-end`,
        className,
      )}
    >
      <p className="mx-2 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <span>Showing</span>
        <span className="rounded-full bg-muted-foreground px-3 text-primary-foreground">
          16
        </span>
        <span>Rooms</span>
      </p>
    </div>
  );
}
