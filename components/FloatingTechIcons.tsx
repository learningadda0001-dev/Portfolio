"use client";

import { motion } from "framer-motion";
import { Code2, Database, Server, Braces, Globe, Terminal } from "lucide-react";

const ICONS = [
  { Icon: Code2, top: "14%", left: "6%", duration: 7, delay: 0 },
  { Icon: Database, top: "70%", left: "4%", duration: 8.5, delay: 0.6 },
  { Icon: Server, top: "20%", left: "94%", duration: 7.5, delay: 0.3 },
  { Icon: Braces, top: "62%", left: "92%", duration: 9, delay: 0.9 },
  { Icon: Globe, top: "8%", left: "78%", duration: 6.5, delay: 1.2 },
  { Icon: Terminal, top: "85%", left: "20%", duration: 8, delay: 0.4 },
];

export default function FloatingTechIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
      {ICONS.map(({ Icon, top, left, duration, delay }, i) => (
        <motion.div
          key={i}
          className="absolute flex h-11 w-11 items-center justify-center rounded-2xl glass"
          style={{ top, left }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0.5, 0.85, 0.5], y: [0, -18, 0] }}
          transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon className="h-5 w-5 text-white/45" />
        </motion.div>
      ))}
    </div>
  );
}
