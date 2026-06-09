"use client";

import Image from "next/image";
import { CONTACT_EMAIL } from "@/shared/constants/nav.constant";

export function HeroSection() {
  return (
    <div
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden border-b border-border"
      id="hero"
      dir="rtl"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-dark/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-16 relative z-10 w-full max-w-7xl">
        {/* Right / Main Content (RTL -> Right Side) */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-right">
          <h1 className="reveal reveal-delay-1 text-5xl sm:text-6xl lg:text-8xl font-black leading-[1.1] tracking-[-2px] mb-6 mt-8 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70">
            أحمد{" "}
            <span className="text-blue bg-none bg-clip-border">النحاس</span>
          </h1>

          <p
            className="reveal reveal-delay-2 text-lg sm:text-xl font-medium text-muted/80 mb-6 lg:ml-auto"
            dir="ltr"
          >
            Software Engineer <span className="text-blue/50 mx-2">&amp;</span>{" "}
            System Analyst
          </p>

          <p className="reveal reveal-delay-3 text-base sm:text-lg text-muted leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
            أحوّل متطلبات الأعمال إلى أنظمة ومنتجات رقمية قابلة للتوسع. أبني
            حلولاً تقنية تساعد المؤسسات على العمل بكفاءة واتخاذ قرارات ذكية
            ومدروسة.
          </p>

          <div className="reveal reveal-delay-3 flex flex-wrap justify-center lg:justify-start gap-4 mb-14">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group relative bg-blue text-white px-8 py-4 font-cairo text-sm font-bold
                inline-flex items-center gap-3 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(26,110,255,0.4)]"
            >
              <span className="relative z-10">تواصل معي ←</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-light to-blue-dark opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#projects"
              className="bg-bg-2 border border-border px-8 py-4 text-sm font-medium
                inline-flex items-center gap-2 rounded-full hover:bg-bg-3 hover:border-blue/50 transition-all hover:text-white"
            >
              استعرض المشاريع
            </a>
          </div>

          {/* Stats - Glassmorphism */}
          <div className="reveal reveal-delay-3 grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-border/50">
            <div className="flex flex-col items-center lg:items-start p-4 rounded-2xl bg-bg-2/30 backdrop-blur-sm border border-border/30 hover:border-blue/30 transition-colors">
              <div
                className="font-mono text-3xl sm:text-4xl font-medium mb-1"
                dir="ltr"
              >
                1K<em className="not-italic text-blue">+</em>
              </div>
              <div className="text-xs text-muted">مستخدم للمنصات</div>
            </div>
            <div className="flex flex-col items-center lg:items-start p-4 rounded-2xl bg-bg-2/30 backdrop-blur-sm border border-border/30 hover:border-blue/30 transition-colors">
              <div
                className="font-mono text-3xl sm:text-4xl font-medium mb-1"
                dir="ltr"
              >
                4<em className="not-italic text-blue">+</em>
              </div>
              <div className="text-xs text-muted">مشاريع تقنية</div>
            </div>
            <div className="flex flex-col items-center lg:items-start p-4 rounded-2xl bg-bg-2/30 backdrop-blur-sm border border-border/30 hover:border-blue/30 transition-colors">
              <div
                className="font-mono text-3xl sm:text-4xl font-medium mb-1"
                dir="ltr"
              >
                3
              </div>
              <div className="text-xs text-muted">مشاريع ريادية</div>
            </div>
          </div>
        </div>

        {/* Left Content / Avatar (RTL -> Left Side) */}
        <div className="reveal reveal-delay-2 lg:w-[450px] flex justify-center lg:justify-end relative mt-16 lg:mt-0">
          <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full flex items-center justify-center">
            {/* Animated rings */}
            <div className="absolute inset-0 rounded-full border border-blue/20 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-dashed border-blue/40 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-bg-2 to-bg-3 border border-border-2 shadow-2xl overflow-hidden z-10 group">
              <div className="hero-img relative w-full h-full overflow-hidden">
                <Image
                  src="/assets/images/hero-img.png"
                  alt="Hero image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-blue/5 group-hover:bg-blue/10 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
