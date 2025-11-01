// File: app/docs/components/DocsMain/QuickstartSection.tsx
import React from "react";
import Image from "next/image";
import { introductionData } from "../../data/docsContent";
import { Card, CardContent } from "@/components/ui/card";
import { iconMap } from "./iconsMap";

function QuickstartSection() {


  const { quickstart } = introductionData;

  return (
    <section className="pt-8 w-full ">
      {/* 🔸 Grid of Cards */}
      <div className=" w-full grid grid-cols-2 gap-2 md:gap-4">
        {quickstart.items.map((item) => (
          <Card
            key={item.id}
            className="w-full bg-[#0A0A0A80]/50 border border-[#25252580]/50 cursor-pointer"
          >
            <CardContent className=" w-full flex flex-col gap-2.5 px-2 pl-2 md:pl-5 ">
              {iconMap[item.icon] || (
                <Image
                  src="/images/Home/LangLogos/default.png"
                  alt="Default"
                  className="grayscale hover:grayscale-0 transition duration-300"
                  width={35}
                  height={35}
                />
              )}
              <span className="text-sm font-light text-neutral-100">
                {item.title}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default QuickstartSection;
