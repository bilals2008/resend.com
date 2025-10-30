// File: app/docs/components/Navbar/MobileBar.tsx
"use client";

import React from "react";
import { ModeToggle } from "@/components/Theme-toggle";
import { Menu as MenuIcon, Search, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Header/Navbar/computer/Logo";
import { menuesitems } from "./menuItems";

function MobileBar() {
  return (
    <div className="flex items-center gap-2">
      {/* Theme toggle */}
      <ModeToggle />

      {/* Menu toggle (ShadCN Sheet) */}
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

          {/* Menu links */}
          <nav className="flex flex-col gap-3">
            {menuesitems.map((item) => (
              <div key={item.title}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between text-balance font-medium py-2 hover:bg-stone-900 px-2 rounded-2xl hover:scale-105 hover:text-white transition-all duration-150  "
                >
                  {item.title}
                  <ArrowRight className="w-4 h-4 opacity-60" />
                </Link>
              </div>
            ))}
          </nav>
          {/* Buttons */}
          <div className="flex flex-col gap-2 mb-6">
            <Button
              variant="outline"
              className="w-full font-medium hover:bg-white mb-3"
              asChild
            >
              <Link href={"/login"}> Sign in</Link>
            </Button>
            <Button className="w-full font-semibold" asChild>
              <Link href={"/login"}>Get Started</Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileBar;


