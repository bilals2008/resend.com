// File: components/common/TextBlock.tsx
"use client"
import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/variants";

interface TextBlockProps {
  heading?: string | React.ReactNode;
  paragraph?: string | React.ReactNode;
  className?: string;
  headerClassName?: string;
  paraClassName?: string;
}

function TextBlock({
  heading,
  paragraph,
  className,
  headerClassName,
  paraClassName,
}: TextBlockProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      <h1
        className={`scroll-m-24 text-4xl font-medium tracking-tight text-balance leading-12 italic ${headerClassName}`}
      >
        {heading || (
          <>
            First-class <br /> developer experience
          </>
        )}
      </h1>
      <p
        className={`leading-7 italic mt-3 text-[#F1F7FEB5] font-light text-sm text-balance ${paraClassName}`}
      >
        {paragraph}
      </p>
    </motion.div>
  );
}

export default TextBlock;
