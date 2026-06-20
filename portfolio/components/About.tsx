"use client";

import { motion } from "framer-motion";
import Counter from "@/components/Counter";
import SectionHeading from "@/components/SectionHeading";
import { about, stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-28">
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
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl px-6 py-10 text-center"
            >
              <div className="font-display text-5xl font-bold text-gradient">
                <Counter value={s.value} suffix={s.suffix} decimals={s.value % 1 !== 0 ? 1 : 0} />
              </div>
              <p className="font-mono-label mt-3 text-[11px] text-white/45">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
