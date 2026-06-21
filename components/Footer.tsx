import { Linkedin, Mail, Download } from "lucide-react";
import { profile } from "@/lib/data";
import TooltipIconLink from "@/components/TooltipIconLink";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-24">
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
            <span className="font-mono-label text-xs">Available for opportunities</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-10">
          <TooltipIconLink href={profile.linkedinHref} label="LinkedIn" external>
            <Linkedin className="h-5 w-5" />
          </TooltipIconLink>

          <TooltipIconLink href={`mailto:${profile.email}`} label="Email">
            <Mail className="h-5 w-5" />
          </TooltipIconLink>

          <TooltipIconLink href="/chethantv_resume.pdf" label="Download Resume" download>
            <Download className="h-5 w-5" />
          </TooltipIconLink>
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
