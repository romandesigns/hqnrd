"use client";
import { Button } from "@/components/ui/button";
import { useMobileNavigation } from "@/store/hooks";
import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";

export function ToggleNavigationBtn() {
  const { toggleMobileNavigation } = useMobileNavigation();
  return (
    <Button size="icon" variant="ghost" onClick={toggleMobileNavigation}>
      <HiMenuAlt2 size={35} />
    </Button>
  );
}
