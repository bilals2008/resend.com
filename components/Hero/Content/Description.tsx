// File: components/Hero/Content/Description.tsx
import React from 'react'
import { motion } from "motion/react";
function Description() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-muted-foreground mt-6 max-w-xl mx-auto lg:mx-0"
    >
      The best way to reach humans instead of spam folders. Deliver
      transactional and marketing emails at scale.
    </motion.p>
  );
}

export default Description
