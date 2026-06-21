"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import ParticleField from "@/components/ParticleField";
import OrbitAvatar from "@/components/OrbitAvatar";
import FloatingTechIcons from "@/components/FloatingTechIcons";
import MagneticButton from "@/components/MagneticButton";
import Counter from "@/components/Counter";
import { profile, stats } from "@/lib/data";

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
    <span className="relative inline-grid align-bottom">
      {ROTATING.map((skill, i) => (
        <motion.span
          key={skill}
          className="col-start-1 row-start-1 whitespace-nowrap text-gradient"
          initial={false}
          animate={
            i === idx
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 6, filter: "blur(4px)" }
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
      <FloatingTechIcons />
      <div className="noise-layer pointer-events-none absolute inset-0 opacity-[0.025]" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 pb-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-fit"
        >
          <div className="relative">
            <OrbitAvatar src={profile.image} alt={profile.name} />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="text-center lg:text-left"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="mt-4 flex items-center justify-center gap-2 text-xl text-white/70 sm:text-2xl lg:justify-start"
          >
            <span>{typed}</span>
            <span className="blink text-signal">_</span>
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="mx-auto mt-6 max-w-xl text-balance text-base text-white/55 sm:text-lg lg:mx-0"
          >
            4.3+ years building scalable web apps with{" "}
            <RotatingSkill />
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
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

          {/* animated stats strip */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 border-t border-white/10 pt-8 lg:justify-start"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="font-display text-2xl font-bold text-white sm:text-3xl">
                  <Counter value={s.value} suffix={s.suffix} decimals={s.value % 1 !== 0 ? 1 : 0} />
                </div>
                <p className="font-mono-label mt-1 text-[10px] text-white/40">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
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