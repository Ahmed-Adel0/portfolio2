import React from "react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div
      className="border border-border/80 rounded-3xl bg-bg-2 overflow-hidden shadow-sm hover:border-blue/20 transition-all duration-300"
    >
      <button
        onClick={onToggle}
        className="w-full p-6 text-right flex justify-between items-center gap-4 focus:outline-none"
      >
        <span className="text-xs sm:text-sm md:text-base font-bold text-text leading-snug">
          {question}
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
          {answer}
        </div>
      </div>
    </div>
  );
}
