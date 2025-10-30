"use client";
import React from "react";
import { motion } from "motion/react";
import { securityFeatures } from "./EnterpriseSecurityData";
import { staggerContainer, zoomIn } from "@/components/animations/variants";

function EnterpriseSecurityCard() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8"
    >
      {securityFeatures.map((feature) => (
        <motion.div
          key={feature.id}
          variants={zoomIn}
          className="
            p-6 max-w-80 mx-auto text-center transition-colors
            border-b mb-5
            md:rounded-none md:border md:border-r md:border-b md:border-t-0 md:border-l-0
            nth-[3n]:lg:border-r-0
            nth-last-[-n+3]:lg:border-b-0
          "
        >
          <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default EnterpriseSecurityCard;
