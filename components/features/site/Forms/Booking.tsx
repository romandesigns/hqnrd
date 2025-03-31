"use client";
import {
  BiSolidMessageSquareError,
  FaList,
  MdDiscount,
} from "@/components/icons";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { DateAndTimePicker } from "@/components/ui/DateAndTimePicker";
import { InputNumber } from "@/components/ui/form/InputNumber";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Locale } from "@/i18n-config";
import { newBookingAction as createBooking } from "@/utils/actions/bookingActions";
import Form from "next/form";
import React, { useActionState } from "react";
import { Loader } from "../Loader";
import { reservationStoreState } from "@/store/reservationStore";
import { useStore } from "zustand";
import { ReservationState } from "@/store/slices/reservation";
import { differenceInCalendarDays } from "date-fns";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export const Booking = ({
  lang,
  unitNumber,
  unitCategory,
  pricePerNight,
}: {
  lang: Locale;
  unitNumber: number;
  unitCategory: string;
  pricePerNight: number;
}) => {
  const [open, setOpen] = React.useState(false);
  const [isBooked, setIsBooked] = React.useState<ReservationState[]>([]);
  const [errorMessages, setErrorMessages] = React.useState<
    { key: string; message: unknown }[]
  >([]);
  const initialState = {};

  const { addReservation, reservations } = useStore(
    reservationStoreState,
    (state) => state,
  );

  console.log(reservations);
  //@ts-ignore
  const [state, formAction, pending] = useActionState(
    createBooking,
    initialState,
  );

  enum checkOutTime {
    time = "11:30 AM",
  }

  React.useEffect(() => {
    const displayFormErrors = () => {
      const errorArray = Object.entries(state || {}).map(([key, message]) => ({
        key,
        message,
      }));

      if (errorArray.length > 0) {
        setErrorMessages(errorArray);
        setOpen(true);
      }
    };
    displayFormErrors();
  }, [state]);

  React.useEffect(() => {
    checkIfRoomIsAlreadyBooked(unitNumber, reservations);
  }, [unitNumber]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formValues = Object.fromEntries(formData.entries());
    // Check if the room is already booked
    const checkResult = checkIfRoomIsAlreadyBooked(unitNumber, reservations);
    // Add the reservation to the store
    if (!checkResult) {
      addReservation({
        adults: Number(formValues.adultsCount),
        children: Number(formValues.childrensCount),
        checkInDate: new Date(formValues.checkIn as string),
        checkOutDate: new Date(formValues.checkOut as string),
        bookingMessage: formValues.checkInMessage as string,
        unit: unitNumber,
        roomType: unitCategory,
      });
    }
    // Call the action to create a booking
  };

  const checkIfRoomIsAlreadyBooked = React.useCallback(
    (unitNumber: number, reservations: ReservationState[]) => {
      const isBooked = reservations.filter((reservation) => {
        return reservation.unit === unitNumber;
      });
      if (isBooked.length > 0) {
        // setErrorMessages((prev) => [
        //   ...prev,
        //   { key: "unitNumber", message: "Room is already booked" },
        // ]);
        // setOpen(true);
        setIsBooked(isBooked);
        return true;
      }
    },
    [unitNumber],
  );

  return (
    <>
      <AlertDialog open={errorMessages.length > 0} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center justify-start gap-2 text-yellow-400">
              <span>Error Message</span>
              <BiSolidMessageSquareError />
            </AlertDialogTitle>
            <AlertDialogDescription>
              {errorMessages.map((error) => (
                <span key={error.key}>
                  <strong>{error.key}:</strong> {String(error.message)}
                </span>
              ))}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => {
                setOpen(false);
                setErrorMessages([]);
              }}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {!isBooked.length ? (
        <Form
          className="space-y-6 rounded-md py-8 lg:p-2"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center justify-center gap-4">
            {/* Adults: Number Input */}
            <InputNumber
              name="adultsCount"
              inputNumberLabel="Adults"
              iconName="FaUser"
              iconSize={13}
            />
            {/* Children: Number Input*/}
            <InputNumber
              name="childrensCount"
              inputNumberLabel="Children"
              iconName="FaChild"
              iconSize={13}
            />
          </div>
          <div className="flex items-center justify-center gap-1">
            {/* Check In: Date Input */}
            <DateAndTimePicker
              lang={lang}
              granularity="minute"
              icon="calendar"
              hideIcon={true}
              label="Check In"
              minDate={new Date(new Date().setHours(0, 0, 0, 0))}
              displayFormat={{ hour12: "MM/dd/yyyy hh:mm a" }}
              inputName="checkIn"
              align="start"
              sideOffset={-180}
            />
            {/* Check Out: Date Input */}
            <DateAndTimePicker
              lang={lang}
              granularity="day"
              icon="calendar"
              hideIcon={true}
              label="Check Out"
              minDate={new Date(new Date().setHours(0, 0, 0, 0))}
              displayFormat={{ hour12: "MM/dd/yyyy hh:mm a" }}
              inputName="checkOut"
              time={checkOutTime.time}
              align="end"
              sideOffset={-180}
            />
          </div>
          <div className="">
            <Label htmlFor="message" className="text-muted-foreground">
              Message (Optional)
            </Label>
            <Textarea className="h-36" name="checkInMessage" />
            <input
              name="unitNumber"
              value={unitNumber}
              readOnly
              className="hidden"
            />
            <input
              name="unitCategory"
              value={unitCategory}
              readOnly
              className="hidden"
            />
            <Button
              size="full"
              className="mt-8 py-5"
              type="submit"
              disabled={pending}
            >
              {pending ? <Loader /> : "Add Booking"}
            </Button>
          </div>
        </Form>
      ) : (
        <div className="rounded-md p-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold">Room Already Added 🎊</h3>
            <Button size="icon" variant="ghost">
              <FaList />
            </Button>
          </div>
          <div className="mt-2 flex flex-col gap-1">
            {isBooked.map((reservation) => {
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
                          {differenceInCalendarDays(checkOutDate, checkInDate)}
                        </td>
                      </tr>
                      <tr>
                        <th className="bg-secondary p-2 pr-4">Fees</th>
                        <td className="text-md border border-secondary pl-2 font-bold">
                          {differenceInCalendarDays(checkOutDate, checkInDate)}{" "}
                          * {pricePerNight} ={" "}
                          {(
                            differenceInCalendarDays(
                              checkOutDate,
                              checkInDate,
                            ) * Number(pricePerNight)
                          ).toLocaleString(lang === "es" ? "es-DO" : "en-US", {
                            style: "currency",
                            currency: lang === "es" ? "DOM" : "USD",
                          })}
                        </td>
                      </tr>
                      <tr>
                        <th className="bg-secondary p-2 pr-4">Reservation</th>
                        <td className="text-md border border-secondary pl-2 font-bold">
                          {differenceInCalendarDays(checkOutDate, checkInDate)}{" "}
                          * {pricePerNight} ={" "}
                          {(
                            differenceInCalendarDays(
                              checkOutDate,
                              checkInDate,
                            ) * Number(pricePerNight)
                          ).toLocaleString(lang === "es" ? "es-DO" : "en-US", {
                            style: "currency",
                            currency: lang === "es" ? "DOM" : "USD",
                          })}{" "}
                          / 2 ={" "}
                          {(differenceInCalendarDays(
                            checkOutDate,
                            checkInDate,
                          ) *
                            Number(pricePerNight)) /
                            2}
                        </td>
                      </tr>
                      <tr>
                        <th className="bg-secondary p-2 pr-4">Discount</th>
                        <td className="text-md border border-secondary pl-2 font-bold">
                          {differenceInCalendarDays(checkOutDate, checkInDate)}{" "}
                          * {pricePerNight} ={" "}
                          {(
                            differenceInCalendarDays(
                              checkOutDate,
                              checkInDate,
                            ) * Number(pricePerNight)
                          ).toLocaleString(lang === "es" ? "es-DO" : "en-US", {
                            style: "currency",
                            currency: lang === "es" ? "DOM" : "USD",
                          })}{" "}
                          / 2 ={" "}
                          {(differenceInCalendarDays(
                            checkOutDate,
                            checkInDate,
                          ) *
                            Number(pricePerNight)) /
                            2}
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
      )}
    </>
  );
};
