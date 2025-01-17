import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export function CardRoom() {
  return (
    <div className="glass h-full grid-cols-1 grid-rows-[auto_1fr_auto] rounded-lg border">
      <div className="flex items-end">
        <div className="flex-0.5 h-8 rounded-tl-md bg-muted p-1" />
        <div className="relative overflow-hidden bg-transparent p-1 after:absolute after:content-['']">
          <div className="rounded-b-md p-1 shadow-[0_42px_0_10px_hsl(var(--muted))]">
            <div className="rounded-md bg-foreground/10 p-1 px-6">
              <p className="text-sm font-bold uppercase">Double Cama</p>
              <small className="text-xs">
                Unit <span className="font-bold">#302</span>
              </small>
            </div>
          </div>
        </div>
        <div className="flex h-8 flex-1 items-center justify-start rounded-tr-md bg-muted p-2 font-bold" />
      </div>
      <div className="bg-muted">
        <div className="h-full p-2 px-4">
          <div className="relative flex items-center justify-between overflow-hidden rounded-md"></div>
        </div>
      </div>
      <div className="rounded-b-md border-t bg-muted-foreground/10 p-4">
        <Button size="full" className="font-semibold" asChild>
          <Link href={"/foo"}>View Rooms</Link>
        </Button>
      </div>
    </div>
  );
}
