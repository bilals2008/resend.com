// File: app/(resendStatus)/resend-status/components/Navbar/Menu.tsx
"use client"
import React from 'react'
import { menuItems } from './Menuitem'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Menu() {
  const pathname = usePathname()
  
  return (
    <div className=' hidden md:flex items-center gap-5 font-medium '>
      {menuItems.map((menu, idx) => {
        return (
          <div
            key={idx}
            className={` rounded-sm p-1 px-1.5 ${
              pathname === menu.href ? "bg-[#21242D]" : ""
            }`}
          >
            <Link href={menu.href}>{menu.title}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Menu