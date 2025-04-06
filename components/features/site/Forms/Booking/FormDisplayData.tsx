import { FaList } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";
import { ReservationState } from "@/store/slices/reservation";
import {
  checkDateDifference,
  checkIfDiscountIsApplicable,
  convertToLocaleString,
  formatDateString,
  getPriceWithDiscount,
  getTotalFees,
} from "@/utils/computeFees";
import clsx from "clsx";
import Link from "next/link";

type FormattedDateString = { ok: true; formattedDate: string };

export function FormDisplayData({
  bookedReservations,
  pricePerNight,
  lang,
}: {
  bookedReservations: ReservationState[];
  pricePerNight: number;
  lang: Locale;
}) {
  return (
    <div className="rounded-md p-2">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold">Room Already Added 🎊</h3>
        <Button size="icon" variant="ghost">
          <FaList />
        </Button>
      </div>
      <div className="mt-2 flex flex-col gap-1">
        {bookedReservations.map((reservation) => {
          const checkIn = formatDateString(
            reservation.checkInDate,
            "creative",
          ) as FormattedDateString;

          const checkOut = formatDateString(
            reservation.checkOutDate,
            "creative",
          ) as FormattedDateString;

          const totalDays = checkDateDifference(
            reservation.checkInDate,
            reservation.checkOutDate,
          ).days;

          const discountPercent = checkIfDiscountIsApplicable(totalDays);
          const hasDiscount = discountPercent > 0;
          const baseTotal = getTotalFees(pricePerNight, totalDays);
          const calculationFees = getPriceWithDiscount(
            totalDays,
            pricePerNight,
          );

          return (
            <div key={reservation.unit} className="flex flex-col gap-2">
              <table className="w-full text-left text-[.65rem]">
                <tbody>
                  <tr className="grid grid-cols-[1.5fr_2fr] grid-rows-1">
                    <th className="rounded-tl-sm bg-secondary p-2">Adults</th>
                    <td className="text-md flex items-center justify-start border border-secondary pl-2 font-semibold">
                      {reservation.adults}
                    </td>
                  </tr>
                  <tr className="grid grid-cols-[1.5fr_2fr] grid-rows-1">
                    <th className="bg-secondary p-2">Children</th>
                    <td className="text-md flex items-center justify-start border border-secondary pl-2 font-semibold">
                      {reservation.children}
                    </td>
                  </tr>
                  <tr className="grid grid-cols-[1.5fr_2fr] grid-rows-1">
                    <th className="bg-secondary p-2">Check In</th>
                    <td className="text-md flex items-center justify-start border border-secondary pl-2 font-semibold">
                      {checkIn.formattedDate}
                    </td>
                  </tr>
                  <tr className="grid grid-cols-[1.5fr_2fr] grid-rows-1">
                    <th className="bg-secondary p-2">Check Out</th>
                    <td className="text-md flex items-center justify-start border border-secondary pl-2 font-semibold">
                      {checkOut.formattedDate}
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="mt-4 w-full text-left text-[.65rem]">
                <tbody>
                  <tr className="grid grid-cols-[1.5fr_2fr] grid-rows-1">
                    <th className="bg-secondary p-2">Days</th>
                    <td className="text-md flex items-center justify-start border border-secondary pl-2 font-semibold">
                      {totalDays}
                    </td>
                  </tr>

                  <tr className="grid grid-cols-[1.5fr_2fr] grid-rows-1">
                    <th className="bg-secondary p-2">Total Fees</th>
                    <td className="text-md flex items-center justify-start border border-secondary pl-2 font-semibold">
                      <span
                        className={clsx(
                          hasDiscount &&
                            "mr-2 text-muted-foreground line-through",
                        )}
                      >
                        {convertToLocaleString(baseTotal, lang)}
                      </span>

                      {hasDiscount && (
                        <span>
                          {convertToLocaleString(
                            calculationFees.finalTotal,
                            lang,
                          )}
                        </span>
                      )}
                    </td>
                  </tr>

                  <tr className="grid grid-cols-[1.5fr_2fr] grid-rows-1">
                    <th className="bg-secondary p-2">Reservation Deposit</th>
                    <td className="text-md flex items-center justify-start border border-secondary pl-2 font-semibold">
                      <span
                        className={clsx(
                          hasDiscount &&
                            "mr-2 text-muted-foreground line-through",
                        )}
                      >
                        {convertToLocaleString(baseTotal / 2, lang)}
                      </span>

                      {hasDiscount && (
                        <span>
                          {convertToLocaleString(
                            calculationFees.reservationDeposit,
                            lang,
                          )}
                        </span>
                      )}
                    </td>
                  </tr>

                  <tr className="grid grid-cols-[1.5fr_2fr] grid-rows-1">
                    <th className="bg-secondary p-2">Discount Applied</th>
                    <td className="text-md flex items-center justify-start border border-secondary pl-2 font-semibold">
                      {`${discountPercent}%`}
                    </td>
                  </tr>

                  <tr className="grid grid-cols-[1.5fr_2fr] grid-rows-1">
                    <th className="bg-secondary p-2">Saved After Discount</th>
                    <td className="text-md flex items-center justify-start border border-secondary pl-2 font-semibold">
                      {convertToLocaleString(
                        calculationFees.discountAmount,
                        lang,
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div>
                <div className="mt-4 text-center text-[.7rem] font-normal text-muted-foreground">
                  <p>
                    <span className="font-semibold text-primary">5%</span>{" "}
                    Discount when booking{" "}
                    <span className="font-semibold text-primary">5</span> days
                    or more
                  </p>
                  <p>
                    <span className="font-semibold text-primary">8%</span>{" "}
                    Discount when booking{" "}
                    <span className="font-semibold text-primary">15</span> days
                    or more
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2 pt-6">
                  <Button className="flex-1" variant="secondary" asChild>
                    <Link href={`/${lang}/habitaciones`}>Add More</Link>
                  </Button>
                  <Button className="flex-1">Pay</Button>
                </div>

                <div className="mt-4 space-x-4 text-right">
                  <small className="cursor-pointer text-muted-foreground hover:underline">
                    Update
                  </small>
                  <small className="cursor-pointer text-red-500 hover:underline">
                    Remove
                  </small>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
