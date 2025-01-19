import { cn } from "@/lib/utils";
import React from "react";

/**
 * A functional component that renders its children within a container div.
 * The container's flex direction can be either horizontal or vertical.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be rendered inside the container.
 * @param {string} [props.className] - Optional additional class names to apply to the container.
 * @param {"horizontal" | "vertical"} [props.direction="vertical"] - The flex direction of the container.
 * @returns {JSX.Element} The rendered container component.
 */
export function Content({
  children,
  className,
  direction = "vertical",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "horizontal" | "vertical";
}) {
  return (
    <div
      className={cn(
        `mx-auto flex w-full max-w-7xl ${direction === "horizontal" ? "flex-row" : "flex-col"} ${className}`,
      )}
    >
      {children}
    </div>
  );
}
