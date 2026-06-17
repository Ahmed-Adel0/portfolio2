import React, { useEffect, useRef, useState } from "react";

/* ── Count-up hook ── */
function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            /* ease-out cubic */
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

interface AnimatedStatProps {
  value: string;
  label: string;
}

export function AnimatedStat({ value, label }: AnimatedStatProps) {
  const hasPlus = value.endsWith("+");
  const hasPercent = value.endsWith("%");
  const numeric = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = hasPlus ? "+" : hasPercent ? "%" : "";

  const { count, ref } = useCountUp(numeric);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="font-mono text-2xl sm:text-3xl font-bold text-text" dir="ltr">
        {count}
        {count === numeric && suffix ? (
          <span className="text-text font-bold">{suffix}</span>
        ) : null}
      </div>
      <div className="text-[11px] sm:text-xs text-muted font-medium mt-1">{label}</div>
    </div>
  );
}
