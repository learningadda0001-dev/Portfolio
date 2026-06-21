"use client";

import { motion } from "framer-motion";

export default function FloatingCube({
  size = 46,
  className = "",
  duration = 14,
  color = "rgba(125,211,252,0.35)",
}: {
  size?: number;
  className?: string;
  duration?: number;
  color?: string;
}) {
  const half = size / 2;
  const faceStyle: React.CSSProperties = {
    position: "absolute",
    width: size,
    height: size,
    border: `1px solid ${color}`,
    background: "rgba(255,255,255,0.02)",
  };

  return (
    <div
      className={`pointer-events-none hidden select-none lg:block ${className}`}
      style={{ perspective: 700 }}
      aria-hidden
    >
      <motion.div
        animate={{ rotateX: 360, rotateY: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        style={{
          width: size,
          height: size,
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        <div style={{ ...faceStyle, transform: `translateZ(${half}px)` }} />
        <div style={{ ...faceStyle, transform: `rotateY(180deg) translateZ(${half}px)` }} />
        <div style={{ ...faceStyle, transform: `rotateY(90deg) translateZ(${half}px)` }} />
        <div style={{ ...faceStyle, transform: `rotateY(-90deg) translateZ(${half}px)` }} />
        <div style={{ ...faceStyle, transform: `rotateX(90deg) translateZ(${half}px)` }} />
        <div style={{ ...faceStyle, transform: `rotateX(-90deg) translateZ(${half}px)` }} />
      </motion.div>
    </div>
  );
}
