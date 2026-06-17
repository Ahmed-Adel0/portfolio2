import React from "react";

interface ComparisonIconProps {
  isPositive: boolean;
}

export function ComparisonIcon({ isPositive }: ComparisonIconProps) {
  if (isPositive) {
    return (
      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
        <svg
          className="w-4 h-4 text-emerald-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    );
  }
  return (
    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
      <svg
        className="w-4 h-4 text-red-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  );
}
