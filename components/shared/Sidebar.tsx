"use client";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href={"/"} className="sidebar-logo">
          <Image src="/logo-lg.svg" alt="logo" width={180} height={28} />
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((navlink) => {
                const isActive = navlink.route === pathname;
                return (
                  <li
                    key={navlink.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <Link href={navlink.route} className="sidebar-link">
                      <Image
                        src={navlink.icon}
                        alt={navlink.label}
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {navlink.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="sidebar-nav_elements">
            {navLinks.slice(6).map((navlink) => {
                const isActive = navlink.route === pathname;
                return (
                  <li
                    key={navlink.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <Link href={navlink.route} className="sidebar-link">
                      <Image
                        src={navlink.icon}
                        alt={navlink.label}
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {navlink.label}
                    </Link>
                  </li>
                );
              })}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
