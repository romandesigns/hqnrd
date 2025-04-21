import React from "react";

export function FormLabel({ label }: { label: string }) {
  return <p className="mb-1.5 text-xs text-muted-foreground">{label}</p>;
}
