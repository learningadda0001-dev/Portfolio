"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <button
        data-cursor-hover
        onClick={onOpen}
        className="group relative block w-full overflow-hidden rounded-2xl glass text-left transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-signal/10"
      >
        <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-[#141a2c] via-[#0d111c] to-[#1a1430]">
          <div className="grid-overlay absolute inset-0 opacity-40" />
          <span className="absolute left-4 top-4 font-mono text-xs text-white/30">
            {code}
          </span>
          <span className="font-display text-2xl font-bold tracking-wide text-white/90 transition-transform duration-500 group-hover:scale-105">
            {label}
          </span>
          <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/8 opacity-0 transition duration-300 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4 text-white" />
          </span>
        </div>

        <div className="p-6">
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
  );
}
