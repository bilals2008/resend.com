// File: components/animations/variants.ts
import { Variants } from "framer-motion";

/* 🔹 Parent container for staggered animations */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: "easeOut",
    },
  },
};

/* 🔹 Fade + upward lift */
export const fadeUp: Variants = {
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

/* 🔹 Pure fade-in (no motion) */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* 🔹 Slide in from direction (reusable utility) */
export const slideIn = (
  direction: "left" | "right" | "up" | "down" = "up",
  delay: number = 0
): Variants => {
  const dir = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: 50 },
    down: { x: 0, y: -50 },
  }[direction];

  return {
    hidden: { opacity: 0, ...dir },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay,
      },
    },
  };
};

/* 🔹 Zoom in (for icons, cards, images) */
export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/* 🔹 Scale-up slight pop (buttons, badges, logos) */
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

/* 🔹 Rotate-in (light subtle entry rotation for icons or badges) */
export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -5, scale: 0.9 },
  show: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* 🔹 Fade-in from bottom with slight delay (great for mobile stacking) */
export const fadeUpMobile: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* 🔹 Card hover scale (reusable hover effect, not heavy) */
export const hoverPop: Variants = {
  rest: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
  hover: { scale: 1.03, transition: { duration: 0.2, ease: "easeOut" } },
};

/* 🔹 Simple stagger for mobile sections (for stacking content vertically) */
export const mobileStagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, ease: "easeOut" },
  },
};
export const slideInScroll = (
  direction: "left" | "right" = "left",
  delay: number = 0
): Variants => {
  const offset = direction === "left" ? -100 : 100;

  return {
    hidden: { opacity: 0, x: offset },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay,
      },
    },
  };
};
