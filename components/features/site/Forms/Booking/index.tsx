"use client";
import { Locale } from "@/i18n-config";
import { useReservatationStore } from "@/providers/ReservationProvider";
import { ReservationState } from "@/store/slices/reservation";
import { newBookingAction as createBooking } from "@/utils/actions/bookingActions";
import React, { useActionState } from "react";
import { Alert } from "./Alert";
import { FormDisplayData } from "./FormDisplayData";
import { FormInput } from "./FormInput";

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
  const [bookedReservation, setBookedReservation] =
    React.useState<ReservationState>({});

  const [errorMessages, setErrorMessages] = React.useState<
    { key: string; message: unknown }[]
  >([]);

  //@ts-ignore
  const initialState = {};
  const [state, formAction, pending] = useActionState(
    createBooking,
    initialState,
  );

  // const { addReservation, reservations } = useStore(
  //   reservationStoreState,
  //   (state) => state,
  // );

  const { reservations, addReservation } = useReservatationStore((state) => ({
    reservations: state.reservations,
    addReservation: state.addReservation,
    removeAllReservations: state.removeAllReservations,
  }));

  enum checkOutTime {
    time = "11:30 AM",
  }

  // Check if there are any errors in the form state
  // and display them in an alert dialog
  // This will be triggered when the form state changes
  // and the error messages are updated
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

  // Check if the room is already booked
  // and set the booked reservations state
  // This will be triggered when the unit number changes

  const checkIfRoomIsBooked = React.useCallback(
    (unitNumber: number, reservations: ReservationState[]) => {
      if (Object.entries(bookedReservation).length > 0) {
        // setErrorMessages((prev) => [
        //   ...prev,
        //   { key: "unitNumber", message: "Room is already booked" },
        // ]);
        // setOpen(true);
        setBookedReservation(bookedReservation);
        return true;
      }
    },
    [unitNumber],
  );

  React.useMemo(() => {
    checkIfRoomIsBooked(unitNumber, reservations);
  }, [unitNumber]);

  React.useEffect(() => {
    const booked = reservations.filter(
      (reservation) => reservation.unit === unitNumber,
    );
    if (booked.length > 0) {
      setBookedReservation(booked[0]);
    } else {
      setBookedReservation({});
    }
  }, [reservations.length, unitNumber]);

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
        pricePerNight: pricePerNight,
        lang: lang,
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
      {Object.keys(bookedReservation).length === 0 ? (
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
        <FormDisplayData bookedReservation={bookedReservation} lang={lang} />
      )}
    </>
  );
};
