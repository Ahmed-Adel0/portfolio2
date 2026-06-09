export function Footer() {
  return (
    <footer dir="rtl" className="bg-bg relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Big watermark text */}
      <div
        className="relative text-center py-12 px-6 select-none leading-none"
        dir="ltr"
      >
        <span
          className="font-mono font-black text-[clamp(60px,13vw,148px)] tracking-[-6px] text-transparent"
          style={{
            WebkitTextStroke: "1px rgba(51,51,56,0.4)",
          }}
        >
          NAHHAS
        </span>
      </div>

      {/* Footer bar */}
      <div className="px-6 md:px-12 lg:px-24 py-5 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="font-mono text-xs text-muted-2">
          © 2025 أحمد النحاس — جميع الحقوق محفوظة
        </p>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue/60 animate-pulse shadow-[0_0_6px_rgba(26,110,255,0.8)]"></div>
          <p className="font-mono text-xs text-muted-2">
            المنصورة، مصر · متاح عالمياً
          </p>
        </div>
      </div>
    </footer>
  );
}
