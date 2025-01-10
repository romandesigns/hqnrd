"use client";
import React from "react";
import { Footer, Navigation } from "../..";
import { Locale } from "@/i18n-config";

export function ClientLayout({
  children,
  className,
  showFooter = true,
  showNavigation = true,
  lang,
}: {
  children: React.ReactNode;
  className?: string;
  showFooter?: boolean;
  showNavigation?: boolean;
  lang: Locale;
}) {
  return (
    <>
      {showNavigation && <Navigation lang={lang} />}
      {children}
      {showFooter && <Footer lang={lang} />}
    </>
  );
}
