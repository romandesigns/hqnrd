import React from "react";

export function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return <section>{children}</section>;
}
