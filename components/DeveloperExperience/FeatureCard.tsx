// File: components/DeveloperExperience/FeatureCard.tsx
"use client";

import { BottleWine, TestTube } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

function FeatureCard() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
      {/* Card 1 */}
      <div className="w-full flex flex-col gap-4 my-10">
        <Image
          src="/images/DevExp/img-1.svg"
          width={400}
          height={400}
          alt="FeatureCard img"
          className="w-full h-auto"
        />
        <div className="flex flex-col items-start gap-1 ml-5 text-balance text-[#F1F7FEB5] font-medium">
          <TestTube className=" w-5 h-5" />
          <p className="text-lg">Test Mode</p>
          <p className="text-sm italic text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laborum
            maxime fugiat consectetur blanditiis itaque dolores nemo quae porro
            ab.
          </p>
          <Button variant="link" className="mt-1 text-[#F1F7FEB5]/50 px-0 py-0">
            Learn more
          </Button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-full flex flex-col gap-4 my-10">
        <Image
          src="/images/DevExp/img-2.svg"
          width={400}
          height={400}
          alt="FeatureCard img"
          className="w-full h-auto"
        />
        <div className="flex flex-col items-start gap-1 ml-5 text-balance text-[#F1F7FEB5] font-medium">
          <BottleWine className=" w-5 h-5" />
          <p className="text-lg">Modular Webhooks</p>
          <p className="text-sm italic text-gray-400">
            Receive real-time notifications directly to your server. Every time
            an email is delivered, opened, bounces, or a link is clicked.
          </p>
          <Button variant="link" className="mt-1 text-[#F1F7FEB5]/50 px-0 py-0">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
