import React from "react";

export function FormLabel({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <p className={`mb-1.5 text-xs text-muted-foreground ${className}`}>
      {label}
    </p>
  );
}
