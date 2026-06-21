"use client";

export default function TooltipIconLink({
  href,
  label,
  download,
  external,
  children,
}: {
  href: string;
  label: string;
  download?: boolean;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative">
      <a
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={label}
        data-cursor-hover
        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/70 transition hover:scale-110 hover:bg-white/10 hover:text-signal"
      >
        {children}
      </a>
      <span
        role="tooltip"
        className="glass-strong pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1.5 text-xs text-white/85 opacity-0 transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100"
      >
        {label}
      </span>
    </div>
  );
}
