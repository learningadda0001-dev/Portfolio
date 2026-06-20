import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05060a",
        surface: "#0b0d14",
        panel: "#10131c",
        line: "rgba(255,255,255,0.08)",
        haze: "rgba(255,255,255,0.55)",
        signal: "#7dd3fc",
        amber: "#f5b75c",
        violet: "#a78bfa",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        aurora:
          "radial-gradient(60% 50% at 20% 20%, rgba(125,211,252,0.18) 0%, transparent 60%), radial-gradient(50% 50% at 80% 15%, rgba(167,139,250,0.16) 0%, transparent 60%), radial-gradient(60% 60% at 50% 100%, rgba(245,183,92,0.10) 0%, transparent 60%)",
        grain: "url('/noise.svg')",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
