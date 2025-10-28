// File: components/Header/Navbar/Logo.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={"/"}>
      <Image src="/images/logo.png" alt="Resend Logo" width={80} height={30} 
      className="opacity-90"/>
    </Link>
  );
}

export default Logo;
