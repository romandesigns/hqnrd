"use client";
import { useReservatationStore } from "@/providers/ReservationProvider";
import React from "react";

export function EditBtn({ unit }: { unit: number }) {
  const { changeMode } = useReservatationStore((state) => state);
  return (
    <small
      className="cursor-pointer text-muted-foreground hover:underline"
      onClick={() => changeMode(unit, "updated")}
    >
      Update
    </small>
  );
}
