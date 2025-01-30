import React from "react";

export function FormLabel({ label }: { label: string }) {
  return <p className="pb-1 text-xs text-muted-foreground">{label}</p>;
}
