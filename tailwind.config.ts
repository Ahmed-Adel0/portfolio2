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
        bg:           "#080809",
        "bg-2":       "rgba(15,  15,  17,  0.85)",
        "bg-3":       "rgba(22,  22,  24,  0.75)",
        "bg-4":       "rgba(30,  30,  33,  0.65)",
        border:       "rgba(34,  34,  38,  0.55)",
        "border-2":   "rgba(51,  51,  56,  0.55)",
        blue:         "#1A6EFF",
        "blue-dark":  "#0F4FCC",
        "blue-light": "#5B9FFF",
        "blue-glow":  "rgba(26, 110, 255, 0.10)",
        "blue-border":"rgba(26, 110, 255, 0.28)",
        text:         "#EFEFED",
        muted:        "#88888A",
        "muted-2":    "#44444A",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        mono:  ["DM Mono", "monospace"],
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
