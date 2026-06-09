import { SectionHeader } from "@/shared/components/section-header";

const NOW_COLUMNS = [
  {
    label: "أعمل على",
    icon: "⚡",
    delay: "reveal-delay-1",
    items: [
      { name: "Outwin", sub: "قيادة الفريق التقني — مشاريع عملاء" },
      { name: "Jatory", sub: "مرحلة التحقق من الفكرة (Validation)" },
      { name: "B•Stance", sub: "بناء المنظومة الرياضية المتكاملة" },
    ],
  },
  {
    label: "أتعلم",
    icon: "📚",
    delay: "reveal-delay-2",
    items: [
      { name: "Data Science", sub: "Python والإحصاء وتحليل البيانات" },
      {
        name: "System Analysis & Design",
        sub: "التعمق في تحليل وتصميم الأنظمة",
      },
      {
        name: "Computer Science",
        sub: "الأساسيات والرياضيات والخوارزميات",
      },
    ],
  },
  {
    label: "أقرأ",
    icon: "📖",
    delay: "reveal-delay-3",
    items: [
      { name: "Computer Science Illuminated", sub: "في التقدم" },
      { name: "Intro to Mathematical Thinking", sub: "في التقدم" },
      { name: "Algebra and Trigonometry 2e", sub: "في التقدم" },
    ],
  },
];

export function NowSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-24 py-24 border-b border-border bg-bg relative overflow-hidden"
      id="now"
      dir="rtl"
    >
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue/5 rounded-full blur-[130px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionHeader num="007" title="الآن" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {NOW_COLUMNS.map((column) => (
            <div
              key={column.label}
              className={`reveal ${column.delay} group bg-bg-2/40 backdrop-blur-md border border-border/40 rounded-3xl overflow-hidden hover:border-blue/40 hover:shadow-[0_8px_30px_-8px_rgba(26,110,255,0.12)] transition-all duration-300`}
            >
              {/* Card Header */}
              <div className="px-6 py-5 border-b border-border/40 flex items-center gap-3 bg-bg-3/30">
                <span className="text-lg">{column.icon}</span>
                <span className="font-mono text-xs text-blue tracking-[2px] uppercase font-medium">
                  {column.label}
                </span>
                <div className="mr-auto w-2 h-2 rounded-full bg-blue/60 animate-pulse shadow-[0_0_8px_rgba(26,110,255,0.8)]"></div>
              </div>

              {/* Items */}
              <div className="p-2">
                {column.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 items-start px-4 py-4 rounded-2xl hover:bg-bg-3/40 transition-colors group/item"
                  >
                    <div className="w-2 h-2 bg-blue/60 rounded-full flex-shrink-0 mt-1.5 group-hover/item:bg-blue group-hover/item:shadow-[0_0_8px_rgba(26,110,255,0.8)] transition-all"></div>
                    <div>
                      <div className="text-sm font-bold mb-1 group-hover/item:text-blue-light transition-colors">
                        {item.name}
                      </div>
                      <div className="text-xs text-muted leading-relaxed">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
