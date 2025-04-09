import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaList } from "@/components/icons";
import { BookingsCounter } from "./BookingsCounter";
import { CardBooking } from "./CardBooking";
import { ScrollArea } from "@/components/ui/scroll-area";

export function CartBookings({ variant }: { variant: ButtonProps["variant"] }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={variant}
          size="icon"
          className="relative bg-transparent"
        >
          <BookingsCounter />
          <FaList />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left">
            Rooms Added{" "}
            <span className="ml-2 rounded-full bg-muted px-4 text-sm">8</span>
          </SheetTitle>
          <SheetDescription className="flex gap-4 text-left text-xs">
            <p>
              Deposite:{" "}
              <span className="ml-2 font-bold text-primary">8,205</span>
            </p>
            <p>
              Total: <span className="ml-2 font-bold text-primary">4,105</span>
            </p>
          </SheetDescription>
        </SheetHeader>
        <div className="@container mt-2 h-[calc(100%-8rem)]">
          <ScrollArea className="h-full rounded-md">
            {Array.from({ length: 25 }).map((_, i) => (
              <CardBooking key={i} />
            ))}
          </ScrollArea>
        </div>
        <div className="!lg:flex-col flex w-full flex-col rounded-md border p-2 pt-0">
          <div className="py-2 text-center text-xs font-bold">Make Payment</div>
          <div className="grid grid-cols-2 gap-2">
            <Button type="submit" size="sm">
              Deposite
            </Button>
            <Button type="submit" size="sm">
              Full Amount
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
