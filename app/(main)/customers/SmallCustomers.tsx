// File: app/customers/SmallCustomers.tsx

"use client"
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { logos } from "./SmallCustomtersData";
import { staggerContainer, zoomIn } from "@/components/animations/variants";

function SmallCustomers() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-6xl py-20 mx-auto"
    >
      <div className="grid grid-cols-3 md:grid-cols-5 gap-8 px-1">
        {logos.map((logo, idx) => (
          <motion.div
            key={idx}
            variants={zoomIn}
            className="flex items-center justify-center gap-3 p-4"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={30}
              height={30}
              className="grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            <span className="text-xs md:text-sm font-medium text-nowrap ">
              {logo.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default SmallCustomers;
