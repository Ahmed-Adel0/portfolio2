"use client";

import { testimonialsData } from "@/data/testimonials";
import { SectionHeader } from "@/shared/components/section-header";
import { TestimonialCard } from "./_components/TestimonialCard";

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
            <TestimonialCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
