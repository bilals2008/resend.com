// File: components/Footer/FooterSocials.tsx
import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Facebook } from "lucide-react";

const socials = [
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Github, href: "https://github.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Facebook, href: "https:facebook.com" },
];

export default function FooterSocials() {
  return (
    <div className="flex space-x-4 mt-6">
      {socials.map(({ icon: Icon, href }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          className="w-9 h-9 rounded-full border border-neutral-800 flex items-center justify-center hover:border-gray-600 hover:text-white transition-colors"
        >
          <Icon className="w-4 h-4" />
        </Link>
      ))}
    </div>
  );
}
