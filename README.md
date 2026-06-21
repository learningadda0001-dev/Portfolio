# Chethan T V — Portfolio

Premium, animated developer portfolio built with Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, GSAP-ready structure, Three.js and Lenis smooth scroll.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm run start
```

## Deploy

Push this folder to GitHub and import it on [vercel.com](https://vercel.com) — zero config needed (it's already a clean Next.js app).

## Structure

- `app/` — root layout, global styles, page assembly
- `components/` — Hero, About, Skills, Experience, Projects, Contact, Navbar, Footer, and effects (cursor follower, particle field, scroll progress, command menu, magnetic buttons)
- `lib/data.ts` — all your real content (name, role, experience, projects, skills) in one place. Edit this file to update copy anywhere on the site.
- `public/portfolio1.jpg` — your profile photo

## Notes

- Press **⌘K** / **Ctrl+K** anywhere on the site to open the command menu and jump between sections.
- Dark mode is the default and only theme, matching the Apple/Stripe/Linear-inspired aurora + glass direction requested.
- The Three.js particle field and all motion respect `prefers-reduced-motion`.
- Project cards open a case-study modal with the real tech stack and description for each project — no fabricated metrics, links, or testimonials were added since none were provided in your original content.
