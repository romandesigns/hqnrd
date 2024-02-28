import React from "react";
import { Footer, Navigation } from "../../components";

export function PublicLayout({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
