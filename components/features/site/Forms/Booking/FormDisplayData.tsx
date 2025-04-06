import React from "react";
import { Button } from "@/components/ui/button";
import { FaList } from "@/components/icons";
import { ReservationState } from "@/store/slices/reservation";
import { checkDateDifference } from "@/utils/dateDifferenceCheck";
import { Locale } from "@/i18n-config";
import Link from "next/link";

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
          const [checkInDate, checkInTime] = reservation.checkInDate
            ?.toLocaleString()
            .replace(":00", "")
            .split(",");
          const [checkOutDate, checkOutTime] = reservation.checkOutDate
            ?.toLocaleString()
            .replace(":00", "")
            .split(",");

          const checkInDateAndTime = `🗓️ ${checkInDate} ⏰ ${checkInTime}`;
          const checkOutDateAndTime = `🗓️ ${checkOutDate} ⏰ ${checkOutTime}`;
          return (
            <div key={reservation.unit} className="flex flex-col gap-2">
              <table className="w-full text-left text-xs">
                <tbody>
                  <tr>
                    <th className="rounded-tl-sm bg-secondary p-2 pr-4">
                      Adults
                    </th>
                    <td className="text-md border border-secondary pl-2 font-bold">
                      {reservation.adults}
                    </td>
                  </tr>
                  <tr>
                    <th className="bg-secondary p-2 pr-4">Children</th>
                    <td className="text-md border border-secondary pl-2 font-bold">
                      {reservation.children}
                    </td>
                  </tr>
                  <tr>
                    <th className="bg-secondary p-2 pr-4">Check In</th>
                    <td className="text-md border border-secondary pl-2 font-bold">
                      {checkInDateAndTime}
                    </td>
                  </tr>
                  <tr>
                    <th className="bg-secondary p-2 pr-4">Check Out</th>
                    <td className="text-md border border-secondary pl-2 font-bold">
                      {" "}
                      {checkOutDateAndTime}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="w-full text-left text-xs">
                <tbody>
                  <tr>
                    <th className="bg-secondary p-2 pr-4">Days</th>
                    <td className="text-md border border-secondary pl-2 font-bold">
                      {/* {checkDateDifference(checkOutDate, checkInDate)} */}
                    </td>
                  </tr>
                  <tr>
                    <th className="bg-secondary p-2 pr-4">Fees</th>
                    <td className="text-md border border-secondary pl-2 font-bold">
                      {/* {checkDateDifference(checkOutDate, checkInDate)} *{" "}
                      {pricePerNight} ={" "}
                      {(
                        checkDateDifference(checkOutDate, checkInDate) *
                        Number(pricePerNight)
                      ).toLocaleString(lang === "es" ? "es-DO" : "en-US", {
                        style: "currency",
                        currency: lang === "es" ? "DOM" : "USD",
                      })} */}
                    </td>
                  </tr>
                  <tr>
                    <th className="bg-secondary p-2 pr-4">Reservation</th>
                    <td className="text-md border border-secondary pl-2 font-bold">
                      {/* {checkDateDifference(checkOutDate, checkInDate)} *{" "}
                      {pricePerNight} ={" "}
                      {(
                        checkDateDifference(checkOutDate, checkInDate) *
                        Number(pricePerNight)
                      ).toLocaleString(lang === "es" ? "es-DO" : "en-US", {
                        style: "currency",
                        currency: lang === "es" ? "DOM" : "USD",
                      })}{" "}
                      / 2 ={" "}
                      {(checkDateDifference(checkOutDate, checkInDate) *
                        Number(pricePerNight)) /
                        2} */}
                    </td>
                  </tr>
                  <tr>
                    <th className="bg-secondary p-2 pr-4">Discount</th>
                    <td className="text-md border border-secondary pl-2 font-bold">
                      {/* {checkDateDifference(checkOutDate, checkInDate)} *{" "}
                      {pricePerNight} ={" "}
                      {(
                        checkDateDifference(checkOutDate, checkInDate) *
                        Number(pricePerNight)
                      ).toLocaleString(lang === "es" ? "es-DO" : "en-US", {
                        style: "currency",
                        currency: lang === "es" ? "DOM" : "USD",
                      })}{" "}
                      / 2 ={" "}
                      {(checkDateDifference(checkOutDate, checkInDate) *
                        Number(pricePerNight)) /
                        2} */}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div>
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
