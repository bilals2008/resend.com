"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { securityData } from "./securityData";
import { motion } from "motion/react";
import { staggerContainer, zoomIn } from "@/components/animations/variants";

const SecurityCard = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="max-w-6xl mx-auto pb-10 px-4 grid md:grid-cols-2 lg:grid-cols-3"
    >
      {securityData.map((section, index) => (
        <motion.div key={index} variants={zoomIn}>
          <Card className="bg-background text-gray-200 hover:border-[#2b2f36] transition-colors rounded-none border-collapse">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-lg font-semibold text-white">
                {section.category}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="leading-snug truncate">{item.text}</span>
                  </li>
                ))}
              </ul>

              {section.moreCount && (
                <p className="text-xs text-gray-400">
                  +{section.moreCount} more
                </p>
              )}
              {section.additionalInfo && (
                <p className="text-xs text-gray-400">
                  {section.additionalInfo}
                </p>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default SecurityCard;
