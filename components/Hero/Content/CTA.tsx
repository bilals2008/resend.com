// File: components/Hero/Content/CTA.tsx
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import React from 'react'
import { motion } from "motion/react";
function CTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-10 flex flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
    >
      <Button
        size="lg"
        className="group bg-primary text-primary-foreground hover:shadow-primary/30 relative overflow-x-hidden rounded-full px-6 shadow-lg transition-all duration-300 "
      >
        <span className="relative z-10 flex items-center">
          Get Started
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
        <span className="from-primary via-primary/90 to-primary/80 absolute inset-0 z-0 bg-linear-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
      </Button>

      <Button
        variant="link"
        size="lg"
        className="border-border bg-background/50 flex items-center gap-2 rounded-full backdrop-blur-sm"
      >
        Documentation
        <ChevronRight />
      </Button>
    </motion.div>
  );
}

export default CTA
