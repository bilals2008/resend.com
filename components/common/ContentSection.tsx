// File: components/common/ContentSection.tsx
"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface Props {
  imgSrc?: string;
  imgalt?: string;
  ClassName?: string;
  heading?: string;
  desciption?: string;
  btnText?: string[];
}

function ContentSection({
  imgSrc,
  imgalt,
  heading,
  desciption,
  btnText = [],
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

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col items-center justify-center mx-auto w-full px-2 py-10"
    >
      {/* Image */}
      <motion.div variants={fadeUp}>
        <Image
          src={imgSrc || "/images/GmailBox.jpg"}
          width={100}
          height={100}
          alt={imgalt || "img"}
          className="mb-3"
        />
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        className="text-3xl font-bold tracking-tighter leading-10 md:leading-12 text-center"
      >
        {heading || "Integrate this morning"}
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        className="text-muted-foreground mt-1 max-w-xl mx-auto text-center"
      >
        {desciption ||
          `A simple, elegant interface so you can start sending emails in minutes.
        It fits right into your code with SDKs for your favorite programming
        languages.`}
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={fadeUp}
        className="mt-10 flex flex-row items-center justify-center gap-4"
      >
        {btnText[0] && (
          <Button
            size="lg"
            className="group bg-primary text-primary-foreground hover:shadow-primary/30 relative overflow-x-hidden rounded-full px-6 shadow-lg transition-all duration-300"
          >
            <span className="relative z-10 flex items-center">
              {btnText[0]}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="from-primary via-primary/90 to-primary/80 absolute inset-0 z-0 bg-linear-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          </Button>
        )}

        {btnText[1] && (
          <Button
            variant="link"
            size="lg"
            className="border-border bg-background/50 flex items-center gap-2 rounded-full backdrop-blur-sm"
          >
            {btnText[1]}
            <ChevronRight />
          </Button>
        )}
      </motion.div>
    </motion.div>
  );
}

export default ContentSection;
