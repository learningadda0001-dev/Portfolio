"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-14 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <p className="font-mono-label mb-3 text-[11px] text-signal/80">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
    </motion.div>
  );
}
