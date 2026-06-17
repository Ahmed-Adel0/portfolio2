import React from "react";

interface CredentialBadgeProps {
  label: string;
}

export function CredentialBadge({ label }: CredentialBadgeProps) {
  return (
    <div
      className="flex items-center gap-3 bg-bg-2 border border-border/80 px-4 py-3.5 rounded-2xl hover:border-blue/30 transition-colors shadow-sm"
    >
      <div className="w-5 h-5 rounded-full bg-blue/10 flex items-center justify-center flex-shrink-0">
        <svg
          className="w-3.5 h-3.5 text-blue"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <span className="text-xs font-bold text-text">
        {label}
      </span>
    </div>
  );
}
