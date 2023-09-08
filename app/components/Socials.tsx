"use client";
import { socialLinks } from "@/utils/socialLinks";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";

export function Socials() {
  return (
    <div className="fixed inset-y-[75%] lg:ml-6 ml-2">
      {socialLinks.map((link, i) => (
        <div
          className="py-1 hover:-translate-y-1 hover:scale-125"
          key={i}
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
        </div>
      ))}
    </div>
  );
}
