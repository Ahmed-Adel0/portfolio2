"use client";

import { services } from "@/data/services";
import { SectionHeader } from "@/shared/components/section-header";
import { ServiceCard } from "./_components/ServiceCard";

export function ServicesSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-24 py-24 border-b border-border bg-bg-2 relative overflow-hidden"
      id="services"
      dir="rtl"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionHeader num="03" title="كيف يمكنني مساعدتك؟" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.num}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
