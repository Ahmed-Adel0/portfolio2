import { personal } from "@/data/personal";

export function Footer() {
  return (
    <footer dir="rtl" className="bg-bg relative overflow-hidden border-t border-border/80">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue/3 rounded-full blur-[80px] pointer-events-none" />

      {/* Safety Net Contact Links */}
      <div className="px-6 md:px-12 lg:px-24 pt-12 pb-6 flex flex-col items-center gap-4 relative z-10">
        <h4 className="font-cairo text-sm font-bold text-text">هل لديك مشروع ترغب في مناقشته؟</h4>
        <div className="flex gap-6 mt-2">
          <a
            href="https://wa.me/201554463626?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A3%D8%AD%D9%85%D8%AF%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%8A."
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-blue hover:text-blue-dark transition-colors"
          >
            واتساب مباشر
          </a>
          <span className="text-border-2">•</span>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-blue hover:text-blue-dark transition-colors"
          >
            لينكد إن
          </a>
          <span className="text-border-2">•</span>
          <a
            href={`mailto:${personal.email}`}
            className="text-xs font-semibold text-blue hover:text-blue-dark transition-colors"
          >
            البريد الإلكتروني
          </a>
        </div>
      </div>

      {/* Big watermark text */}
      <div
        className="relative text-center py-6 px-6 select-none leading-none"
        dir="ltr"
      >
        <span
          className="font-mono font-black text-[clamp(60px,13vw,148px)] tracking-[-6px] text-transparent"
          style={{
            WebkitTextStroke: "1px rgba(229,231,235,0.7)",
          }}
        >
          NAHHAS
        </span>
      </div>

      {/* Footer bar */}
      <div className="px-6 md:px-12 lg:px-24 py-5 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="font-mono text-[10px] text-muted">
          © 2026 أحمد النحاس — جميع الحقوق محفوظة
        </p>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue/60 animate-pulse shadow-[0_0_6px_rgba(26,110,255,0.3)]"></div>
          <p className="font-mono text-[10px] text-muted">
            {personal.location} · متاح عالمياً
          </p>
        </div>
      </div>
    </footer>
  );
}
