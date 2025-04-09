import React from "react";

export function CardBooking() {
  return (
    <div className="@sm:grid-cols-[7rem_1fr] @sm:gap-2 @sm:h-28 borders my-1 grid h-48 grid-rows-[7rem_5rem] overflow-hidden rounded-md">
      <div className="@sm:bg-purple-500 @sm:rounded-md @sm:aspect-square bg-green-500" />
      <div className="@sm:rounded-md rounded-b-md bg-red-500">Content here</div>
    </div>
  );
}
