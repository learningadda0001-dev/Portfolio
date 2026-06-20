"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  href,
  className = "",
  onClick,
  external,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.35, y: y * 0.35 });
  }

  function reset() {
    setPos({ x: 0, y: 0 });
  }

  const content = (
    <motion.span
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 14, mass: 0.4 }}
      className="relative inline-flex items-center justify-center"
    >
      {children}
    </motion.span>
  );

  const shared = {
    ref: ref as any,
    onMouseMove: handleMove,
    onMouseLeave: reset,
    "data-cursor-hover": true,
    className: `magnetic-btn inline-flex select-none items-center justify-center ${className}`,
  };

  if (href) {
    return (
      <a
        {...shared}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button {...shared} onClick={onClick}>
      {content}
    </button>
  );
}
