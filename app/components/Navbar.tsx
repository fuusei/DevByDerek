"use client";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { navLinks } from "@/utils/navLinks";
import { Navbar as NextUINavBar, NavbarContent } from "@nextui-org/react";
import { data } from "autoprefixer";

export function Navbar() {
  return (
    <NextUINavBar maxWidth="full" shouldHideOnScroll>
      <NavbarContent justify="end">
        {navLinks.map((link, i) => (
          <a key={i} href={link.path} className="p-8">
            <span>{link.name}</span>
          </a>
        ))}
        <ThemeSwitcher />
      </NavbarContent>
    </NextUINavBar>
    // <div className="flex justify-end h-auto p-6 items-center">
    //   {navLinks.map((link, i) => (
    //     <a key={i} href={link.path} className="p-8">
    //       <span>{link.name}</span>
    //     </a>
    //   ))}
    //   <ThemeSwitcher />
    // </div>
  );
}
