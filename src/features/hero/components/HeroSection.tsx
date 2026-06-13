"use client";

import Image from "next/image";
import { personal, heroContent, whyMeContent } from "@/data/personal";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden border-b border-border"
      id="hero"
      dir="rtl"
    >
      {/* Background glow effects - subtle for light theme */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-dark/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10 w-full max-w-7xl">
        {/* Right / Main Content */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-right">
          <h1 className="reveal reveal-delay-1 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.25] tracking-[-1.5px] mb-6 mt-8 text-transparent bg-clip-text bg-gradient-to-br from-text to-text/80">
            {heroContent.title}
          </h1>

          <p className="reveal reveal-delay-2 text-base sm:text-lg text-muted leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
            {heroContent.subtitle}
          </p>

          <div className="reveal reveal-delay-3 flex flex-wrap justify-center lg:justify-start gap-4 mb-14">
            <a
              href={heroContent.primaryCTA.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-blue text-white px-8 py-4 font-cairo text-sm font-bold
                inline-flex items-center gap-3 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_4px_20px_rgba(26,110,255,0.3)]"
            >
              <span className="relative z-10">{heroContent.primaryCTA.label} ←</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue to-blue-dark opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href={heroContent.secondaryCTA.href}
              className="bg-bg-2 border border-border/80 text-muted hover:text-text px-8 py-4 text-sm font-medium
                inline-flex items-center gap-2 rounded-full hover:bg-bg-3 hover:border-blue/30 transition-all"
            >
              {heroContent.secondaryCTA.label}
            </a>
          </div>

          {/* Stats Bar */}
          <div className="reveal reveal-delay-3 grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-border/80">
            {personal.stats.map((stat) => {
              const hasPlus = stat.value.endsWith("+");
              const hasPercent = stat.value.endsWith("%");
              const displayValue = hasPlus 
                ? stat.value.slice(0, -1) 
                : hasPercent 
                  ? stat.value.slice(0, -1) 
                  : stat.value;

              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center lg:items-start p-4 rounded-2xl bg-bg-2 border border-border shadow-sm hover:border-blue/30 transition-colors"
                >
                  <div
                    className="font-mono text-2xl sm:text-3xl font-bold mb-1 text-text"
                    dir="ltr"
                  >
                    {displayValue}
                    {hasPlus ? <span className="text-blue font-bold">+</span> : null}
                    {hasPercent ? <span className="text-blue font-bold">%</span> : null}
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted font-medium text-center lg:text-right">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Left Content / Avatar */}
        <div className="reveal reveal-delay-2 lg:w-[450px] flex justify-center lg:justify-end relative mt-8 lg:mt-0">
          <div className="relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full flex items-center justify-center">
            {/* Animated rings */}
            <div className="absolute inset-0 rounded-full border border-blue/15 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-dashed border-blue/25 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-bg-2 to-bg-3 border border-border shadow-md overflow-hidden z-10 group">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={whyMeContent.photoSrc}
                  alt="Ahmed El-Nahhas"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-blue/5 group-hover:bg-blue/0 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
