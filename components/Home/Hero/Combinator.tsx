// File: components/Hero/Combinator.tsx
"use client"
import React from 'react'
import { motion } from "motion/react";
function Combinator() {
  return (
    <motion.div
      className="text-center font-light "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      Backed by
      <span className="bg-[#FF844B] text-white font-bold rounded w-5 h-5 px-2 py-1 mx-2">
        Y
      </span>
      Combinator
    </motion.div>
  );
}

export default Combinator
