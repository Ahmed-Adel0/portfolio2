export function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-[14px] mb-14 reveal" dir="rtl">
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-blue shadow-[0_0_10px_rgba(26,110,255,0.8)] animate-pulse"></span>
        <span className="font-mono text-xs text-blue tracking-widest font-medium">
          {num}
        </span>
      </div>
      <h2 className="text-3xl font-bold tracking-[-0.5px] mr-2">{title}</h2>
      <div className="flex-1 h-px bg-gradient-to-l from-border to-transparent opacity-60"></div>
    </div>
  );
}
