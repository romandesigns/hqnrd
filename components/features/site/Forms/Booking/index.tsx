"use client";
import { Locale } from "@/i18n-config";
import { reservationStoreState } from "@/store/reservationStore";
import { ReservationState } from "@/store/slices/reservation";
import { newBookingAction as createBooking } from "@/utils/actions/bookingActions";
import React, { useActionState } from "react";
import { useStore } from "zustand";
import { Alert } from "./Alert";
import { FormInput } from "./FormInput";
import { FormDisplayData } from "./FormDisplayData";

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
  const [bookedReservations, setBookedReservations] = React.useState<
    ReservationState[]
  >([]);

  const [errorMessages, setErrorMessages] = React.useState<
    { key: string; message: unknown }[]
  >([]);

  //@ts-ignore
  const initialState = {};
  const [state, formAction, pending] = useActionState(
    createBooking,
    initialState,
  );

  const { addReservation, reservations } = useStore(
    reservationStoreState,
    (state) => state,
  );

  enum checkOutTime {
    time = "11:30 AM",
  }

  React.useMemo(() => {
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

  const checkIfRoomIsBooked = React.useCallback(
    (unitNumber: number, reservations: ReservationState[]) => {
      const bookedReservations = reservations.filter((reservation) => {
        return reservation.unit === unitNumber;
      });
      if (bookedReservations.length > 0) {
        // setErrorMessages((prev) => [
        //   ...prev,
        //   { key: "unitNumber", message: "Room is already booked" },
        // ]);
        // setOpen(true);
        setBookedReservations(bookedReservations);
        return true;
      }
    },
    [unitNumber],
  );

  React.useMemo(() => {
    checkIfRoomIsBooked(unitNumber, reservations);
  }, [unitNumber]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formValues = Object.fromEntries(formData.entries());
    const checkResult = checkIfRoomIsBooked(unitNumber, reservations);
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
  };

  return (
    <>
      <Alert
        errorMessages={errorMessages}
        setOpen={setOpen}
        setErrorMessages={setErrorMessages}
      />
      {!bookedReservations.length ? (
        <FormInput
          lang={lang}
          handleSubmit={handleSubmit}
          checkOutTime={checkOutTime}
          unitNumber={unitNumber}
          unitCategory={unitCategory}
          pending={pending}
          pricePerNight={pricePerNight}
        />
      ) : (
        <FormDisplayData
          bookedReservations={bookedReservations}
          pricePerNight={pricePerNight}
          lang={lang}
        />
      )}
    </>
  );
};
