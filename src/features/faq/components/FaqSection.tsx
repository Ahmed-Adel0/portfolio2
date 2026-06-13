"use client";

import { useState } from "react";
import { faqData } from "@/data/faq";
import { SectionHeader } from "@/shared/components/section-header";

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
          {faqData.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-border/80 rounded-3xl bg-bg-2 overflow-hidden shadow-sm hover:border-blue/20 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-right flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span className="text-xs sm:text-sm md:text-base font-bold text-text leading-snug">
                    {item.question}
                  </span>
                  <span
                    className={`w-6 h-6 rounded-full bg-blue/5 flex items-center justify-center text-blue flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-blue text-white" : ""
                    }`}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                
                {/* Expandable Panel */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[500px] border-t border-border" : "max-h-0"
                  }`}
                >
                  <div className="p-6 text-xs sm:text-sm text-muted leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
