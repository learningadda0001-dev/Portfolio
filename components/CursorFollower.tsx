"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [enabled, setEnabled] = useState(false);
  const [hoveringInteractive, setHoveringInteractive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!isFine || prefersReduced) return;
    setEnabled(true);

    function move(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      setHoveringInteractive(!!target.closest("[data-cursor-hover]"));
    }
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{ left: sx, top: sy }}
      className="pointer-events-none fixed z-[90] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      aria-hidden
    >
      <motion.div
        animate={{
          scale: hoveringInteractive ? 2.4 : 1,
          opacity: hoveringInteractive ? 0.9 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-3 w-3 rounded-full bg-white"
      />
    </motion.div>
  );
}
