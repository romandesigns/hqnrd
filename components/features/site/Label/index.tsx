import React from "react";

export function FormLabel({ label }: { label: string }) {
  return <p className="text-xs text-muted-foreground">{label}</p>;
}
