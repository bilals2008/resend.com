// File: app/about/BeliefsSection/FeatureCard.tsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { slideInScroll } from "@/components/animations/variants";

const images: { src: string; direction: "left" | "right" }[] = [
  { src: "/images/About/card-1.png", direction: "left" },
  { src: "/images/About/card-2.png", direction: "right" },
  { src: "/images/About/card-3.png", direction: "left" },
  { src: "/images/About/card-4.png", direction: "right" },
];

function FeatureCard() {
  return (
    <div className="relative w-full flex flex-col items-center py-10 overflow-hidden">
      {images.map((img, i) => (
        <ScrollImage
          key={i}
          src={img.src}
          direction={img.direction}
          index={i}
        />
      ))}
    </div>
  );
}

function ScrollImage({
  src,
  direction,
  index,
}: {
  src: string;
  direction: "left" | "right";
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  // Scroll-based parallax movement (depth effect)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "60px"]);

  return (
    <motion.div
      ref={ref}
      variants={slideInScroll(direction)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      style={{ y }}
      className={`relative ${
        index === 1
          ? "md:rotate-2 md:right-20 md:-top-20"
          : index === 2
          ? "md:rotate-2 md:-top-40 md:left-0"
          : index === 3
          ? "md:-rotate-3 md:-top-64 md:right-20"
          : ""
      }`}
    >
      <Image
        src={src}
        alt={`FeatureCard image ${index + 1}`}
        width={600}
        height={400}
        className="rounded-2xl object-cover max-w-full"
      />
    </motion.div>
  );
}

export default FeatureCard;
