"use client";

import { motion } from "framer-motion";

export default function SegmentedRing({
  insetPx,
  thickness,
  gradient,
  duration,
  reverse = false,
  tilt = 8,
}: {
  insetPx: number;
  thickness: number;
  gradient: string;
  duration: number;
  reverse?: boolean;
  tilt?: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        inset: `-${insetPx}px`,
        background: gradient,
        WebkitMaskImage: `radial-gradient(closest-side, transparent calc(100% - ${thickness}px), black calc(100% - ${thickness}px))`,
        maskImage: `radial-gradient(closest-side, transparent calc(100% - ${thickness}px), black calc(100% - ${thickness}px))`,
      }}
      animate={{
        rotate: reverse ? -360 : 360,
        rotateX: [0, tilt, 0, -tilt, 0],
        scale: [1, 1.015, 1],
      }}
      transition={{
        rotate: { duration, repeat: Infinity, ease: "linear" },
        rotateX: { duration: duration * 0.55, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: duration * 0.4, repeat: Infinity, ease: "easeInOut" },
      }}
    />
  );
}
