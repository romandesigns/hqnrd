"use client";
import { Booking } from "@/components/features/site/Forms/Booking";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Locale } from "@/i18n-config";
import clsx from "clsx";

export function ReservationDialogForm({
  className,
  lang,
  unitNumber,
  unitCategory,
}: {
  className: string;
  lang: Locale;
  unitNumber: number;
  unitCategory: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild className={clsx(className)}>
        <Button variant="outline">Make Reservation</Button>
      </DialogTrigger>
      <DialogContent className="p-1 pb-1 md:p-3">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            <div className="flex items-center justify-start">
              <span>2,350$</span>
              <span className="mx-2 text-muted-foreground">/</span>
              <span className="font-black uppercase text-muted-foreground">
                Day
              </span>
            </div>
          </DialogTitle>
        </DialogHeader>
        <Booking
          unitNumber={unitNumber}
          unitCategory={unitCategory}
          lang={lang}
        />
      </DialogContent>
    </Dialog>
  );
}
