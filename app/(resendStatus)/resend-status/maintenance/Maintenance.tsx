"use client";
import React from "react";
import { motion } from "motion/react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Wrench } from "lucide-react";
import {
  fadeUp,
  zoomIn,
  hoverPop,
  staggerContainer,
  rotateIn,
} from "@/components/animations/variants";


function Maintenance() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="max-w-3xl mx-auto my-10 p-4"
    >
      {/* 🔸 Alert Section */}
      <motion.div
        variants={zoomIn}
        whileHover="hover"
        animate="rest"
        initial="rest"
      >
       
        <motion.div variants={hoverPop}>
          <Alert className="border-yellow-500/30 bg-yellow-500/10 cursor-pointer transition-all">
            <motion.div variants={rotateIn} className="flex items-center gap-2">
              <Wrench className="h-5 w-5 text-yellow-500" />
              <AlertTitle className="text-yellow-400 font-semibold">
                Scheduled Maintenance
              </AlertTitle>
            </motion.div>
            <AlertDescription className="text-sm text-gray-300 mt-1">
              Our systems are currently undergoing scheduled maintenance. Some
              services may be temporarily unavailable. We expect full
              functionality to return soon.
            </AlertDescription>
          </Alert>
        </motion.div>
      </motion.div>

      {/* 🔸 Info Box */}
      <motion.div
        variants={fadeUp}
        className="mt-6 rounded-md border border-border bg-[#191C24] p-4 cursor-default hover:bg-[#1f2330] transition-colors duration-300"
      >
        <h3 className="text-sm font-medium text-gray-300 mb-1">
          Maintenance Window
        </h3>
        <p className="text-xs text-gray-400">
          🕒 From: 2:00 AM — To: 4:00 AM (UTC) 📅 Date: October 31, 2025
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Maintenance;
