"use client";

import { Locale } from "@/i18n-config";
import { useReservatationStore } from "@/providers/ReservationProvider";
import { ReservationState } from "@/store/slices/reservation";
import { newBookingAction as createBooking } from "@/utils/actions/bookingActions";
import React, { useActionState, useEffect, useState, useCallback } from "react";
import { Alert } from "./Alert";
import { FormDisplayData } from "./FormDisplayData";
import { FormInput } from "./FormInput";
import { isBefore, isToday } from "date-fns";

type FormInputProps = {
  adultsCount: string;
  checkIn: string;
  checkInMessage: string;
  checkOut: string;
  childrensCount: string;
  unitCategory: string;
  unitNumber: string;
};

export type ErrorPropTypes = {
  key: string;
  heading?: string;
  message: React.ReactNode;
  type?: "error" | "warning" | "info" | "success" | "default";
};

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
  const [errorOpen, setErrorOpen] = useState(false);
  const [displayReservationInfo, setDisplayReservationInfo] = useState(false);
  const [bookedReservation, setBookedReservation] =
    useState<ReservationState | null>(null);
  const [errorMessages, setErrorMessages] = useState<ErrorPropTypes[]>([]);
  const initialState: Record<string, unknown> = {};

  const [state, formAction, pending] = useActionState(
    createBooking,
    initialState,
  );

  const { reservations, addReservation, updateReservation } =
    useReservatationStore((state) => ({
      reservations: state.reservations,
      addReservation: state.addReservation,
      updateReservation: state.updateReservation,
    }));

  enum checkOutTime {
    time = "11:30 AM",
  }

  // Trigger alert if errors are returned in state
  useEffect(() => {
    const errorArray = Object.entries(state || {}).map(([key, message]) => ({
      key,
      message: message as React.ReactNode,
    }));
    if (errorArray.length > 0) {
      setErrorMessages(errorArray);
      setErrorOpen(true);
    }
  }, [state]);

  // Detect if a room is already booked
  const checkIfRoomIsBooked = useCallback(
    (unitNumber: number, reservations: ReservationState[]) => {
      return reservations.some(
        (reservation) => reservation.unit === unitNumber,
      );
    },
    [],
  );

  // Set bookedReservation whenever reservations or unitNumber change
  useEffect(() => {
    const booked = reservations.find(
      (reservation) => reservation.unit === unitNumber,
    );
    setBookedReservation(booked ?? null);
  }, [reservations, unitNumber]);

  // const validateDatesInput = useCallback(
  //   (checkInDate: Date, checkOutDate: Date) => {
  //     const currentDate = new Date();
  //     const checkIn = new Date(checkInDate);
  //     const checkOut = new Date(checkOutDate);
  //     const isValidCheckIn = checkIn >= currentDate;
  //     const isValidCheckOut = checkOut > checkIn;
  //     const isValid = isValidCheckIn && isValidCheckOut;
  //     if (!isValid) {
  //       setErrorMessages([
  //         { key: "unitNumber", message: "Invalid check-in or check-out date." },
  //       ]);
  //       setErrorOpen(true);
  //     }
  //     return isValid;
  //   },
  //   [setErrorMessages, setErrorOpen],
  // );

  const checkFieldsFormValues = useCallback(
    (reservation: FormInputProps) => {
      const { checkIn, checkOut, adultsCount } = reservation;
      // Check for the number of adults
      if (Number(adultsCount) < 1) {
        setErrorMessages([
          {
            key: "invalidAdultsCount",
            type: "warning",
            heading: "Adults Count",
            message: "Enter the number of adults.",
          },
        ]);
        setErrorOpen(true);
        return;
      }
      if (isBefore(new Date(checkOut), new Date(checkIn))) {
        setErrorMessages([
          {
            key: "invalidDates",
            type: "warning",
            heading: "Invalid Dates",
            message: "Check-out date must be after check-in date.",
          },
        ]);
        setErrorOpen(true);
        return;
      }

      console.log(errorMessages);

      // const currentDate = new Date();
      // const checkIn = new Date(checkInDate);
      // const checkOut = new Date(checkOutDate);
      // const isValidCheckIn = checkIn >= currentDate;
      // const isValidCheckOut = checkOut > checkIn;
      // const isValid = isValidCheckIn && isValidCheckOut;
      // if (!isValid) {
      //   setErrorMessages([
      //     { key: "unitNumber", message: "Invalid check-in or check-out date." },
      //   ]);
      //   setErrorOpen(true);
      // }
      // return isValid;
    },
    [setErrorMessages, setErrorOpen],
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formValues = Object.fromEntries(formData.entries());

    const validation = checkFieldsFormValues(formValues as FormInputProps);
    const alreadyBooked = checkIfRoomIsBooked(unitNumber, reservations);
    if (!alreadyBooked && errorMessages.length === 0) {
      addReservation({
        adults: Number(formValues.adultsCount),
        children: Number(formValues.childrensCount),
        checkInDate: new Date(formValues.checkIn as string),
        checkOutDate: new Date(formValues.checkOut as string),
        bookingMessage: formValues.checkInMessage as string,
        unit: unitNumber,
        roomType: unitCategory,
        pricePerNight: pricePerNight,
        lang: lang,
        status: "added",
      });
    } else if (
      alreadyBooked &&
      errorMessages.length === 0 &&
      bookedReservation?.status === "updated"
    ) {
      updateReservation({
        adults: Number(formValues.adultsCount),
        children: Number(formValues.childrensCount),
        checkInDate: new Date(formValues.checkIn as string),
        checkOutDate: new Date(formValues.checkOut as string),
        bookingMessage: formValues.checkInMessage as string,
        unit: unitNumber,
        roomType: unitCategory,
        pricePerNight: pricePerNight,
        lang: lang,
        status: "added",
      });
    } else {
      setErrorMessages([
        {
          key: "roomBooked",
          heading: "Room Already Booked",
          message: "You already added this room to your cart.",
        },
      ]);
      setErrorOpen(true);
    }
  };

  console.log(bookedReservation);
  return (
    <>
      <Alert
        errorMessages={errorMessages}
        setErrorOpen={setErrorOpen}
        setErrorMessages={setErrorMessages}
      />
      {console.log(!checkIfRoomIsBooked(unitNumber, reservations))}
      {!checkIfRoomIsBooked(unitNumber, reservations) && !errorOpen && (
        <FormInput
          lang={lang}
          handleSubmit={handleSubmit}
          checkOutTime={checkOutTime}
          unitNumber={unitNumber}
          unitCategory={unitCategory}
          pending={pending}
          pricePerNight={pricePerNight}
          bookedReservation={bookedReservation ?? ({} as ReservationState)}
        />
      )}
      {displayReservationInfo && (
        <FormDisplayData
          bookedReservation={bookedReservation ?? ({} as ReservationState)}
          lang={lang}
        />
      )}

      {/* {Object.keys(bookedReservation).length === 0 ||
      bookedReservation.status === "updated" ||
      errorMessages.length > 0 ? (
        <FormInput
          lang={lang}
          handleSubmit={handleSubmit}
          checkOutTime={checkOutTime}
          unitNumber={unitNumber}
          unitCategory={unitCategory}
          pending={pending}
          pricePerNight={pricePerNight}
          bookedReservation={bookedReservation}
        />
      ) : errorMessages.length === 0 && bookedReservation.status === "added" ? (
        <FormDisplayData bookedReservation={bookedReservation} lang={lang} />
      ) : null} */}
    </>
  );
};
