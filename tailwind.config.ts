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
        bg:           "#F9F9F7",
        "bg-2":       "#FFFFFF",
        "bg-3":       "#F3F4F6",
        "bg-4":       "#E5E7EB",
        border:       "#E5E7EB",
        "border-2":   "#D1D5DB",
        blue:         "#1A6EFF",
        "blue-dark":  "#0F4FCC",
        "blue-light": "#3B82F6",
        "blue-glow":  "rgba(26, 110, 255, 0.04)",
        "blue-border":"rgba(26, 110, 255, 0.12)",
        text:         "#0D0D0D",
        muted:        "#6B7280",
        "muted-2":    "#9CA3AF",
      },
      fontFamily: {
        cairo: ["var(--font-ping-ar)", "Tahoma", "Arial", "sans-serif"],
        mono:  ["ui-monospace", "SFMono-Regular", "Consolas", "monospace"],
      },
      backgroundImage: {
        "glow-blue": "radial-gradient(ellipse at center, rgba(26,110,255,0.15) 0%, transparent 70%)",
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
