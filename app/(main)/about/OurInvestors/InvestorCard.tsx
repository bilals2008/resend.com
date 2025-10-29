// File: app/about/OurInvestors/InvestorCard.tsx
"use client";
import Image from "next/image";
import React from "react";
import { investorsData } from "./InvestorsData";
import { motion } from "motion/react";
import { staggerContainer, fadeUp } from "@/components/animations/variants";

function InvestorCard() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 my-8 max-w-6xl mx-auto py-5"
    >
      {investorsData.map((investor) => (
        <motion.div
          key={investor.name}
          variants={fadeUp}
          className="flex items-center gap-3 py-3 rounded-xl transition-all duration-300 hover:bg-muted/40"
        >
          {/* Profile Image */}
          <div className="relative h-12 w-12 overflow-hidden rounded-full bg-muted border">
            <Image
              src={investor.image}
              alt={investor.name}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>

          {/* Name + Title */}
          <div className="flex flex-col leading-tight">
            <h3 className="font-medium text-sm sm:text-base">
              {investor.name}
            </h3>
            <p className="text-muted-foreground font-light text-xs sm:text-sm">
              {investor.title}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default InvestorCard;
