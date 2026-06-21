"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { experience, education } from "@/lib/data";

export default function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="03 / Path" title="Work Experience" />

        <div ref={trackRef} className="relative pl-8">
          {/* static faint track */}
          <div className="absolute left-0 top-0 h-full w-px bg-white/10" />
          {/* animated draw-on-scroll line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-0 top-0 w-px bg-gradient-to-b from-signal via-violet to-amber"
          />

          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-4 pb-2"
            >
              <span className="absolute -left-[39px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-ink ring-2 ring-signal/60">
                <span className="status-dot h-2 w-2 rounded-full bg-signal" />
              </span>

              <div className="glass rounded-2xl p-7 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-signal/5">
                <p className="font-mono-label text-[11px] text-amber">{job.date}</p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {job.title}
                  </h3>
                  <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs text-white/55">
                    <Briefcase className="h-3 w-3" /> {job.company}
                  </span>
                </div>
                <p className="mt-1 text-sm text-white/40">{job.location}</p>
                <ul className="mt-5 space-y-3">
                  {job.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-white/65">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-signal/70" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <span className="absolute -left-[39px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-ink ring-2 ring-violet/60">
              <span className="h-2 w-2 rounded-full bg-violet" />
            </span>
            <div className="glass rounded-2xl p-7 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet/5">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-xl font-semibold text-white">
                  {education.degree}
                </h3>
                <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs text-white/55">
                  <GraduationCap className="h-3 w-3" /> Education
                </span>
              </div>
              <p className="mt-2 text-sm text-white/60">{education.school}</p>
              <p className="mt-1 font-mono text-xs text-white/40">{education.detail}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
