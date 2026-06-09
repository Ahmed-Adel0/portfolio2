import { SectionHeader } from "@/shared/components/section-header";

const METHODOLOGY_STEPS = [
  {
    num: "01",
    title: "فهم المشكلة",
    description: "ما المشكلة الحقيقية؟ ليس الطلب، بل ما وراءه.",
    delay: "reveal-delay-1",
  },
  {
    num: "02",
    title: "فهم أهداف العمل",
    description: "ما الذي يريد العميل أو المؤسسة تحقيقه فعلاً؟",
    delay: "reveal-delay-2",
  },
  {
    num: "03",
    title: "تحليل المتطلبات",
    description: "توثيق وتحليل المتطلبات الوظيفية وغير الوظيفية بدقة.",
    delay: "reveal-delay-3",
  },
  {
    num: "04",
    title: "تصميم الحل",
    description: "اختيار التقنيات المناسبة وتصميم البنية الصحيحة.",
    delay: "reveal-delay-1",
  },
  {
    num: "05",
    title: "إدارة التنفيذ",
    description: "التنسيق بين الفريق والعميل وضمان الجودة في كل مرحلة.",
    delay: "reveal-delay-2",
  },
  {
    num: "06",
    title: "القياس والتحسين",
    description: "قياس الأثر الحقيقي والتحسين المستمر بناءً على البيانات.",
    delay: "reveal-delay-3",
  },
];

export function MethodologySection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-24 py-24 border-b border-border bg-bg relative overflow-hidden"
      id="think"
      dir="rtl"
    >
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionHeader num="003" title="كيف أفكر؟" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div className="reveal p-8 md:p-10 rounded-3xl bg-bg-2/30 backdrop-blur-sm border border-border/30">
            <p className="text-2xl md:text-3xl font-bold leading-[1.6] mb-8">
              منهجيتي في العمل{" "}
              <em className="text-blue not-italic border-b-2 border-blue/30 pb-1">أهم من أي شهادة.</em>
            </p>
            <p className="text-base md:text-lg text-muted leading-[1.9] mb-6">
              أؤمن أن القيمة الحقيقية لا تكمن في كتابة الكود، بل في فهم المشكلة
              وأهداف العمل أولاً — ثم تصميم الحل الأنسب وتنفيذه وقياس أثره.
            </p>
            <div className="p-4 rounded-xl bg-blue/5 border border-blue/20">
              <p className="text-base md:text-lg text-text font-medium leading-[1.8]">
                هذا ما يجعل الفارق بين مطوّر ينفّذ، ومهندس يبني.
              </p>
            </div>
          </div>

          {/* Right - Steps */}
          <div className="relative">
            {/* Connection line */}
            <div className="absolute right-[22px] top-6 bottom-6 w-px bg-gradient-to-b from-blue/50 via-border to-transparent hidden sm:block"></div>

            <div className="space-y-6">
              {METHODOLOGY_STEPS.map((step) => (
                <div
                  key={step.num}
                  className={`reveal ${step.delay} group flex flex-col sm:flex-row gap-6 items-start p-6 rounded-2xl hover:bg-bg-2/50 transition-colors border border-transparent hover:border-border/50 relative`}
                >
                  <div className="font-mono text-xl text-blue flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-bg-3 border border-border-2 group-hover:border-blue/50 group-hover:bg-blue/10 transition-all group-hover:scale-110 shadow-[0_0_15px_rgba(26,110,255,0.1)] relative z-10">
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <div className="text-lg font-bold mb-2 group-hover:text-blue-light transition-colors">{step.title}</div>
                    <div className="text-sm text-muted leading-[1.7]">
                      {step.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
