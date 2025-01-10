import React from "react";

export function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className="mx-auto w-full max-w-7xl border">{children}</div>;
}
