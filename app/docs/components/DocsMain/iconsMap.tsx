// File: app/docs/components/DocsMain/iconsMap.tsx
import React from "react";
import Image from "next/image";

// 🔹 Export map of language logos
export const iconMap: Record<string, React.ReactNode> = {
  nodejs: (
    <Image
      src="/images/Home/LangsLogo/js.png"
      alt="Node.js"
      width={25}
      height={25}
      className="grayscale hover:grayscale-0 transition duration-300"
    />
  ),
  nextjs: (
    <Image
      src="/images/Home/LangsLogo/nextjs.png"
      alt="Next.js"
      width={25}
      height={25}
      className="grayscale hover:grayscale-0 transition duration-300"
    />
  ),
  express: (
    <Image
      src="/images/Home/LangsLogo/expressjs.png"
      alt="Express"
      width={25}
      height={25}
      className="grayscale hover:grayscale-0 transition duration-300"
    />
  ),
  php: (
    <Image
      src="/images/Home/LangsLogo/php.png"
      alt="PHP"
      width={25}
      height={25}
      className="grayscale hover:grayscale-0 transition duration-300"
    />
  ),
  laravel: (
    <Image
      src="/images/Home/LangsLogo/laravel.png"
      alt="Laravel"
      width={25}
      height={25}
      className="grayscale hover:grayscale-0 transition duration-300"
    />
  ),
  python: (
    <Image
      src="/images/Home/LangsLogo/python.png"
      alt="Python"
      width={25}
      height={25}
      className="grayscale hover:grayscale-0 transition duration-300"
    />
  ),
  ruby: (
    <Image
      src="/images/Home/LangsLogo/ruby.png"
      alt="Ruby"
      width={25}
      height={25}
      className="grayscale hover:grayscale-0 transition duration-300"
    />
  ),
  rails: (
    <Image
      src="/images/Home/LangsLogo/rail.png"
      alt="Rails"
      width={25}
      height={25}
      className="grayscale hover:grayscale-0 transition duration-300"
    />
  ),
  go: (
    <Image
      src="/images/Home/LangsLogo/go.png"
      alt="Go"
      width={25}
      height={25}
      className="grayscale hover:grayscale-0 transition duration-300"
    />
  ),
  elixir: (
    <Image
      src="/images/Home/LangsLogo/elixir.png"
      alt="Elixir"
      width={25}
      height={25}
      className="grayscale hover:grayscale-0 transition duration-300"
    />
  ),
  java: (
    <Image
      src="/images/Home/LangsLogo/java.png"
      alt="Java"
      width={25}
      height={25}
      className="grayscale hover:grayscale-0 transition duration-300"
    />
  ),
  nestjs: (
    <Image
      src="/images/Home/LangsLogo/nestjs.png"
      alt="nestjs"
      width={25}
      height={25}
      className="grayscale hover:grayscale-0 transition duration-300"
    />
  ),
  openai: (
    <Image
      src="/images/Home/LangsLogo/openai.png"
      alt="openai"
      width={25}
      height={25}
      className="grayscale hover:grayscale-0 transition duration-300"
    />
  ),
  dotnet: (
    <Image
      src="/images/Home/LangsLogo/dotnet.png"
      alt="dotnet"
      width={25}
      height={25}
      className="grayscale hover:grayscale-0 transition duration-300"
    />
  ),
};
