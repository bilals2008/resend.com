// File: app/docs/components/DocsNav/DocsNav.tsx
"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Book, Code2, Rocket, GraduationCap } from "lucide-react";
import { DocsNavData } from "./Nadata";

export default function DocsNav() {
  
  const sectionIcons: Record<string, React.ReactNode> = {
    Documentation: <Book className="w-4 h-4 text-gray-400" />,
    "Api Reference": <Code2 className="w-4 h-4 text-gray-400" />,
    Quickstart: <Rocket className="w-4 h-4 text-gray-400" />,
    Learn: <GraduationCap className="w-4 h-4 text-gray-400" />,
  };

  return (
    <aside className="text-gray-200">
      {DocsNavData.map((section) => (
        <div key={section.id} className="mb-6">
          {/* Section Title with Icon */}
          <h3 className="uppercase text-sm font-semibold text-gray-400 mb-2 tracking-wide flex items-center gap-2">
            {sectionIcons[section.title] || (
              <Book className="w-4 h-4 text-gray-400" />
            )}
            {section.title}
          </h3>

          {/* Section Items */}
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item.id}>
                {item.link ? (
                  <Link
                    href={item.link}
                    className="flex items-center justify-between px-2 py-1.5 rounded-md text-sm text-gray-300 hover:bg-neutral-900 hover:text-white transition-colors"
                  >
                    <span>{item.title}</span>
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  </Link>
                ) : (
                  <div className="flex items-center justify-between px-2 py-1.5 rounded-md text-sm text-gray-300 hover:bg-neutral-900 hover:text-white transition-colors cursor-pointer">
                    <span>{item.title}</span>
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
