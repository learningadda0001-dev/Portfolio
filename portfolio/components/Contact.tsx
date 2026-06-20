"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Check, Copy } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import MagneticButton from "@/components/MagneticButton";
import { profile } from "@/lib/data";

const cards = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    copyable: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    copyable: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: profile.linkedin,
    href: profile.linkedinHref,
    copyable: false,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: undefined,
    copyable: false,
  },
];

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  function copy(value: string, key: string) {
    navigator.clipboard.writeText(value);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1600);
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="aurora-bg absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <SectionHeading eyebrow="05 / Contact" title="Let's Work Together" />
        <p className="mx-auto -mt-8 mb-14 max-w-md text-white/55">
          Open to full-time & freelance opportunities.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {cards.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass group relative flex items-center gap-4 rounded-2xl p-5 text-left transition hover:bg-white/[0.07]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5">
                <c.icon className="h-5 w-5 text-signal" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono-label text-[10px] text-white/35">
                  {c.label}
                </p>
                {c.href ? (
                  <a
                    data-cursor-hover
                    href={c.href}
                    target={c.label === "LinkedIn" ? "_blank" : undefined}
                    rel={c.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                    className="block truncate text-sm text-white/85 transition hover:text-signal"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="truncate text-sm text-white/85">{c.value}</p>
                )}
              </div>
              {c.copyable && (
                <button
                  data-cursor-hover
                  onClick={() => copy(c.value, c.label)}
                  aria-label={`Copy ${c.label}`}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/40 opacity-0 transition group-hover:opacity-100 hover:bg-white/15 hover:text-white"
                >
                  {copiedKey === c.label ? (
                    <Check className="h-3.5 w-3.5 text-amber" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            href={`mailto:${profile.email}`}
            className="gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-signal"
          >
            <Mail className="h-4 w-4" />
            Hire Me
          </MagneticButton>
          <MagneticButton
            href={profile.linkedinHref}
            external
            className="gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
