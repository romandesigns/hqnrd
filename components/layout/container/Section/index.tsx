import { cn } from "@/lib/utils";
import React from "react";

export function Section({
  children,
  className,
  sectionName,
}: {
  children: React.ReactNode;
  className?: string;
  sectionName?: string;
}) {
  return (
    <section className={cn(`w-full ${className}`)}>
      {/* <div className="block h-80" /> */}
      {children}
      {/* <div className="block h-80" /> */}
    </section>
  );
}
