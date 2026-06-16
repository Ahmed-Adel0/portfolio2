import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:           "#F4F6FA",
        "bg-2":       "#FFFFFF",
        "bg-3":       "#EBF0F8",
        "bg-4":       "#D6E1F0",
        border:       "#D6E1F0",
        "border-2":   "#BDE8F5",
        /* ── Brand Palette ── */
        blue:         "#1C4D8D",   /* primary brand blue  */
        "blue-dark":  "#0F2854",   /* navy — darkest       */
        "blue-light": "#4988C4",   /* medium accent        */
        "blue-sky":   "#BDE8F5",   /* lightest tint        */
        "blue-glow":  "rgba(28, 77, 141, 0.06)",
        "blue-border":"rgba(28, 77, 141, 0.15)",
        text:         "#0F2854",   /* navy for headlines   */
        muted:        "#4B6186",   /* blue-toned muted     */
        "muted-2":    "#7A93B5",
      },
      fontFamily: {
        cairo: ["var(--font-ping-ar)", "Tahoma", "Arial", "sans-serif"],
        mono:  ["ui-monospace", "SFMono-Regular", "Consolas", "monospace"],
      },
      backgroundImage: {
        "glow-blue": "radial-gradient(ellipse at center, rgba(28,77,141,0.15) 0%, transparent 70%)",
      },
      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to:   { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "spin-slow":    "spin-slow 10s linear infinite",
        "spin-reverse": "spin-reverse 15s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
