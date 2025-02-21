import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export function CardCategory({
  title,
  description,
  children,
  path,
  totalRooms,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  path: string;
  totalRooms: number;
}) {
  return (
    <div className="glass h-full w-full max-w-[28rem] grid-cols-1 grid-rows-[auto_1fr_auto] rounded-lg border">
      <div className="flex items-end">
        <div className="flex-0.5 h-4 rounded-tl-md bg-muted p-1" />
        <div className="relative overflow-hidden bg-transparent p-1 after:absolute after:content-['']">
          <div className="rounded-b-md p-1 shadow-[0_40px_0_10px_hsl(var(--muted))]">
            {children}
          </div>
        </div>
        <div className="flex h-4 flex-1 items-center justify-start rounded-tr-md bg-muted p-2 font-bold" />
      </div>
      <div className="bg-muted">
        <div className="h-full p-2 px-4 pt-0">
          <div className="relative flex items-center justify-between overflow-hidden rounded-md">
            <h3 className="text-md relative z-[1] font-black uppercase">
              {title}
            </h3>
            <p className="flex items-center space-x-1">
              <small>Total</small>
              <b>{totalRooms}</b>
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-b-md border-t bg-muted-foreground/10 p-4">
        <p className="py-6 pt-4 text-xs font-normal">{description}</p>
        <Button size="full" className="font-semibold" asChild>
          <Link href={path}>View Rooms</Link>
        </Button>
      </div>
    </div>
  );
}
