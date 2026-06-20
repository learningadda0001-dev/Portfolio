import { Linkedin, Mail, Download } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="mx-auto max-w-5xl px-6 py-12">

        {/* CTA Section */}
        <div className="text-center mb-10">
          <h3 className="font-display text-3xl font-bold mb-4 text-white">
            Let's Build Something Amazing
          </h3>

          <p className="text-white/60 max-w-2xl mx-auto">
            Open to Software Development, Backend Engineering,
            API Integration, and Freelance Opportunities.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 text-signal">
            <span className="status-dot h-2 w-2 rounded-full bg-signal"></span>
            <span className="font-mono-label text-xs">
              Available for opportunities
            </span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-10">

          <a
            href={profile.linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/70 transition hover:scale-110 hover:bg-white/10 hover:text-signal"
          >
            <Linkedin className="h-5 w-5" />
          </a>

          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/70 transition hover:scale-110 hover:bg-white/10 hover:text-signal"
          >
            <Mail className="h-5 w-5" />
          </a>

          <a
            href="/chethantv_resume.pdf"
            download
            aria-label="Download Resume"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/70 transition hover:scale-110 hover:bg-white/10 hover:text-signal"
          >
            <Download className="h-5 w-5" />
          </a>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
          <div>
            <p className="font-mono text-sm text-white/70">
              © {new Date().getFullYear()} {profile.name}
            </p>

            <p className="text-xs text-white/40 mt-1">
              Software Developer • PHP • Laravel • CodeIgniter • ASP.NET Core
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}