// File: components/DeveloperExperience/FeatureCard.tsx
"use client";
import Image from "next/image";
import React from "react";
import { featuresList } from ".";
import { FlaskConical, FlaskRound } from "lucide-react";
import { Button } from "@/components/ui/button";

function FeatureCard() {
  const iconsMap = {
    FlaskConical: FlaskConical,
    FlaskRound: FlaskRound,
  };
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
      {/* Card 1 */}
      {featuresList.map((feature, idx) => {
        const Icon = iconsMap[feature.icons as keyof typeof iconsMap];
        return (
          <div className="w-full flex flex-col gap-4 my-10" key={idx}>
            <Image
              src={feature.imgSrc}
              width={400}
              height={400}
              alt={feature.altText}
              className="w-full h-auto"
            />
            <div className="flex flex-col items-start gap-1 ml-5 text-balance text-[#F1F7FEB5] font-medium">
              <Icon className=" w-5 h-5" />
              <p className="text-lg">{feature.heading}</p>
              <p className="text-sm italic text-gray-400">{feature.para}</p>
              <Button
                variant="link"
                className="mt-1 text-[#F1F7FEB5]/50 px-0 py-0"
              >
                Learn more
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FeatureCard;
