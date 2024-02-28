import React from "react";
import { twMerge } from "tailwind-merge";

export function Header({
  children,
  className,
}: {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}) {
  return <header className={twMerge(`${className}`)}>{children}</header>;
}
