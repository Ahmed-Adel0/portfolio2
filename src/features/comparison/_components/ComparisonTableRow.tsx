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

interface ComparisonTableRowProps {
  row: RowData;
  isLast: boolean;
}

export function ComparisonTableRow({ row, isLast }: ComparisonTableRowProps) {
  return (
    <tr
      className={`border-b border-border hover:bg-bg-3/30 transition-colors ${
        isLast ? "border-b-0" : ""
      }`}
    >
      <td className="p-6 text-xs sm:text-sm font-bold text-text">{row.aspect}</td>
      <td className="p-6 text-xs text-muted border-r border-border">
        <div className="flex items-start gap-3">
          <ComparisonIcon isPositive={row.freelancer.isPositive} />
          <span className="leading-relaxed">{row.freelancer.text}</span>
        </div>
      </td>
      <td className="p-6 text-xs text-text font-medium border-r border-border bg-blue/2">
        <div className="flex items-start gap-3">
          <ComparisonIcon isPositive={row.withMe.isPositive} />
          <span className="leading-relaxed font-bold">{row.withMe.text}</span>
        </div>
      </td>
    </tr>
  );
}
