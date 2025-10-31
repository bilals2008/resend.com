// File: app/docs/components/DocsMain/iconsMap.tsx
import React from "react";
import Image from "next/image";

// 🔹 Export map of language logos
export const iconMap: Record<string, React.ReactNode> = {
  nodejs: (
    <Image
      src="/images/Home/LangsLogo/js.png"
      alt="Node.js"
      width={20}
      height={20}
    />
  ),
  nextjs: (
    <Image
      src="/images/Home/LangsLogo/nextjs.png"
      alt="Next.js"
      width={20}
      height={20}
    />
  ),
  express: (
    <Image
      src="/images/Home/LangsLogo/expressjs.png"
      alt="Express"
      width={20}
      height={20}
    />
  ),
  php: (
    <Image
      src="/images/Home/LangsLogo/php.png"
      alt="PHP"
      width={20}
      height={20}
    />
  ),
  laravel: (
    <Image
      src="/images/Home/LangsLogo/laravel.png"
      alt="Laravel"
      width={20}
      height={20}
    />
  ),
  python: (
    <Image
      src="/images/Home/LangsLogo/python.png"
      alt="Python"
      width={20}
      height={20}
    />
  ),
  ruby: (
    <Image
      src="/images/Home/LangsLogo/ruby.png"
      alt="Ruby"
      width={20}
      height={20}
    />
  ),
  rails: (
    <Image
      src="/images/Home/LangsLogo/rail.png"
      alt="Rails"
      width={20}
      height={20}
    />
  ),
  go: (
    <Image
      src="/images/Home/LangsLogo/go.png"
      alt="Go"
      width={20}
      height={20}
    />
  ),
  elixir: (
    <Image
      src="/images/Home/LangsLogo/elixir.png"
      alt="Elixir"
      width={20}
      height={20}
    />
  ),
  java: (
    <Image
      src="/images/Home/LangsLogo/java.png"
      alt="Java"
      width={20}
      height={20}
    />
  ),
};
