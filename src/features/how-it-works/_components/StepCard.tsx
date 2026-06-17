import React from "react";

interface StepCardProps {
  num: string;
  title: string;
  description: string;
  index: number;
}

export function StepCard({ num, title, description, index }: StepCardProps) {
  return (
    <div
      className={`reveal reveal-delay-${index + 1} flex flex-col items-start bg-bg border border-border/80 p-8 rounded-3xl relative z-10 shadow-sm hover:border-blue/20 transition-colors duration-300`}
    >
      {/* Step Number Badge */}
      <div className="font-mono text-4xl sm:text-5xl font-black text-blue/15 mb-4 select-none leading-none">
        {num}
      </div>
      
      <h3 className="text-md sm:text-lg font-bold mb-3 text-text">
        {title}
      </h3>
      
      <p className="text-xs sm:text-sm text-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}
