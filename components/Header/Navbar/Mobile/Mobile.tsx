// File: components/Header/Navbar/Mobile/Mobile.tsx
"use client";
import StaggeredMenu from "@/components/StaggeredMenu";
import React from "react";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Customers", ariaLabel: "View our services", link: "/services" },
  { label: "Docs", ariaLabel: "Get in touch", link: "/contact" },
  { label: "EnterPrise", ariaLabel: "Get in touch", link: "/contact" },
  { label: "Changelog", ariaLabel: "Get in touch", link: "/contact" },
  { label: "Pricing", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

function Mobile() {
  return (
    <div className="w-full h-screen fixed top-0 left-0 z-[999] flex items-center justify-center lg:hidden">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#ff6b6b"
        changeMenuColorOnOpen={true}
        colors={["#ff6b6b", "#f06595", "#845ef7", "#339af0"]}
        logoUrl="/images/logo.png"
        accentColor="#ff6b6b"
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
      />
    </div>
  );
}

export default Mobile;
