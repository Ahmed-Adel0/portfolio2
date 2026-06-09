import { SectionHeader } from "@/shared/components/section-header";

type LearningItem = { name: string; sub: string } | { name: string; tag: true };

type LearningColumn =
  | {
      label: string;
      type: "text";
      items: Array<Extract<LearningItem, { sub: string }>>;
    }
  | {
      label: string;
      type: "tags";
      items: Array<Extract<LearningItem, { tag: true }>>;
    };

const LEARNING_COLUMNS: LearningColumn[] = [
  {
    label: "أدرس الآن",
    type: "text",
    items: [
      {
        name: "علوم الحاسب",
        sub: "الأساسيات العميقة — خوارزميات، هياكل بيانات، نظرية الحوسبة",
      },
      {
        name: "تحليل وتصميم الأنظمة",
        sub: "System Analysis & Design — SDLC، نمذجة الأنظمة",
      },
      {
        name: "الرياضيات",
        sub: "الجبر وحساب المثلثات والتفكير الرياضي التحليلي",
      },
      {
        name: "علوم البيانات",
        sub: "Data Science — Python، إحصاء، تحليل البيانات",
      },
    ],
  },
  {
    label: "أقرأ حالياً",
    type: "text",
    items: [
      {
        name: "Computer Science Illuminated",
        sub: "رحلة شاملة في أساسيات علوم الحاسب — من الدوائر للخوارزميات",
      },
      {
        name: "Introduction to Mathematical Thinking",
        sub: "كيف يفكر عقل الرياضياتي؟ منهجية التفكير المنطقي",
      },
      {
        name: "Algebra and Trigonometry 2e",
        sub: "بناء قاعدة رياضية متينة لعلوم البيانات والخوارزميات",
      },
    ],
  },
  {
    label: "مجالات الاهتمام",
    type: "tags",
    items: [
      { name: "الرياضيات", tag: true },
      { name: "الأدب", tag: true },
      { name: "التاريخ", tag: true },
      { name: "الفلسفة", tag: true },
      { name: "علوم الشريعة", tag: true },
      { name: "علوم الحاسب", tag: true },
      { name: "ريادة الأعمال", tag: true },
      { name: "الأنظمة المعقدة", tag: true },
    ],
  },
];

export function LearningSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-24 py-24 border-b border-border bg-bg-2 relative overflow-hidden"
      id="learning"
      dir="rtl"
    >
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] bg-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionHeader num="006" title="رحلة التعلم" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {LEARNING_COLUMNS.map((column, colIdx) => (
            <div
              key={column.label}
              className={`reveal reveal-delay-${colIdx + 1} group bg-bg-3/40 backdrop-blur-md border border-border/40 p-8 rounded-3xl hover:bg-bg-3/60 hover:border-blue/30 transition-all duration-300`}
            >
              {/* Column Header */}
              <div className="font-mono text-xs text-blue-light tracking-[2px] uppercase mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue shadow-[0_0_8px_rgba(26,110,255,0.7)] animate-pulse flex-shrink-0"></span>
                {column.label}
              </div>

              {column.type === "tags" ? (
                <div className="flex flex-wrap gap-2">
                  {column.items.map((item) => (
                    <span
                      key={item.name}
                      className="bg-bg-4/60 border border-border/50 px-4 py-2 text-sm text-muted
                        hover:text-text hover:border-blue/40 hover:bg-blue/5 transition-all rounded-xl cursor-default"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="space-y-5">
                  {column.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="pb-5 border-b border-border/40 last:border-b-0 last:pb-0 group/item"
                    >
                      <div className="text-base font-bold mb-1.5 group-hover/item:text-blue-light transition-colors">
                        {item.name}
                      </div>
                      <div className="text-xs text-muted leading-relaxed">
                        {item.sub}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
