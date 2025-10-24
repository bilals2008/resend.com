// File: components/Header/Navbar/Menu.tsx
"use client";

import Link from "next/link";
import { menuItems } from "@/components/Header/Navbar/json/menuitem";
import { Button } from "@/components/ui/button";

function Menu() {
  return (
    <nav className="hidden lg:flex items-center gap-3">
      {menuItems.map((item) => (
        <div key={item.title} className="relative group">
          <Button
            variant="link"
            asChild
            className="relative text-md font-medium text-gray-400 transition-all duration-300 group-hover:text-white"
          >
            <Link href={item.href}>{item.title}</Link>
          </Button>

          {/* Animated gradient underline */}
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500 group-hover:w-full"></span>

          {/* Soft hover glow */}
          <span className="absolute inset-0 opacity-0 group-hover:opacity-25 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 blur-lg transition-all duration-700 rounded-xl"></span>
        </div>
      ))}
    </nav>
  );
}

export default Menu;
