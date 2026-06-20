"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Command,
  User,
  Layers,
  Briefcase,
  FolderGit2,
  Mail,
  Copy,
  Check,
} from "lucide-react";
import { profile } from "@/lib/data";

const items = [
  { id: "about", label: "About", icon: User, href: "#about" },
  { id: "skills", label: "Skills", icon: Layers, href: "#skills" },
  { id: "experience", label: "Experience", icon: Briefcase, href: "#experience" },
  { id: "projects", label: "Projects", icon: FolderGit2, href: "#projects" },
  { id: "contact", label: "Contact", icon: Mail, href: "#contact" },
];

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  function go(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    close();
  }

  function copyEmail() {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <>
      <button
        data-cursor-hover
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[80] hidden items-center gap-2 rounded-full glass-strong px-4 py-2.5 text-xs text-white/70 transition hover:text-white md:flex"
      >
        <Command className="h-3.5 w-3.5" />
        <span className="font-mono-label text-[10px]">⌘K to navigate</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-start justify-center bg-black/60 px-4 pt-[14vh] backdrop-blur-sm"
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
                <Command className="h-4 w-4 text-white/40" />
                <span className="font-mono text-sm text-white/40">
                  Jump to a section…
                </span>
              </div>
              <ul className="p-2">
                {items.map((item) => (
                  <li key={item.id}>
                    <button
                      data-cursor-hover
                      onClick={() => go(item.href)}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-white/80 transition hover:bg-white/8 hover:text-white"
                    >
                      <item.icon className="h-4 w-4 text-signal" />
                      {item.label}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    data-cursor-hover
                    onClick={copyEmail}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-white/80 transition hover:bg-white/8 hover:text-white"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-amber" />
                    ) : (
                      <Copy className="h-4 w-4 text-signal" />
                    )}
                    {copied ? "Email copied" : "Copy email address"}
                  </button>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
