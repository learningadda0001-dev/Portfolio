"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Counter from "@/components/Counter";
import SectionHeading from "@/components/SectionHeading";
import FloatingCube from "@/components/FloatingCube";
import { about, stats } from "@/lib/data";

function StatCard({
  s,
  i,
}: {
  s: (typeof stats)[number];
  i: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -8, y: px * 10 });
  }
  function reset() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      style={{ perspective: 700 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="glass rounded-2xl px-6 py-10 text-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="font-display text-5xl font-bold text-gradient"
          style={{ transform: "translateZ(30px)" }}
        >
          <Counter value={s.value} suffix={s.suffix} decimals={s.value % 1 !== 0 ? 1 : 0} />
        </div>
        <p className="font-mono-label mt-3 text-[11px] text-white/45">{s.label}</p>
      </motion.div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <FloatingCube className="absolute right-[6%] top-10" size={34} duration={13} color="rgba(245,183,92,0.3)" />
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="01 / About" title="Profile" />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-balance text-center text-lg leading-relaxed text-white/65 sm:text-xl"
        >
          {about}
        </motion.p>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((s, i) => (
            <StatCard key={s.label} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
