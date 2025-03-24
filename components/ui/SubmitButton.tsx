"use client";

import { Button } from "./button";
export default function SubmitButton({
  children,
  className = "",
  action,
}: {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  action: (formData: FormData) => Promise<{ [k: string]: string } | undefined>;
}) {
  return (
    <Button type="submit" className={`w-full ${className}`} formAction={action}>
      {children}
    </Button>
  );
}
