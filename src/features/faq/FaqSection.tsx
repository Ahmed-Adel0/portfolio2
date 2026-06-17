"use client";

import { useState } from "react";
import { faqData } from "@/data/faq";
import { SectionHeader } from "@/shared/components/section-header";
import { FaqItem } from "./_components/FaqItem";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="px-6 md:px-12 lg:px-24 py-24 border-b border-border bg-bg relative overflow-hidden"
      dir="rtl"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-blue/2 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionHeader num="06" title="الأسئلة الشائعة" />
        <p className="text-muted text-xs sm:text-sm mb-16 -mt-8 max-w-2xl leading-relaxed">
          إجابات واضحة ومباشرة لأبرز التساؤلات والاعتراضات التي قد تدور في ذهنك قبل بدء العمل معي.
        </p>

        {/* Accordion List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqData.map((item, idx) => (
            <FaqItem
              key={idx}
              question={item.question}
              answer={item.answer}
              isOpen={openIdx === idx}
              onToggle={() => toggleFaq(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
