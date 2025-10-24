// File: components/Header/Navbar/Logo.tsx
import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div>
      <Image src="/images/logo.png" alt="Resend Logo" width={60} height={30} 
      className="opacity-50"/>
    </div>
  );
}

export default Logo;
