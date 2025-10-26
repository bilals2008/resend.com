// File: components/IntegrateLang/langList.tsx
"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "motion/react";

function LangList() {
  const languages: string[] = [
    "js",
    "serverless",
    "ruby",
    "python",
    "php",
    "java",
    "elixir",
    "rest",
    "smtp",
    "ruby",
  ];

  // ✅ Type-safe Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring", // <-- IMPORTANT: define type here
        stiffness: 180,
        damping: 14,
      },
    },
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto py-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4 lg:gap-6 place-items-center">
        {languages.map((lang, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.12, y: -6 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 250, damping: 12 }}
            className="flex flex-col items-center justify-center gap-2 cursor-pointer group"
          >
            <div
              className="w-16 h-16 rounded-2xl border border-gray-700 flex items-center justify-center p-2 
              group-hover:border-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 ease-out bg-black"
            >
              <Image
                src={`/images/LangsLogo/${lang}.png`}
                alt={`${lang} logo`}
                width={40}
                height={40}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="font-medium text-sm capitalize text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
              {lang}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default LangList;
