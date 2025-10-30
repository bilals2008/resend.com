// File: app/(resendStatus)/resend-status/components/Navbar/NAvbar.tsx

import Logo from '@/components/Header/Navbar/computer/Logo'
import React from 'react'
import GetStartBtn from './GetStartBtn';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

function NAvbar() {
  return (
    <div className="max-w-4xl mx-auto relative">
      <MobileMenu/>
      <div
        className=" hidden w-full md:flex items-center justify-between bg-[#0F121ACC] h-12 py-4 px-2"
      >
        <Logo />
        <Menu/>
        <GetStartBtn/>
      </div>
    </div>
  );
}

export default NAvbar