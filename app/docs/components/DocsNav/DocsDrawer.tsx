// File: app/docs/components/DocsNav/DocsDrawer.tsx
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import DocsNav from "./DocsNav";
import SearchBar from "../Navbar/SearchBar";

export default function DocsDrawer() {
  return (
    <div className="md:hidden flex items-center">
      <Drawer>
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="bg-neutral-900 border-neutral-800 hover:bg-neutral-800 text-gray-300"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </DrawerTrigger>
       <div className=" w-full ml-16">
        <SearchBar/>
       </div>
        <DrawerContent className="bg-neutral-950 border-neutral-800 text-gray-200 p-4">
          <h2 className="text-lg font-semibold mb-4 border-b border-neutral-800 pb-2">
            Documentation
          </h2>
          <DocsNav />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
