"use client";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Navbar as NextUINavBar, NavbarContent } from "@nextui-org/react";
import { navLinks } from "@/utils/navLinks";
import { staggerFade } from "./animations";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <NextUINavBar maxWidth="full" shouldHideOnScroll>
      <NavbarContent justify="end">
        {navLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link.path}
            initial="hidden"
            animate="visible"
            variants={staggerFade}
            custom={i}
            className="lg:p-8 md:p-3 sm:p-2 text-base font-bold hover:text-focus hover:underline hover:decoration-double hover:underline-offset-8"
          >
            <span>{link.name}</span>
          </motion.a>
        ))}
        <ThemeSwitcher />
      </NavbarContent>
    </NextUINavBar>
  );
}
