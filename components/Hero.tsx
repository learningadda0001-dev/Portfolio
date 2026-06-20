"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import ParticleField from "@/components/ParticleField";
import MagneticButton from "@/components/MagneticButton";
import { profile } from "@/lib/data";

const ROTATING = [
  "PHP",
  "Laravel",
  "CodeIgniter",
  "ASP.NET Core",
  "C#",
  "REST APIs",
];

function useTypewriter(text: string, speed = 38, startDelay = 300) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;
    const start = setTimeout(function tick() {
      timeout = setInterval(() => {
        i++;
        setOut(text.slice(0, i));
        if (i >= text.length) clearInterval(timeout);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearInterval(timeout);
    };
  }, [text, speed, startDelay]);
  return out;
}

function RotatingSkill() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((v) => (v + 1) % ROTATING.length), 1800);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-block h-[1.3em] w-[9.5ch] overflow-hidden align-bottom">
      {ROTATING.map((skill, i) => (
        <motion.span
          key={skill}
          className="absolute left-0 top-0 whitespace-nowrap text-gradient"
          initial={false}
          animate={
            i === idx
              ? { y: 0, opacity: 1 }
              : { y: i < idx ? -28 : 28, opacity: 0 }
          }
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {skill}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const typed = useTypewriter("Software Developer");

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink pt-28"
    >
      <div className="aurora-bg absolute inset-0" />
      <div className="grid-overlay absolute inset-0" />
      <ParticleField />
      <div className="noise-layer pointer-events-none absolute inset-0 opacity-[0.025]" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 pb-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-fit"
        >
          <div className="relative h-64 w-64 sm:h-80 sm:w-80">
            <motion.div
              className="absolute -inset-3 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #7dd3fc, #a78bfa, #f5b75c, #7dd3fc)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-[6px] rounded-full bg-ink" />
            <div className="absolute inset-3 overflow-hidden rounded-full border border-white/10">
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                priority
                className="object-cover"
                sizes="320px"
              />
            </div>

            {/* floating particles around avatar */}
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.span
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full bg-signal/80"
                style={{
                  top: `${15 + i * 16}%`,
                  left: i % 2 === 0 ? "-6%" : "104%",
                }}
                animate={{ y: [0, -16, 0], opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
              />
            ))}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -bottom-2 -right-4 flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] text-white/80"
            >
              <span className="status-dot h-2 w-2 rounded-full bg-signal" />
              <span className="font-mono-label">Available</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Text */}
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-mono-label mb-4 text-[11px] text-signal/80"
          >
            // building production systems since 2022
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <div className="mt-4 flex items-center justify-center gap-2 text-xl text-white/70 sm:text-2xl lg:justify-start">
            <span>{typed}</span>
            <span className="blink text-signal">_</span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mx-auto mt-6 max-w-xl text-balance text-base text-white/55 sm:text-lg lg:mx-0"
          >
            4.3+ years building scalable web apps with{" "}
            <RotatingSkill />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <MagneticButton
              href={`mailto:${profile.email}`}
              className="group gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-signal"
            >
              <Mail className="h-4 w-4" />
              Hire Me
            </MagneticButton>
            <MagneticButton
              href={profile.linkedinHref}
              external
              className="group gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View LinkedIn
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        data-cursor-hover
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition hover:text-white"
      >
        <span className="font-mono-label text-[10px]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
