// File: components/Footer/FooterColumn.tsx
import React from "react";
import Link from "next/link";

interface FooterColumnProps {
  title: string;
  links: string[];
}

export default function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="flex flex-col space-y-3 ">
      <h3 className="text-white font-medium mb-2">{title}</h3>
      {links.map((link) => (
        <Link
          key={link}
          href="#"
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
