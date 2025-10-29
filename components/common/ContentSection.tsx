// File: components/common/ContentSection.tsx
"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  imgSrc?: string;
  imgalt?: string;
  ClassName?: string;
  heading?: string | React.ReactNode;
  desciption?: string | React.ReactNode;
  btnText?: string[];
  imgWidth?: number;
  imgHeight?: number;
  headingClassName?: string;
  imgClassName?: string;
  btn1ClassName?: string;
  isLink?: string[]; 
}

function ContentSection({
  imgSrc,
  imgalt,
  heading,
  desciption,
  btnText = [],
  imgWidth,
  imgHeight,
  headingClassName,
  imgClassName,
  btn1ClassName,
  isLink = [], 
  ClassName,
}: Props) {
  // 🔹 Soft fade-up animation (lightweight)
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const link1 = isLink[0] || "#";
  const link2 = isLink[1] || "#";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`flex flex-col items-center justify-center mx-auto w-full px-2 py-10 ${ClassName}`}
    >
      {/* Image */}
      <motion.div variants={fadeUp} className={imgClassName}>
        {imgSrc && (
          <Image
            src={imgSrc}
            width={imgWidth || 100}
            height={imgHeight || 100}
            alt={imgalt || "img"}
            className="mb-3"
          />
        )}
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        className={cn(
          "text-3xl font-medium tracking-wide leading-10 md:leading-12 text-center",
          headingClassName
        )}
      >
        {heading}
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        className="text-muted-foreground mt-1 max-w-xl mx-auto text-center"
      >
        {desciption}
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={fadeUp}
        className="mt-10 flex flex-row items-center justify-center gap-4"
      >
        {/* 🔹 Button 1 */}
        {btnText[0] && (
          <Button
            asChild
            size="lg"
            className={cn(
              "group bg-primary text-primary-foreground hover:shadow-primary/30 relative overflow-x-hidden rounded-full px-6 shadow-lg transition-all duration-300",
              btn1ClassName
            )}
          >
            <Link href={link1}>
              <span className="relative z-10 flex items-center">
                {btnText[0]}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="from-primary via-primary/90 to-primary/80 absolute inset-0 z-0 bg-linear-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </Link>
          </Button>
        )}

        {/* 🔹 Button 2 */}
        {btnText[1] && (
          <Button
            asChild
            variant="link"
            size="lg"
            className="border-border bg-background/50 flex items-center gap-2 rounded-full backdrop-blur-sm"
          >
            <Link href={link2}>
              {btnText[1]}
              <ChevronRight />
            </Link>
          </Button>
        )}
      </motion.div>
    </motion.div>
  );
}

export default ContentSection;
