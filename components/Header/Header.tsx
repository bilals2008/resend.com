// File: components/Header/Header.tsx
import React from "react";
import Logo from "./Navbar/computer/Logo";
import Menu from "./Navbar/computer/Menu";
import GetStarted from "./Navbar/computer/GetStarted";
import MobileMenu from "./Navbar/mobile/MobileMEnu";
import AllPagesLink from "../sitemap/AllPAgesLink";

function Header() {
  return (
    <>
      <div className="h-auto mx-auto px-2 py-3">
        {/*  Mobile Navbar */}
        <MobileMenu />
        {/*  Desktop Navbar */}
        <div className="hidden lg:flex w-full items-center justify-between border-b pb-3">
          <Logo />
          <Menu />
          <div className="flex items-center gap-3">
            <GetStarted />
            <AllPagesLink />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
