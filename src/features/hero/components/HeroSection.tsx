"use client";

import { useEffect, useRef, useState } from "react";
import { personal, heroContent } from "@/data/personal";

/* ── Count-up hook ── */
function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            /* ease-out cubic */
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

/* ── Single animated stat ── */
function AnimatedStat({ value, label }: { value: string; label: string }) {
  const hasPlus = value.endsWith("+");
  const hasPercent = value.endsWith("%");
  const numeric = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = hasPlus ? "+" : hasPercent ? "%" : "";

  const { count, ref } = useCountUp(numeric);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="font-mono text-2xl sm:text-3xl font-bold text-text" dir="ltr">
        {count}
        {count === numeric && suffix ? (
          <span className="text-text font-bold">{suffix}</span>
        ) : null}
      </div>
      <div className="text-[11px] sm:text-xs text-muted font-medium mt-1">{label}</div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-border bg-bg pt-[72px]"
  id="hero"
  dir="rtl"
    >
      {/* Subtle background tint */}
      <div className="absolute inset-0 bg-[#F4F6FA] pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-12 text-center flex flex-col items-center" style={{ marginTop: "calc(var(--nav-h, 72px) / 2)" }}>
        {/* Main Headline */}
        <h1 className="reveal reveal-delay-1 text-4xl sm:text-5xl lg:text-[3.75rem] font-black leading-[1.2] tracking-[-1.5px] mb-6 text-text">
          {heroContent.title}
        </h1>

        {/* Subtitle */}
        <p className="reveal reveal-delay-2 text-base sm:text-lg text-muted leading-relaxed max-w-xl mb-10">
          {heroContent.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="reveal reveal-delay-3 flex flex-wrap justify-center gap-4 mb-16">
          <a
            href={heroContent.primaryCTA.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-white px-8 py-4 font-cairo text-sm font-bold
              inline-flex items-center gap-3 rounded-full overflow-hidden transition-all
              hover:scale-105 hover:shadow-[0_6px_28px_rgba(15,40,84,0.35)]"
            style={{ background: "linear-gradient(135deg, #1C4D8D 0%, #0F2854 100%)" }}
          >
            <span className="relative z-10">{heroContent.primaryCTA.label} ←</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
              style={{ background: "linear-gradient(135deg, #4988C4 0%, #1C4D8D 100%)" }} />
          </a>
          <a
            href={heroContent.secondaryCTA.href}
            className="bg-white border border-border text-blue-dark px-8 py-4 text-sm font-medium
              inline-flex items-center gap-2 rounded-full hover:bg-bg-3 hover:border-blue/30
              transition-all shadow-sm"
          >
            {heroContent.secondaryCTA.label}
          </a>
        </div>

        {/* Stats Bar — animated count-up */}
        <div className="reveal reveal-delay-3 w-full pt-10 border-t border-border/70">
          <div className="flex flex-row justify-center gap-10 sm:gap-20">
            {personal.stats.map((stat) => (
              <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

