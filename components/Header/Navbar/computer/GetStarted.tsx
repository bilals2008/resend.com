// File: components/Header/Navbar/GetStarted.tsx
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

function GetStarted() {
  return (
    <div className="">
      <Button
        className="rounded-full font-semibold px-6 py-2 cursor-pointer 
        hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 
   transition-all duration-500 hover:scale-[1.05] hover:shadow-pink-500/30 hover:bg-transparent hover:text-white border"
      >
        Get Started
        <ArrowRightIcon
        className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        aria-hidden="true"
        />
      </Button>
    </div>
  )
}

export default GetStarted
   