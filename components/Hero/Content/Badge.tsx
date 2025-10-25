// File: components/Hero/Content/Badge.tsx
"use client";

import React from "react";
import {motion} from "motion/react"
import { ChevronRight } from"lucide-react";

function Badge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6 flex justify-center lg:justify-start"
    >
      {/* Animated border wrapper */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // moves the gradient
        }}
        transition={{
          duration: 2, // speed
          repeat: Infinity,
          ease: "linear",
        }}
        className="inline-flex items-center rounded-full p-px bg-[linear-gradient(90deg,#02FC4F70,#FFB52B70,#A02BFE70,#02FCEF70)] bg-size-[500%_500%] hover:shadow-sm hover:shadow-purple-400 transition-colors duration-300 cursor-pointer"
      >
        <div className="bg-background/80 rounded-full px-3 py-1 text-sm backdrop-blur-sm flex items-center">
          <span className="text-muted-foreground bg-transparent">
            Introducing Marketing Emails
          </span>
          <ChevronRight className="text-muted-foreground ml-1 h-4 w-4" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Badge;
