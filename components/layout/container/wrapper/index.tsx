import React from "react";

export function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return <div>{children}</div>;
}
