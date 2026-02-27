"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type FadeInWhenVisibleProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "footer";
  initialY?: number;
  delay?: number;
  amount?: number;
  duration?: number;
};

export function FadeInWhenVisible({
  children,
  className,
  id,
  as = "div",
  initialY = 24,
  delay = 0,
  amount = 0.4,
  duration = 0.6,
}: FadeInWhenVisibleProps) {
  const MotionTag =
    as === "section" ? motion.section : as === "footer" ? motion.footer : motion.div;

  return (
    <MotionTag
      id={id}
      className={className}
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, ease: "easeOut", delay }}
      viewport={{ once: true, amount }}
    >
      {children}
    </MotionTag>
  );
}

