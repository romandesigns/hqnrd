"use client";
import React from "react";
import { useReservatationStore } from "@/providers/ReservationProvider";

export function BookedStatus({ unitNumber }: { unitNumber: number }) {
  const { reservations } = useReservatationStore((state) => ({
    reservations: state.reservations,
  }));
  const isRoomAddedToReservation = reservations.some(
    (reservation) => reservation.unit === unitNumber,
  );
  return (
    isRoomAddedToReservation && (
      <div className="absolute right-1 top-1 z-[2] rounded-full bg-foreground p-1 px-4 text-xs font-bold text-background">
        Added
      </div>
    )
  );
}
