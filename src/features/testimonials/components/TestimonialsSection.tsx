"use client";

import { testimonialsData } from "@/data/testimonials";
import { SectionHeader } from "@/shared/components/section-header";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="px-6 md:px-12 lg:px-24 py-24 border-b border-border bg-bg-2 relative overflow-hidden"
      dir="rtl"
    >
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue/2 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionHeader num="02" title="قالوا عن العمل معي" />
        <p className="text-muted text-xs sm:text-sm mb-16 -mt-8 max-w-2xl leading-relaxed">
          آراء وتقييمات حقيقية من أصحاب الأعمال والمؤسسين الذين عملت معهم على أتمتة وبناء منصاتهم الرقمية.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((item, index) => (
            <div
              key={item.id}
              className={`reveal reveal-delay-${(index % 2) + 1} bg-bg border border-border/80 rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:border-blue/30 transition-all duration-300`}
            >
              <div>
                {/* Stars Rating */}
                <div className="flex gap-1 mb-4 text-amber-400">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-text italic leading-relaxed mb-6 font-medium">
                  {item.quote}
                </p>
              </div>

              {/* Client Info & Platform Meta */}
              <div className="flex justify-between items-center border-t border-border/60 pt-4 mt-2">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-text mb-1">
                    {item.projectName}
                  </h4>
                  <span className="text-[10px] text-muted font-medium">{item.date}</span>
                </div>
                
                {/* Platform Badge */}
                <span className="px-3 py-1 rounded-full text-[9px] font-bold bg-bg-3 text-muted border border-border/90">
                  منصة {item.platform}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
