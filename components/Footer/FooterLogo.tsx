// File: components/Footer/FooterLogo.tsx
"use client";

import Image from "next/image";

export default function FooterLogo() {
  return (
    <div className="flex items-center gap-2 text-teal-600 dark:text-teal-300">
      <Image
        src={"/images/logo.png"}
        alt="Resend Logo"
        width={50}
        height={50}
        className="mb-2"
      />
    </div>
  );
}
