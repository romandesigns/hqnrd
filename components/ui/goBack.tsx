"use client";
import React from "react";
import { Button } from "./button";
import { IoMdArrowRoundBack } from "../icons";
import { useRouter } from "next/navigation";
export function GoBack() {
  const router = useRouter();
  return (
    <Button variant="outline" size="icon" onClick={() => router.back()}>
      <IoMdArrowRoundBack />
    </Button>
  );
}
