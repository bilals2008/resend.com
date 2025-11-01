// File: components/Header/Navbar/mobile/MobileMEnu.tsx
"use client";

import React from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon, ArrowRight } from "lucide-react";
import { menuItems } from "@/components/Header/Navbar/json/menuitem";
import Logo from "../computer/Logo";
import { DropdownMenu, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";

function MobileMenu() {
  return (
    <div className="lg:hidden flex items-center justify-between px-4 py-2">
      {/* Left: Logo */}
      <Logo />

      {/* Right: Menu button */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="p-2 border">
            <MenuIcon className="w-6 h-6" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="top"
          className="bg-black text-white p-6 rounded-b-3xl"
        >
          {/* Header row */}
          <div className="flex justify-between items-center mb-6">
            <Logo />
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 mb-6">
            <Button
              variant="outline"
              className="w-full font-medium hover:bg-white mb-3"
              asChild
            >
              <Link href={"/login"}> Log in</Link>
            </Button>
            <Button className="w-full font-semibold" asChild>
              <Link href={"/login"}>Get Started</Link>
            </Button>
          </div>

          {/* Menu links */}
          <nav className="flex flex-col gap-3">
            {menuItems.map((item) => (
              <SheetClose asChild key={item.title}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between text-balance font-medium py-2 hover:bg-stone-900 px-2 rounded-2xl hover:scale-105 hover:text-white transition-all duration-150  "
                >
                  {item.title}
                  <ArrowRight className="w-4 h-4 opacity-60" />
                </Link>
              </SheetClose>
            ))}
            
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileMenu;
