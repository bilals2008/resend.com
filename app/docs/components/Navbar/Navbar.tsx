// File: app/docs/components/Navbar/Navbar.tsx
import Logo from "@/components/Header/Navbar/computer/Logo";
import React from "react";
import SearchBar from "./SearchBar";
import ActionItems from "./ActionItems";
import MobileBar from "./MobileBar";

function Navbar() {
  return (
    <div className="w-full border-b bg-background/50 backdrop-blur-md px-4 py-3">
      {/* Desktop Nab */}
      <div className="hidden lg:flex items-center justify-between">
        <Logo />
          <SearchBar />
        <div className="flex items-center gap-4">
          <ActionItems />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex lg:hidden items-center justify-between">
        <Logo />
        <MobileBar />
      </div>
    </div>
  );
}

export default Navbar;
