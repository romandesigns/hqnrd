"use client";
import { Locale } from "@/i18n-config";
import { useMobileNavigation } from "@/store/hooks";
import React, { useEffect } from "react";
import { Footer, Navigation } from "../..";

/**
 * ClientLayout component that provides a layout structure for the client-side application.
 * It includes optional navigation and footer components.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 * @param {boolean} [props.showFooter=true] - Flag to determine whether to show the footer.
 * @param {boolean} [props.showNavigation=true] - Flag to determine whether to show the navigation.
 * @param {Locale} props.lang - The locale to be used for the navigation and footer components.
 *
 * @returns {JSX.Element} The rendered layout component.
 */

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
