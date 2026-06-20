"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-[70] flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-lg shadow-black/30" : "bg-transparent"
        }`}
      >
        <a
          href="#hero"
          data-cursor-hover
          className="font-mono text-sm tracking-wider text-white/90"
        >
          Chethan T V<span className="text-signal"></span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                data-cursor-hover
                href={l.href}
                className="text-[13px] text-white/55 transition hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <MagneticButton
          href="#contact"
          className="rounded-full bg-white px-4 py-2 text-xs font-medium text-ink"
        >
          Hire me
        </MagneticButton>
      </nav>
    </motion.header>
  );
}
