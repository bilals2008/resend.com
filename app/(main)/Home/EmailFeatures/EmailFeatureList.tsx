// File: components/EmailFeatures/EmailFeatureList.tsx
import React from "react";
import { emailFeatures } from "./emailFeatures";
import Image from "next/image";

function EmailFeatureList() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-16 py-20 px-8 italic">
      {emailFeatures.map((feature, idx) => {
        return (
          <div key={idx} className="">
            <Image
              src={feature.icon}
              alt={feature.title}
              width={24}
              height={24}
              className="mb-2"
            />
            <h3 className="font-semibold text-sm  mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
export default EmailFeatureList;
