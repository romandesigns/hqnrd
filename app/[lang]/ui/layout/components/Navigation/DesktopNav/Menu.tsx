"use client";
import {
  BsDoorOpenFill,
  GoHomeFill,
  MdDashboard,
  PiSignInFill,
} from "@/app/[lang]/ui/icons";
import Link from "next/link";
import { Button, Navbar, Nav } from "rsuite";
import { twMerge } from "tailwind-merge";

export const Menu = ({ className = "" }: { className: string }) => {
  return (
    <Nav className={twMerge(`flex items-center justify-center ${className}`)}>
      <Nav.Item as={Link} href="/" icon={<GoHomeFill className="rs-icon" />}>
        Home
      </Nav.Item>
      <Nav.Item
        as={Link}
        href="/habitaciones"
        icon={<BsDoorOpenFill className="rs-icon" />}
      >
        Rooms
      </Nav.Item>
      <Nav.Item
        as={Link}
        href="/portal"
        icon={<MdDashboard className="rs-icon" />}
      >
        Dashboard
      </Nav.Item>
      <Nav.Item
        as={Link}
        href="/auth/iniciar-session"
        icon={<PiSignInFill className="rs-icon" />}
        className="bg-primary-500 border border-primary-500 shadow-xs rounded-md py-1 px-6 text-white shadow-md shadow-primary-300 hover:bg-primary-500 focus:bg-primary-500"
      >
        Sign in
      </Nav.Item>
    </Nav>
  );
};
