"use client";
import { socialLinks } from "@/utils/socialLinks";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Socials() {
  return (
    <div className="fixed inset-y-[75%] lg:ml-6 ml-2">
      {socialLinks.map((link, i) => (
        <motion.div
          className="py-1 hover:-translate-y-1 hover:scale-125"
          key={i}
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Tooltip content={link.name} placement="right" closeDelay={1000}>
            <Link
              target="__blank"
              href={link.path}
              className="lg:text-4xl text-3xl cursor-pointer text-primary hover:text-focus"
            >
              {link.icon}
            </Link>
          </Tooltip>
        </motion.div>
      ))}
    </div>
  );
}
