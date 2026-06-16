"use client";

import { howItWorksData } from "@/data/how-it-works";
import { SectionHeader } from "@/shared/components/section-header";

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="px-6 md:px-12 lg:px-24 py-24 border-b border-border bg-bg-2 relative overflow-hidden"
      dir="rtl"
    >
      {/* Background decoration */}
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-blue/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionHeader num="05" title={howItWorksData.title} />
        <p className="text-muted text-xs sm:text-sm mb-16 -mt-8 max-w-2xl leading-relaxed">
          {howItWorksData.subtitle}
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-[48px] left-[5%] right-[5%] h-px bg-gradient-to-l from-border via-border to-transparent z-0 pointer-events-none" />

          {howItWorksData.steps.map((step, index) => (
            <div
              key={step.num}
              className={`reveal reveal-delay-${index + 1} flex flex-col items-start bg-bg border border-border/80 p-8 rounded-3xl relative z-10 shadow-sm hover:border-blue/20 transition-colors duration-300`}
            >
              {/* Step Number Badge */}
              <div className="font-mono text-4xl sm:text-5xl font-black text-blue/15 mb-4 select-none leading-none">
                {step.num}
              </div>
              
              <h3 className="text-md sm:text-lg font-bold mb-3 text-text">
                {step.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button at the bottom */}
        <div className="reveal mt-16 text-center">
          <a
            href={howItWorksData.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-white px-8 py-4 font-cairo text-sm font-bold
              inline-flex items-center gap-3 rounded-full overflow-hidden transition-all
              hover:scale-105 hover:shadow-[0_6px_28px_rgba(15,40,84,0.35)]"
            style={{ background: "linear-gradient(135deg, #1C4D8D 0%, #0F2854 100%)" }}
          >
            <span className="relative z-10">{howItWorksData.cta.label} ←</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: "linear-gradient(135deg, #4988C4 0%, #1C4D8D 100%)" }} />
          </a>
        </div>
      </div>
    </section>
  );
}
