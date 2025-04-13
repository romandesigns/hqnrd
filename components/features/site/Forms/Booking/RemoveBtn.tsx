"use client";
import React from "react";
import { useReservatationStore } from "@/providers/ReservationProvider";

export function RemoveBtn({ unit }: { unit: number }) {
  const { removeBooking } = useReservatationStore((state) => state);
  return (
    <small
      className="cursor-pointer text-red-500 hover:underline"
      onClick={() => removeBooking(unit)}
    >
      Remove
    </small>
  );
}
