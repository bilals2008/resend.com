// File: app/pricing/PricingCard.tsx
// src/components/PricingCard.tsx
"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PricingPlan } from "./pricingData";

interface PricingCardProps {
  plan: PricingPlan;
  isActive?: boolean;
}

const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-between rounded-xl border  bg-[#0A0A0A] p-8 text-white w-full max-w-sm transition-all`}
    >
      <div>
        <h3 className="text-lg  font-light">{plan.title}</h3>
        <p className="text-3xl font-semibold my-2 py-3">{plan.price}</p>
        <p className="text-sm py-4 whitespace-pre-line border-y text-center leading-7">
          {plan.subtext}
        </p>

        <ul className="mt-8 space-y-5">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3">
              <div
                className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                  feature.available
                    ? "bg-green-500 border-green-500"
                    : "border-gray-600"
                }`}
              >
                {feature.available ? (
                  <Check className="h-3.5 w-3.5 text-black" strokeWidth={3} />
                ) : (
                  <X
                    className="h-3.5 w-3.5  text-[#E5EDFD7B]"
                    strokeWidth={3}
                  />
                )}
              </div>
              <span
                className={`text-sm ${
                  feature.available ? "text-gray-200" : "text-gray-500"
                }`}
              >
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Button className="mt-8 w-full rounded-full py-3 font-semibold hover:bg-transparent hover:border cursor-pointer hover:text-white transition">
        {plan.buttonText}
      </Button>
    </div>
  );
};

export default PricingCard;
