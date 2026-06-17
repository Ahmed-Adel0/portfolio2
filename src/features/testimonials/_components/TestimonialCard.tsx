import React from "react";

interface TestimonialItem {
  id: string;
  stars: number;
  quote: string;
  projectName: string;
  date: string;
  platform: string;
}

interface TestimonialCardProps {
  item: TestimonialItem;
  index: number;
}

export function TestimonialCard({ item, index }: TestimonialCardProps) {
  return (
    <div
      className={`reveal reveal-delay-${(index % 2) + 1} bg-bg border border-border/80 rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:border-blue/30 transition-all duration-300`}
    >
      <div>
        {/* Stars Rating */}
        <div className="flex gap-1 mb-4 text-amber-400">
          {Array.from({ length: item.stars }).map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <p className="text-xs sm:text-sm text-text italic leading-relaxed mb-6 font-medium">
          {item.quote}
        </p>
      </div>

      {/* Client Info & Platform Meta */}
      <div className="flex justify-between items-center border-t border-border/60 pt-4 mt-2">
        <div>
          <h4 className="text-xs sm:text-sm font-bold text-text mb-1">
            {item.projectName}
          </h4>
          <span className="text-[10px] text-muted font-medium">{item.date}</span>
        </div>
        
        {/* Platform Badge */}
        <span className="px-3 py-1 rounded-full text-[9px] font-bold bg-bg-3 text-muted border border-border/90">
          منصة {item.platform}
        </span>
      </div>
    </div>
  );
}
