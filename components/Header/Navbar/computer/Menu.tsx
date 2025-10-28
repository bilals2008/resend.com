// File: components/Header/Navbar/computer/Menu.tsx
"use client";

import Link from "next/link";
import { menuItems } from "@/components/Header/Navbar/json/menuitem";
import GardeintUnderline from "@/components/common/GardeintUnderline";

function Menu() {
  return (
    <nav className="hidden lg:flex items-center gap-3">
      {menuItems.map((item) => (
        <div
          key={item.title}
          className="relative group  rounded-md  px-3 py-2"
        >
          <Link
            href={item.href}
            className="relative text-md font-medium text-gray-400 transition-all duration-300 group-hover:text-white cursor-pointer z-50"
          >
            {item.title}
          </Link>

          {/* Animated gradient underline */}
          <GardeintUnderline />
        </div>
      ))}
    </nav>
  );
}

export default Menu;
