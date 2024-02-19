"use client";

import {
  BUSINESS_MAP_LOCATION,
  BUSINESS_WHATS_APP_DIRECT_CHAT,
} from "@/constants";
import Link from "next/link";
import { ButtonGroup, ButtonToolbar, IconButton, Nav } from "rsuite";
import {
  FaLocationDot,
  IoLogoWhatsapp,
  LuContact2,
  MdGTranslate,
  PiSignInFill,
  RiDoorClosedLine,
  RiHomeLine,
} from "@/app/[lang]/ui/icons";
import { ExLink } from "@/app/[lang]/ui/common";

export const MobileNavMenu = () => {
  return (
    <>
      {/* Mobile Menu */}
      <section className="flex items-center justify-center p-4 h-full w-full">
        <Nav
          as="ul"
          className="mobile-navigation h-full w-full border rounded-md grid grid-cols-1 grid-rows-[auto_auto_auto_1fr_auto_auto] gap-3 items-center justify-center p-4"
        >
          {/* Home Button */}
          <Nav.Item as="li" className="p-0">
            <IconButton
              as={Link}
              href="/"
              size="lg"
              className="w-full rs-btn-dark"
              icon={<RiHomeLine className="rs-icon" />}
            >
              <span className="font-semibold">Home</span>
            </IconButton>
          </Nav.Item>
          {/* Rooms Button */}
          <Nav.Item as="li" className="p-0">
            <IconButton
              as={Link}
              href="/en/habitaciones"
              size="lg"
              className="w-full rs-btn-dark"
              icon={<RiDoorClosedLine className="rs-icon" />}
            >
              <span className="font-semibold">Rooms</span>
            </IconButton>
          </Nav.Item>
          {/* Contact Button */}
          <Nav.Item as="li" className="p-0">
            <IconButton
              as={Link}
              href="/en/contactanos"
              size="lg"
              className="w-full rs-btn-dark"
              icon={<LuContact2 size={20} className="rs-icon" />}
            >
              <span className="font-semibold">Contact</span>
            </IconButton>
          </Nav.Item>
          {/* Utilities Button */}
          <Nav.Item as="li" className="flex justify-center items-center p-0">
            <ButtonToolbar size="md">
              <ButtonGroup>
                <IconButton
                  as={ExLink}
                  icon={<FaLocationDot />}
                  size="lg"
                  appearance="primary"
                  href={BUSINESS_MAP_LOCATION}
                />
                <IconButton
                  as={ExLink}
                  icon={<IoLogoWhatsapp />}
                  size="lg"
                  appearance="primary"
                  href={BUSINESS_WHATS_APP_DIRECT_CHAT}
                />
                <IconButton
                  icon={<MdGTranslate />}
                  size="lg"
                  appearance="primary"
                  active
                />
              </ButtonGroup>
            </ButtonToolbar>
          </Nav.Item>
          {/* Sign In Button */}
          <Nav.Item as="li" className="w-full rounded-md mt-auto p-0">
            <IconButton
              as={Link}
              href="/en/auth/iniciar-session"
              size="lg"
              className="w-full"
              appearance="primary"
              icon={<PiSignInFill size={20} className="rs-icon" />}
            >
              <span className="font-semibold">Sign In</span>
            </IconButton>
          </Nav.Item>
          {/* CTA Items */}
          <Nav.Item
            as="li"
            className="flex justify-between items-center w-full p-0"
          >
            <small className="font-semibold text-xs">
              Dont have an account?
            </small>
            <small className="font-semibold text-xs underline">Sign Up</small>
          </Nav.Item>
        </Nav>
      </section>
    </>
  );
};
