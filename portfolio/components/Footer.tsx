import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 text-xs text-white/35 sm:flex-row">
        <p className="font-mono">© {new Date().getFullYear()} {profile.name}</p>
        <p className="font-mono-label">Designed &amp; built with care</p>
      </div>
    </footer>
  );
}
