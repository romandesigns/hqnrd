import { cn } from "@/lib/utils";
import React from "react";

/**
 * A functional component that renders a section element with optional custom class names.
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The content to be rendered inside the section.
 * @param {string} [props.className] - Optional additional class names to be applied to the section.
 *
 * @returns {JSX.Element} The rendered section element.
 */
export function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn(`w-full ${className}`)}>
      {/* <div className="block h-80" /> */}
      {children}
      {/* <div className="block h-80" /> */}
    </section>
  );
}
