"use client";

import React from "react";
import { whyMeContent } from "@/data/personal";
import { CredentialBadge } from "./_components/CredentialBadge";
import { WhyMePhoto } from "./_components/WhyMePhoto";

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
              <CredentialBadge key={idx} label={badge.label} />
            ))}
          </div>
        </div>

        {/* Left Content - Personal Photo Box */}
        <WhyMePhoto photoSrc={whyMeContent.photoSrc} />
      </div>
    </section>
  );
}
