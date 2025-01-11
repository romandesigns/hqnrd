"use client";
import { Button } from "@/components/ui/button";
import { useMobileNavigation } from "@/store/hooks";
import useNavigationToggle from "@/store/navtoggle";
import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";

export function ToggleNavigationBtn() {
  const { isOpen, toggleMobileNavigation } = useMobileNavigation();
  console.log(isOpen);
  return (
    <Button size="icon" variant="ghost" onClick={toggleMobileNavigation}>
      <HiMenuAlt2 size={35} />
    </Button>
  );
}
