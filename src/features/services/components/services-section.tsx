import { SectionHeader } from "@/shared/components/section-header";

const SERVICES = [
  {
    num: "01",
    title: "هندسة البرمجيات",
    description:
      "بناء الأنظمة والتطبيقات الرقمية من الصفر بجودة عالية وقابلية للتوسع. من الـ Frontend إلى الـ Backend وقواعد البيانات.",
    tags: ["Next.js", "PHP / Laravel", "Supabase", "MySQL"],
    delay: "reveal-delay-1",
  },
  {
    num: "02",
    title: "تحليل الأنظمة",
    description:
      "تحليل المتطلبات وتصميم الحلول. تحويل احتياجات العمل إلى هياكل ونماذج رقمية واضحة وقابلة للتنفيذ.",
    tags: ["Requirements Analysis", "SDLC", "Process Modeling"],
    delay: "reveal-delay-2",
  },
  {
    num: "03",
    title: "قيادة المشاريع التقنية",
    description:
      "إدارة التنفيذ والتنسيق بين العميل والفريق التقني. اتخاذ القرارات الصحيحة وضمان التسليم في الوقت والجودة المطلوبَين.",
    tags: ["Tech Leadership", "Stakeholder Mgmt", "Team Coordination"],
    delay: "reveal-delay-3",
  },
];

export function ServicesSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-24 py-24 border-b border-border bg-bg-2 relative overflow-hidden"
      id="what"
      dir="rtl"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionHeader num="002" title="ماذا أفعل؟" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.num}
              className={`reveal ${service.delay} group bg-bg-3/40 backdrop-blur-md border border-border/40 p-10 rounded-3xl hover:bg-bg-3/60 hover:border-blue/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(26,110,255,0.15)] flex flex-col`}
            >
              <div className="font-mono text-sm text-blue tracking-widest mb-6 bg-blue/10 w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue group-hover:text-white transition-all duration-300">
                {service.num}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-sm text-muted leading-[1.85] mb-8 flex-1">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue/5 border border-blue/20 text-blue-light font-mono text-[10px] px-3 py-1 rounded-full tracking-[0.5px] transition-colors group-hover:border-blue/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
