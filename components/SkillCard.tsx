"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Database,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Code2,
  Layers,
  Database,
  Wrench,
};

export default function SkillCard({
  title,
  icon,
  items,
  index,
}: {
  title: string;
  icon: string;
  items: string[];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const Icon = ICONS[icon] ?? Code2;

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -10, y: px * 14 });
  }

  function reset() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="glass group relative h-full overflow-hidden rounded-2xl p-7"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(220px circle at var(--mx,50%) var(--my,50%), rgba(125,211,252,0.12), transparent 70%)",
          }}
        />
        <div
          className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5"
          style={{ transform: "translateZ(40px)" }}
        >
          <Icon className="h-5 w-5 text-signal" />
        </div>
        <h3
          className="mb-4 font-display text-lg font-semibold text-white"
          style={{ transform: "translateZ(30px)" }}
        >
          {title}
        </h3>
        <div className="flex flex-wrap gap-2" style={{ transform: "translateZ(20px)" }}>
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/65"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
