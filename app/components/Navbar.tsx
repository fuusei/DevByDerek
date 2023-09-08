"use client";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Navbar as NextUINavBar, NavbarContent } from "@nextui-org/react";
import { navLinks } from "@/utils/navLinks";

export function Navbar() {
  return (
    <NextUINavBar maxWidth="full" shouldHideOnScroll>
      <NavbarContent justify="end">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className="lg:p-8 p-3 font-bold hover:text-focus hover:underline hover:decoration-double hover:underline-offset-8"
          >
            <span>{link.name}</span>
          </a>
        ))}
        <ThemeSwitcher />
      </NavbarContent>
    </NextUINavBar>
  );
}
