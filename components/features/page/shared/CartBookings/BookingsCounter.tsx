"use client";
import React from "react";
import { useReservatationStore } from "@/providers/ReservationProvider";

export function BookingsCounter() {
  const { reservations } = useReservatationStore((state) => ({
    reservations: state.reservations,
  }));

  return (
    reservations.length > 0 && (
      <>
        <span className="absolute bottom-5 left-5 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-sky-500" />
        </span>
        <span className="absolute bottom-[1.13rem] left-[1.09rem] inline-block rounded-md px-2 text-[.6rem] font-bold text-black">
          {reservations.length}
        </span>
      </>
    )
  );
}
