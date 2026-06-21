"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { getGsap } from "@/lib/gsap";

export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const words = title.split(" ");

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const el = ref.current;
    if (!el || prefersReduced) return;

    const { gsap, ScrollTrigger } = getGsap();
    const spans = el.querySelectorAll("span[data-word]");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        spans,
        { yPercent: 120, rotateX: -40, opacity: 0 },
        {
          yPercent: 0,
          rotateX: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.07,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <p className="font-mono-label mb-3 text-[11px] text-signal/80">{eyebrow}</p>
      <h2
        ref={ref}
        style={{ perspective: 600 }}
        className="font-display text-4xl font-bold leading-[1.25] tracking-tight text-white sm:text-5xl"
      >
        {words.map((w, i) => (
          <span key={i} className="inline-block pb-2 align-bottom" style={{ perspective: 600 }}>
            <span data-word className="inline-block" style={{ transformOrigin: "50% 100%" }}>
              {w}
              {i < words.length - 1 ? "\u00A0" : ""}
            </span>
          </span>
        ))}
      </h2>
    </motion.div>
  );
}