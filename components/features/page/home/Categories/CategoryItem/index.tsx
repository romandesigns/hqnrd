import React from "react";
import { FaCube } from "@/components/icons";
import { CardCategory } from "../CardCategory";

export function CategoryItem() {
  return (
    <CardCategory
      totalRooms={5}
      title="Basic"
      description="Perfect for solo travelers seeking simplicity and comfort."
      path="/habitaciones?basicas"
    >
      <div className="flex aspect-square items-center justify-center rounded-md bg-foreground p-2 text-background">
        <FaCube size={18} />
      </div>
    </CardCategory>
  );
}
