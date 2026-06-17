import React from "react";
import { ComparisonIcon } from "./ComparisonIcon";

interface RowData {
  aspect: string;
  freelancer: {
    isPositive: boolean;
    text: string;
  };
  withMe: {
    isPositive: boolean;
    text: string;
  };
}

interface ComparisonMobileCardProps {
  row: RowData;
}

export function ComparisonMobileCard({ row }: ComparisonMobileCardProps) {
  return (
    <div className="bg-bg-2 border border-border rounded-3xl p-6 shadow-sm space-y-4 reveal">
      <h3 className="text-sm font-bold text-text border-b border-border pb-2">
        {row.aspect}
      </h3>
      
      {/* Freelancer Column */}
      <div className="space-y-1.5">
        <span className="text-[10px] font-bold text-muted block">المستقل العادي التقليدي:</span>
        <div className="flex items-start gap-3 p-3 bg-bg-3 rounded-2xl border border-border/80">
          <ComparisonIcon isPositive={row.freelancer.isPositive} />
          <p className="text-xs text-muted leading-relaxed">{row.freelancer.text}</p>
        </div>
      </div>

      {/* With Me Column */}
      <div className="space-y-1.5">
        <span className="text-[10px] font-bold text-blue block">العمل معي:</span>
        <div className="flex items-start gap-3 p-3 bg-blue/3 rounded-2xl border border-blue/10">
          <ComparisonIcon isPositive={row.withMe.isPositive} />
          <p className="text-xs text-text font-bold leading-relaxed">{row.withMe.text}</p>
        </div>
      </div>
    </div>
  );
}
