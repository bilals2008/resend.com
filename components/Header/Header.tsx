// File: components/Header/Header.tsx
import React from 'react'
import Logo from './Navbar/computer/Logo';
import Menu from './Navbar/computer/Menu';
import GetStarted from './Navbar/computer/GetStarted';

function Header() {
  return (
    <>
      <div className="h-auto mx-auto px-2 py-3 ">
        <div className=" hidden lg:flex w-full  justify-between items-center gap-3 border-b pb-3">
          <Logo />
          <Menu />
          <GetStarted />
        </div>
      </div>
    </>
  );
}

export default Header