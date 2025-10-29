// File: app/changelog/ChangelogItem.tsx
import Image from "next/image";
import React from "react";
import { changelogsData } from "./changelogsData";

function ChangelogItem() {
  return (
    <div className="space-y-10">
      {changelogsData.map((item, i) => (
        <div key={i} className="flex justify-evenly md:justify-between gap-3">
          <div className="max-w-40 p-2 flex justify-evenly md:justify-between relative gap-5">
            <p className="text-xs md:text-sm font-light pr-1 text-nowrap">{item.date}</p>
            <div className="size-2 rounded-full bg-white absolute top-2 right-[5.4px] "></div>
            <div className="w-0.5 bg-[#D6EBFD30]"></div>
          </div>

          <div>
            <div className="overflow-hidden rounded-2xl border border-[#1E293B]/20">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={200}
                className="w-full object-cover"
              />
            </div>

            <div>
              <p className="scroll-m-20 text-xl font-medium tracking-tight mt-1">
                {item.title}
              </p>
              <p className="leading-7 text-muted-foreground font-light">
                {item.desc}
              </p>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <Image
                src={item.authorImg}
                width={28}
                height={28}
                alt={item.authorName}
                className="rounded-full border border-[#D6EBFD50]"
              />
              <p className="text-sm text-muted-foreground">{item.authorName}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChangelogItem;
