"use client";
import React from "react";
import { IconButton } from "rsuite";
import { IoMdArrowRoundBack } from "@/app/[lang]/ui/icons";

export function BackButton({ className }: { className: string }) {
  return (
    <IconButton
      icon={<IoMdArrowRoundBack size={20} />}
      circle
      size="xs"
      appearance="subtle"
      active
      className={`!bg-brand_neutral !text-white ring-[1rem] ring-white ${className}`}
    />
  );
}
