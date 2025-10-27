// File: components/Footer/Footer.tsx
"use client";

import React from "react";
import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";
import GlassShine from "../common/GlassShine";
import ShiningLine from "../common/ShiningLine";
import Image from "next/image";
import FooterLogo from "./FooterLogo";


export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-gray-400  overflow-hidden">
      {/* Glass shine / gradient line on top */}
      <ShiningLine />
      <GlassShine />

      <div className="relative max-w-7xl mx-auto px-3 py-16 grid grid-cols-3 md:grid-cols-6 gap-8 ">
        {/* Left side (Brand + Socials) */}
        <div className="col-span-3 md:col-span-2 flex md:flex-col flex-row justify-between mb-5">
          <div>
          <FooterLogo/>
            <p className="text-sm text-gray-500 max-w-xs">
              2261 Market Street <br />
              #5039 San Francisco, CA 94114
            </p>
          </div>
          <FooterSocials />
        </div>

        {/* Right side (Link Columns) */}
        <FooterLinks />
      </div>

      <div className="border-t border-neutral-800 mt-12 pt-6 text-sm text-center text-gray-600 relative z-10">
        © {new Date().getFullYear()} Resend. All rights reserved.
      </div>
    </footer>
  );
}
