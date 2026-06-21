"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function useMouseTilt(maxDeg: number) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    function onMove(e: MouseEvent) {
      const px = (e.clientX / window.innerWidth - 0.5) * 2;
      const py = (e.clientY / window.innerHeight - 0.5) * 2;

      setTilt({
        x: py * -maxDeg,
        y: px * maxDeg,
      });
    }

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, [maxDeg]);

  return tilt;
}

export default function OrbitAvatar({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const tilt = useMouseTilt(7);

  return (
    <div
      className="relative h-72 w-72 sm:h-[22rem] sm:w-[22rem]"
      style={{ perspective: 1200 }}
    >
      {/* Main Avatar */}
      <motion.div
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 16,
          mass: 0.6,
        }}
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Ambient Glow */}
        <motion.div
          className="absolute -inset-14 rounded-full blur-3xl"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(125,211,252,0.25), rgba(167,139,250,0.25), rgba(245,183,92,0.22), rgba(125,211,252,0.25))",
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.08, 1],
          }}
          transition={{
            rotate: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        {/* Outer Ring */}
        <motion.div
          className="absolute rounded-full border border-white/10"
          style={{
            inset: "-42px",
            boxShadow:
              "0 0 60px rgba(125,211,252,0.12), inset 0 0 20px rgba(255,255,255,0.04)",
          }}
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Main Gradient Ring */}
        <motion.div
          className="absolute rounded-full"
          style={{
            inset: "-28px",
            background:
              "conic-gradient(from 0deg, #7dd3fc, #a78bfa, #f5b75c, #7dd3fc)",
            WebkitMaskImage:
              "radial-gradient(closest-side, transparent calc(100% - 8px), black calc(100% - 8px))",
            maskImage:
              "radial-gradient(closest-side, transparent calc(100% - 8px), black calc(100% - 8px))",
            filter: "drop-shadow(0 0 22px rgba(125,211,252,0.45))",
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Profile Image */}
        <div className="absolute inset-3 overflow-hidden rounded-full border border-white/10 shadow-2xl shadow-black/50">
          <Image
            src={src}
            alt={alt}
            fill
            priority
            className="object-cover"
            sizes="400px"
          />
        </div>
      </motion.div>

      {/* Available Badge */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-3 -right-3 z-40 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl"
      >
        <span className="h-2 w-2 rounded-full bg-green-400" />
        <span className="text-xs text-white/80">Available</span>
      </motion.div>
    </div>
  );
}