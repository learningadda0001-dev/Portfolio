"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { projects } from "@/lib/data";

type Project = (typeof projects)[number];

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 px-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong relative w-full max-w-lg overflow-hidden rounded-3xl"
          >
            <button
              data-cursor-hover
              onClick={onClose}
              className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-[#1a2138] via-[#101422] to-[#241a3a]">
              <div className="grid-overlay absolute inset-0 opacity-40" />
              <span className="font-display text-3xl font-bold text-white/90">
                {project.label}
              </span>
              <span className="absolute left-5 top-5 font-mono text-xs text-white/40">
                {project.code}
              </span>
            </div>

            <div className="p-8">
              <h3 className="font-display text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {project.description}
              </p>

              <div className="mt-6">
                <p className="font-mono-label mb-3 text-[10px] text-white/35">
                  Tech stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/65"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-7 border-t border-white/10 pt-5 text-xs text-white/35">
                This project was delivered as part of client work — source and
                live links are private.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
