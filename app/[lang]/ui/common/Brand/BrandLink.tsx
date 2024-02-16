"use client";
import Link from "next/link";
import React from "react";
import { Nav } from "rsuite";
import { twMerge } from "tailwind-merge";

export const BrandLink = ({
  linkPath,
  children,
  className,
}: {
  className: string;
  linkPath: string;
  children: React.ReactNode;
}) => {
  return (
    <Nav>
      <Nav.Item
        as={Link}
        href={linkPath}
        className={twMerge(`flex items-start justify-start p-0 ${className}`)}
      >
        {children}
      </Nav.Item>
    </Nav>
  );
};
