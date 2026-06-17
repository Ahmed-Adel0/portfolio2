"use client";

import { comparisonData } from "@/data/comparison";
import { SectionHeader } from "@/shared/components/section-header";
import { ComparisonTableRow } from "./_components/ComparisonTableRow";
import { ComparisonMobileCard } from "./_components/ComparisonMobileCard";

export function ComparisonSection() {
  return (
    <section
      id="comparison"
      className="px-6 md:px-12 lg:px-24 py-24 border-b border-border bg-bg relative overflow-hidden"
      dir="rtl"
    >
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue/2 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionHeader num="02" title={comparisonData.title} />
        <p className="text-muted text-xs sm:text-sm mb-12 -mt-8 max-w-2xl leading-relaxed">
          {comparisonData.subtitle}
        </p>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-hidden rounded-3xl border border-border shadow-sm bg-bg-2">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-bg-3 border-b border-border">
                <th className="p-6 text-sm font-bold text-text w-1/4">وجه المقارنة</th>
                <th className="p-6 text-sm font-bold text-text w-3/8 border-r border-border">المستقل العادي التقليدي</th>
                <th className="p-6 text-sm font-bold text-blue w-3/8 border-r border-border bg-blue/2">العمل معي (كشريك تقني)</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.rows.map((row, index) => (
                <ComparisonTableRow
                  key={index}
                  row={row}
                  isLast={index === comparisonData.rows.length - 1}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Stacked View */}
        <div className="md:hidden space-y-6">
          {comparisonData.rows.map((row, index) => (
            <ComparisonMobileCard key={index} row={row} />
          ))}
        </div>

        {/* Inspirational Blockquote */}
        <div className="reveal mt-16 max-w-4xl mx-auto p-8 rounded-3xl bg-bg-2 border border-border text-center shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue/2 rounded-full blur-2xl pointer-events-none" />
          <p className="text-xs sm:text-sm md:text-base italic font-bold text-text mb-4 leading-relaxed">
            {comparisonData.quote.text}
          </p>
          <cite className="not-italic text-[10px] sm:text-xs font-bold text-blue">
          </cite>
        </div>
      </div>
    </section>
  );
}
