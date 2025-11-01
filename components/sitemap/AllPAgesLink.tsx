// File: components/sitemap/AllPAgesLink.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer2";
import { sitemapData } from "./sitemapData";
import { Button } from "../ui/button";

function AllPagesLink() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* 🧭 Drawer Trigger Button */}
      <Button
        variant="outline"
        onClick={() => setOpen(true)}
        className="p-2 border bg-background"
      >
        Pages
      </Button>

      {/* 🪟 Drawer */}
      <Drawer open={open} onOpenChange={setOpen} side="bottom">
        <DrawerOverlay />

        <DrawerContent
          className="
            w-full 
            border-t border-border 
            bg-background 
            shadow-xl 
            max-h-[85vh]         /* 👈 height limit */
            overflow-y-auto       /* 👈 scroll enabled */
            scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent
          "
        >
          {/* Header */}
          <DrawerHeader className="border-b border-border/40 sticky top-0 bg-background z-10">
            <DrawerTitle className="text-2xl font-semibold text-primary tracking-tight">
              Website Sitemap
            </DrawerTitle>
          </DrawerHeader>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/40 py-6 px-6">
            {sitemapData.map((section, idx) => (
              <div
                key={idx}
                className="p-5 hover:bg-muted/30 transition-all duration-200"
              >
                {/* Category Title */}
                <h3 className="text-lg font-semibold text-primary border-b border-primary/30 pb-2 mb-4 uppercase tracking-wide">
                  {section.category}
                </h3>

                {/* Links */}
                <ul className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                  {section.links.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.link}
                        onClick={() => setOpen(false)}
                        className="block py-2.5 px-3 rounded-md bg-background border border-border/40 hover:border-primary/50 hover:bg-primary/10 text-sm text-muted-foreground hover:text-primary transition-all duration-200 shadow-sm"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default AllPagesLink;
