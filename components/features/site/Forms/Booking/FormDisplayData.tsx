import { CartBookings } from "@/components/features/page/shared/CartBookings";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";
import { ReservationState } from "@/store/slices/reservation";
import { convertToLocaleString, formatDateString } from "@/utils/computeFees";
import clsx from "clsx";
import Link from "next/link";
import { RemoveBtn } from "./RemoveBtn";
import { EditBtn } from "./EditBtn";

type FormattedDateString = { ok: true; formattedDate: string };

export function FormDisplayData({
  bookedReservation,
  lang,
}: {
  bookedReservation: ReservationState;
  lang: Locale;
}) {
  const checkIn = formatDateString(
    bookedReservation.checkInDate,
    "creative",
  ) as FormattedDateString;

  const checkOut = formatDateString(
    bookedReservation.checkOutDate,
    "creative",
  ) as FormattedDateString;

  const hasDiscount = (bookedReservation.discountPercentage ?? 0) > 0;

  return (
    <div className="rounded-md py-2">
      <div className="flex items-center justify-between px-3">
        <h3 className="text-sm font-bold">Room Already Added 🎊</h3>
        <CartBookings variant="outline" />
      </div>

      {/* Guests */}
      <fieldset className="mt-2 border-t">
        <legend className="px-3 text-xs text-muted-foreground">Guests</legend>
        <div className="flex gap-4 p-2 pt-3">
          <div className="flex flex-col items-start justify-center">
            <span className="rounded-full bg-muted px-2 py-1 text-[0.55rem]">
              Adults
            </span>
            <p className="text-md pl-2 font-bold">{bookedReservation.adults}</p>
          </div>
          <div className="flex flex-col items-start justify-center">
            <span className="rounded-full bg-muted px-2 py-1 text-[0.55rem]">
              Children
            </span>
            <p className="text-md pl-2 font-bold">
              {bookedReservation.children}
            </p>
          </div>
        </div>
      </fieldset>

      {/* Reservation */}
      <fieldset className="mt-2 border-t">
        <legend className="px-3 text-xs text-muted-foreground">
          Reservation Dates
        </legend>
        <div className="flex w-full justify-between gap-4 p-2 pt-3">
          <div className="flex flex-col justify-between gap-4">
            <div className="flex flex-col items-start justify-center">
              <span className="rounded-full bg-muted px-2 py-1 text-[0.55rem]">
                Check In
              </span>
              <p className="mt-1 pl-2 text-sm font-bold">
                {checkIn.formattedDate}
              </p>
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="rounded-full bg-muted px-2 py-1 text-[0.55rem]">
                Check Out
              </span>
              <p className="mt-1 pl-2 text-sm font-bold">
                {" "}
                {checkOut.formattedDate}
              </p>
            </div>
          </div>
          <div className="flex w-32 flex-col items-start justify-center">
            <span className="rounded-full bg-muted px-2 py-1 text-[0.55rem]">
              Days
            </span>
            <p className="pl-2 text-lg font-semibold">
              {bookedReservation.totalDays}
            </p>
          </div>
        </div>
      </fieldset>

      {/* Reservation Fees */}
      <fieldset className="mt-4 border-t">
        <legend className="px-3 text-xs text-muted-foreground">
          Reservation Fees
        </legend>

        <div className="flex w-full items-center justify-between gap-4 p-2">
          <div className="flex flex-col justify-between gap-4">
            <div className="flex flex-col items-start justify-center">
              <span className="rounded-full bg-muted px-2 py-1 text-[0.55rem]">
                Total Amount
              </span>
              <p className="mt-1 pl-2 text-sm font-bold">
                <span
                  className={clsx(
                    hasDiscount && "mr-2 text-muted-foreground line-through",
                  )}
                >
                  {convertToLocaleString(bookedReservation.totalAmount, lang)}
                </span>
                {hasDiscount && (
                  <span>
                    {convertToLocaleString(
                      bookedReservation.totalAmountAfterDiscount,
                      lang,
                    )}
                  </span>
                )}
              </p>
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="rounded-full bg-muted px-2 py-1 text-[0.55rem]">
                Deposite
              </span>
              <p className="mt-1 pl-2 text-sm font-bold">
                <span
                  className={clsx(
                    hasDiscount && "mr-2 text-muted-foreground line-through",
                  )}
                >
                  {convertToLocaleString(bookedReservation.deposite, lang)}
                </span>

                {hasDiscount && (
                  <span>
                    {convertToLocaleString(
                      bookedReservation.depositeAmountAfterDiscount,
                      lang,
                    )}
                  </span>
                )}
              </p>
            </div>
          </div>

          <div className="w-32 flex-col items-start justify-center">
            <span className="rounded-full bg-muted px-2 py-1 text-[0.55rem]">
              Discounted
            </span>
            <p className="pl-2 text-lg font-semibold">
              {bookedReservation.discountPercentage}%
            </p>
          </div>
        </div>
      </fieldset>

      <div className="rounded-md border border-muted bg-background/30 p-2 px-3">
        <div className="mt-4 text-center text-[.7rem] font-semibold uppercase text-muted-foreground">
          <p>
            <span className="font-black text-primary">5%</span> Discount when
            booking <span className="font-black text-primary">5</span> days or
            more
          </p>
          <p>
            <span className="font-black text-primary">8%</span> Discount when
            booking <span className="font-black text-primary">15</span> days or
            more
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 pt-6">
          <Button className="flex-1" variant="secondary" asChild>
            <Link href={`/${lang}/habitaciones`}>Add More</Link>
          </Button>
          <Button className="flex-1">Pay</Button>
        </div>

        <div className="mt-4 space-x-4 text-right">
          <EditBtn unit={bookedReservation.unit} />
          <RemoveBtn unit={bookedReservation.unit} />
        </div>
      </div>
    </div>
  );
}
