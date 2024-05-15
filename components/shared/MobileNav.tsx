"use client"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image src="/logo-lg.svg" alt="logo" width={180} height={180} />
      </Link>
      <nav className="flex gap-4">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
            <Image src="/assets/icons/menu.svg" alt="menu" width={32} height={32}  className="cursor-pointer"/>
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
             <>
             <Image src="/logo-lg.svg" alt="logo" width={152} height={152} />
             <ul className="header-nav_elements">
              {navLinks.map((navlink) => {
                const isActive = navlink.route === pathname;
                return (
                  <li
                    key={navlink.route}
                    className={`p-18 flex whitespace-nowrap text-dark-700 ${
                      isActive && 'gradient-text'
                    }`}
                  >
                    <Link href={navlink.route} className="sidebar-link cursor-pointer">
                      <Image
                        src={navlink.icon}
                        alt={navlink.label}
                        width={24}
                        height={24}
                        
                      />
                      {navlink.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
           
             </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
