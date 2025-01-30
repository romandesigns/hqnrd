"use client";
import React from "react";
import { IoMdArrowRoundBack } from "../icons";
import { useRouter } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button";

export function GoBack({ variant }: { variant: string }) {
  const router = useRouter();
  return (
    <Button
      variant={variant as keyof typeof buttonVariants}
      size="icon"
      onClick={() => router.back()}
    >
      <IoMdArrowRoundBack />
    </Button>
  );
}
