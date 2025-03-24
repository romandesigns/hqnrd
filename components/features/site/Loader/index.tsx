"use client";
import React from "react";
import { mirage } from "ldrs";

export function Loader() {
  mirage.register();
  // @ts-ignore
  return <l-mirage size="60" speed="2.5" color="black" />;
}
