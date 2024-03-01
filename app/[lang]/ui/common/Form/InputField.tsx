import React from "react";
import { twMerge } from "tailwind-merge";

export function InputField({
  name,
  type,
  className = "",
  placeholder = "",
}: {
  name: string;
  type: string;
  className?: string;
  placeholder: string;
}) {
  return (
    <span
      className={twMerge(
        `border-neutral-100/50 focus-within:ring-[.18rem] focus-within:border-brand_accent focus-within:ring-brand_accent/30 inline-block w-full border rounded-md ${className}`
      )}
    >
      <input
        className="outline-none focus:outline-none active:outline-none rounded-md p-[.45rem] px-[.50rem]  w-full"
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </span>
  );
}
