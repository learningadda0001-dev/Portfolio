"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Circle } from "lucide-react";

export default function ProjectCard({
  code,
  label,
  title,
  description,
  tech,
  index,
  onOpen,
}: {
  code: string;
  label: string;
  title: string;
  description: string;
  tech: string[];
  index: number;
  onOpen: () => void;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start end", "end start"],
  });
  const scrollRotate = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);
  const scrollY = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -40]);

  function handleMove(e: React.MouseEvent) {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -12, y: px * 16 });
  }

  function reset() {
    setTilt({ x: 0, y: 0 });
    setHovering(false);
  }

  return (
    <motion.div
      ref={wrapRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ y: scrollY, perspective: 1000 }}
    >
      <motion.div
        ref={tiltRef}
        onMouseMove={handleMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={reset}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        style={{ rotateZ: scrollRotate, transformStyle: "preserve-3d" }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
      >
        <button
          data-cursor-hover
          onClick={onOpen}
          className="group relative block w-full overflow-hidden rounded-2xl glass text-left shadow-xl shadow-black/20 transition-shadow duration-500 hover:shadow-2xl hover:shadow-signal/10"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* browser-style live preview frame */}
          <div
            className="relative overflow-hidden bg-gradient-to-br from-[#141a2c] via-[#0d111c] to-[#1a1430]"
            style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
          >
            {/* fake browser chrome */}
            <div className="flex items-center gap-1.5 border-b border-white/5 bg-black/20 px-3 py-2">
              <Circle className="h-2 w-2 fill-white/15 text-white/15" />
              <Circle className="h-2 w-2 fill-white/15 text-white/15" />
              <Circle className="h-2 w-2 fill-white/15 text-white/15" />
              <span className="ml-2 truncate rounded-full bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-white/30">
                {label.toLowerCase().replace(/\s+/g, "")}.app
              </span>
            </div>

            <div className="relative flex h-36 items-center justify-center overflow-hidden">
              <div className="grid-overlay absolute inset-0 opacity-40" />
              <span className="absolute left-4 top-3 font-mono text-xs text-white/30">
                {code}
              </span>
              <span className="font-display text-xl font-bold tracking-wide text-white/90 transition-transform duration-500 group-hover:scale-105">
                {label}
              </span>
              {/* animated scan/shine sweep on hover, simulating a live preview */}
              <motion.div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(100deg, transparent 30%, rgba(255,255,255,0.10) 50%, transparent 70%)",
                }}
                animate={hovering ? { x: ["-120%", "120%"] } : { x: "-120%" }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
              />
              <span className="absolute right-4 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/8 opacity-0 transition duration-300 group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4 text-white" />
              </span>
            </div>
          </div>

          <div className="p-6" style={{ transform: "translateZ(10px)" }}>
            <h3 className="font-display text-lg font-semibold text-white">
              {title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-white/55">
              {description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-white/50"
                >
                  {t}
                </span>
              ))}
              {tech.length > 3 && (
                <span className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-white/40">
                  +{tech.length - 3}
                </span>
              )}
            </div>
          </div>
        </button>
      </motion.div>
    </motion.div>
  );
}
