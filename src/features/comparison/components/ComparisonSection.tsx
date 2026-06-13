"use client";

import { comparisonData } from "@/data/comparison";
import { SectionHeader } from "@/shared/components/section-header";

export function ComparisonSection() {
  const getIcon = (isPositive: boolean) => {
    if (isPositive) {
      return (
        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      );
    }
    return (
      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
        <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    );
  };

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
                <tr
                  key={index}
                  className={`border-b border-border hover:bg-bg-3/30 transition-colors ${
                    index === comparisonData.rows.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <td className="p-6 text-xs sm:text-sm font-bold text-text">{row.aspect}</td>
                  <td className="p-6 text-xs text-muted border-r border-border">
                    <div className="flex items-start gap-3">
                      {getIcon(row.freelancer.isPositive)}
                      <span className="leading-relaxed">{row.freelancer.text}</span>
                    </div>
                  </td>
                  <td className="p-6 text-xs text-text font-medium border-r border-border bg-blue/2">
                    <div className="flex items-start gap-3">
                      {getIcon(row.withMe.isPositive)}
                      <span className="leading-relaxed font-bold">{row.withMe.text}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Stacked View */}
        <div className="md:hidden space-y-6">
          {comparisonData.rows.map((row, index) => (
            <div
              key={index}
              className="bg-bg-2 border border-border rounded-3xl p-6 shadow-sm space-y-4 reveal"
            >
              <h3 className="text-sm font-bold text-text border-b border-border pb-2">
                {row.aspect}
              </h3>
              
              {/* Freelancer Column */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-muted block">المستقل العادي التقليدي:</span>
                <div className="flex items-start gap-3 p-3 bg-bg-3 rounded-2xl border border-border/80">
                  {getIcon(row.freelancer.isPositive)}
                  <p className="text-xs text-muted leading-relaxed">{row.freelancer.text}</p>
                </div>
              </div>

              {/* With Me Column */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-blue block">العمل معي:</span>
                <div className="flex items-start gap-3 p-3 bg-blue/3 rounded-2xl border border-blue/10">
                  {getIcon(row.withMe.isPositive)}
                  <p className="text-xs text-text font-bold leading-relaxed">{row.withMe.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inspirational Blockquote */}
        <div className="reveal mt-16 max-w-4xl mx-auto p-8 rounded-3xl bg-bg-2 border border-border text-center shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue/2 rounded-full blur-2xl pointer-events-none" />
          <p className="text-xs sm:text-sm md:text-base italic font-bold text-text mb-4 leading-relaxed">
            {comparisonData.quote.text}
          </p>
          <cite className="not-italic text-[10px] sm:text-xs font-bold text-blue">
            — {comparisonData.quote.author}
          </cite>
        </div>
      </div>
    </section>
  );
}
