"use client";
import { Locale } from "@/i18n-config";
import { useMobileNavigation } from "@/store/hooks";
import React, { useEffect } from "react";
import { Footer, Navigation } from "../..";

export function ClientLayout({
  children,
  showFooter = true,
  showNavigation = true,
  lang,
}: {
  children: React.ReactNode;
  showFooter?: boolean;
  showNavigation?: boolean;
  lang: Locale;
}) {
  const { autoCloseNavigation } = useMobileNavigation();
  useEffect(() => {
    window.addEventListener("resize", function () {
      if (this.innerWidth > 768) {
        autoCloseNavigation();
      }
    });

    return window.removeEventListener("resize", function () {
      if (this.innerWidth > 768) {
        autoCloseNavigation();
      }
    });
  });

  return (
    <>
      {showNavigation && <Navigation lang={lang} />}
      {children}
      {showFooter && <Footer lang={lang} />}
    </>
  );
}
