"use client";

import Image from "next/image";
import { whyMeContent } from "@/data/personal";

export function WhyMeSection() {
  return (
    <section
      id="why-me"
      className="px-6 md:px-12 lg:px-24 py-24 border-b border-border bg-bg relative overflow-hidden"
      dir="rtl"
    >
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue/2 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10 w-full max-w-7xl">
        {/* Right Content - Copy and Badges */}
        <div className="flex-1 text-right">
          <span className="text-xs font-bold uppercase tracking-wider text-blue mb-3 block">
            لماذا أنا؟
          </span>
          <h2 className="reveal text-3xl sm:text-4xl font-black leading-tight mb-6 mt-2 text-text">
            {whyMeContent.headline}
          </h2>

          <div className="space-y-4 mb-8 text-muted text-sm sm:text-base leading-relaxed">
            {whyMeContent.paragraphs.map((p, idx) => (
              <p key={idx} className="reveal reveal-delay-1">
                {p}
              </p>
            ))}
          </div>

          {/* Credential Badges Grid */}
          <div className="reveal reveal-delay-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyMeContent.badges.map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-bg-2 border border-border/80 px-4 py-3.5 rounded-2xl hover:border-blue/30 transition-colors shadow-sm"
              >
                <div className="w-5 h-5 rounded-full bg-blue/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3.5 h-3.5 text-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-xs font-bold text-text">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Left Content - Personal Photo Box */}
        <div className="reveal reveal-delay-1 lg:w-[400px] flex justify-center relative mt-8 lg:mt-0">
          {/* Decorative rotated background block */}
          <div className="absolute inset-0 bg-blue/5 rounded-3xl transform rotate-3 scale-95 pointer-events-none" />
          <div className="absolute inset-0 bg-bg-2 border border-border rounded-3xl transform -rotate-3 scale-95 pointer-events-none" />

          {/* Photo container */}
          <div className="relative w-full max-w-[300px] sm:max-w-[340px] aspect-[4/5] rounded-3xl overflow-hidden shadow-sm border border-border z-10 group">
            <Image
              src={whyMeContent.photoSrc}
              alt="أحمد النحاس"
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue/5 group-hover:bg-blue/0 transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
