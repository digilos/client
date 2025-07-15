"use client";

import { motion, MotionProps } from "motion/react";
import { HTMLAttributes, ReactNode } from "react";

export function ButtonAnimatedBG({
  children,
  slideBg,
  className = "",
  ...props
}: {
  children: ReactNode;
  slideBg: string;
} & HTMLAttributes<HTMLElement> &
  MotionProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className={`relative inline-flex items-center justify-center rounded overflow-hidden ${className}`}
      {...props}
    >
      <motion.span
        className={`${slideBg} absolute inset-0 rounded z-0`}
        transition={{ duration: 0.3, ease: "linear" }}
        variants={{
          hover: { scaleX: 1 },
          rest: { scaleX: 0 },
        }}
        initial={{ scaleX: 0, originX: 1 }}
      ></motion.span>
      <span className="z-50 inset-0">{children}</span>
    </motion.div>
  );
}
