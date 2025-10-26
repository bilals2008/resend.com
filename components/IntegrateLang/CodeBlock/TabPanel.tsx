// File: components/IntegrateLang/CodeBlock/TabPanel.tsx
"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";
import { tabsList } from "./TabsList";
import CodePanel from "./CodePanel";
import { Clipboard } from "lucide-react";
import CodeFooter from "./CodeFooter";

function TabPanel() {
  return (
    <div className="w-full px-2 py-1">
      <Tabs defaultValue={tabsList[0].label.toLowerCase()}>
        <div className="w-full overflow-x-auto border-b border-[#D6EBFD30] py-2 flex items-center justify-between px-2">
          <TabsList className=" bg-background">
            {tabsList.map((tab, idx) => (
              <TabsTrigger
                key={idx}
                value={tab.label.toLowerCase()}
                className="flex-shrink-0"
              >
                <div className="flex items-center justify-center gap-1 p-1 px-2">
                  <Image
                    src={tab.imgSrc}
                    alt={tab.altText}
                    width={20}
                    height={20}
                  />
                  <p className="text-sm whitespace-nowrap">{tab.label}</p>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="cursor-pointer">
            <Clipboard/>
          </div>
        </div>
        {tabsList.map((tab, idx) => (
          <TabsContent key={idx} value={tab.label.toLowerCase()}>
            <CodePanel activeTab={tab.label.toLowerCase()} />
          </TabsContent>
        ))}
        <CodeFooter/>
      </Tabs>
      
    </div>
  );
}

export default TabPanel;
