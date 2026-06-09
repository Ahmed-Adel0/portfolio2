import { SectionHeader } from "@/shared/components/section-header";

const PROJECTS = [
  {
    id: 1,
    code: "MED+",
    role: "Team Lead · Frontend Engineer",
    name: "المنصة الطبية",
    description:
      "المشكلة: إدارة الحجوزات والعيادات يدوياً — فوضى وأخطاء وضياع وقت وجهد.",
    results: [
      "تقليل الأعمال اليدوية بشكل ملحوظ",
      "تسهيل إدارة المواعيد والحجوزات",
      "تحسين تجربة الحجز للمرضى",
    ],
    techs: ["Next.js", "Supabase", "TypeScript"],
    delay: "reveal-delay-1",
  },
  {
    id: 2,
    code: "JATORY",
    role: "CTO & Co-Founder",
    name: "Jatory",
    description:
      "منصة تربط طلاب الكليات العلمية بالمسارات المهنية المناسبة وسوق العمل الحقيقي.",
    results: [
      "تحديد المسار المهني بدقة لكل طالب",
      "ربط المواهب بفرص العمل الفعلية",
    ],
    techs: ["Validation Stage", "Ed-Tech"],
    delay: "reveal-delay-2",
  },
  {
    id: 3,
    code: "OUTWIN",
    role: "Tech Lead",
    name: "Outwin — وكالة رقمية",
    description:
      "قيادة الفريق التقني في وكالة رقمية متخصصة — من تحليل متطلبات العميل إلى تسليم الحل المتكامل.",
    results: [
      "تحليل المتطلبات والتواصل مع العملاء",
      "اتخاذ القرارات التقنية وإدارة التنفيذ",
    ],
    techs: ["Project Leadership", "Client Management"],
    delay: "reveal-delay-3",
  },
  {
    id: 4,
    code: "EDS",
    role: "Member & Developer",
    name: "Egypt Data Scholars",
    description:
      "مساهم أساسي في منصة وطنية لتطوير مهارات الطلاب في علوم البيانات والذكاء الاصطناعي.",
    results: ["+1000 طالب مسجّل على المنصة", "200+ طالب منتفع مباشرةً"],
    techs: ["Ed-Tech", "Data Science", "National Initiative"],
    delay: "reveal-delay-1",
  },
];

const VENTURE = {
  code: "B•STANCE",
  role: "Founder & Visionary",
  name: "B•Stance — منظومة الأداء الرياضي",
  description:
    "رؤية طويلة المدى لبناء منظومة متكاملة تحوّل الأكاديميات الرياضية رقمياً وتحسّن أداءها التشغيلي.",
  results: [
    { title: "Recovery", desc: "خدمات الاستشفاء الرياضي المتخصصة" },
    {
      title: "Consulting",
      desc: "رفع كفاءة الأكاديميات (تشغيل، إدارة، أداء، تحول رقمي)",
    },
    {
      title: "SaaS",
      desc: "منصة إدارة الأكاديميات (حضور، اشتراكات، لاعبون، أولياء أمور)",
    },
  ],
  techs: ["Sports Tech", "SaaS", "Consulting", "Healthcare"],
};

export function ProjectsSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-24 py-24 border-b border-border bg-bg-2 relative overflow-hidden"
      id="projects"
      dir="rtl"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionHeader num="004" title="المشاريع المختارة" />

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={`reveal ${project.delay} group bg-bg-3/40 backdrop-blur-md border border-border/40 rounded-3xl flex flex-col overflow-hidden hover:border-blue/40 hover:shadow-[0_10px_40px_-10px_rgba(26,110,255,0.15)] hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="h-[200px] bg-gradient-to-br from-bg-4 to-bg-3 flex items-center justify-center border-b border-border/30 relative overflow-hidden flex-shrink-0 group-hover:from-blue/5 group-hover:to-bg-3 transition-colors">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
                <div
                  className="font-mono text-5xl font-bold text-border-2 tracking-[-2px] group-hover:scale-110 group-hover:text-blue/20 transition-all duration-500 z-10"
                  dir="ltr"
                >
                  {project.code}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div
                  className="font-mono text-[10px] text-blue tracking-[1.5px] uppercase mb-3 bg-blue/10 inline-block px-3 py-1 rounded-full w-fit"
                  dir="ltr"
                >
                  {project.role}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-light transition-colors">{project.name}</h3>
                <p className="text-sm text-muted leading-[1.85] mb-6 flex-1">
                  {project.description}
                </p>
                <div className="mb-6 space-y-2 bg-bg/30 p-4 rounded-2xl">
                  {project.results.map((result, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 text-sm text-text/80 leading-[1.6]"
                    >
                      <span className="text-blue flex-shrink-0 mt-1 text-[10px] animate-pulse">
                        ◆
                      </span>
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="bg-bg/50 border border-border/50 font-mono text-[10px] text-muted px-3 py-1 rounded-full hover:border-blue/30 hover:text-blue-light transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Venture Project */}
        <div className="reveal reveal-delay-2 group bg-bg-3/40 backdrop-blur-md border border-blue/30 rounded-3xl flex flex-col lg:flex-row overflow-hidden hover:border-blue/60 hover:shadow-[0_15px_50px_-15px_rgba(26,110,255,0.2)] transition-all duration-300">
          <div className="w-full lg:w-80 h-[200px] lg:h-auto bg-gradient-to-br from-bg-4 to-blue/5 border-b lg:border-b-0 lg:border-l border-border/30 flex items-center justify-center relative overflow-hidden flex-shrink-0 p-8 group-hover:from-blue/10 group-hover:to-bg-3 transition-colors">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
            <div
              className="font-mono text-4xl lg:text-5xl font-bold text-blue/30 tracking-[-2px] group-hover:scale-110 group-hover:text-blue/40 transition-all duration-500 z-10 text-center"
              dir="ltr"
            >
              {VENTURE.code}
            </div>
            <div
              className="absolute top-4 right-4 bg-blue text-white font-mono text-[10px] px-3 py-1.5 rounded-full tracking-wider shadow-[0_0_15px_rgba(26,110,255,0.4)]"
              dir="ltr"
            >
              LONG-TERM VENTURE
            </div>
          </div>
          <div className="p-8 flex-1">
            <div
              className="font-mono text-[10px] text-blue tracking-[1.5px] uppercase mb-3 bg-blue/10 inline-block px-3 py-1 rounded-full"
              dir="ltr"
            >
              {VENTURE.role}
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-light transition-colors">{VENTURE.name}</h3>
            <p className="text-base text-muted leading-[1.85] mb-6">
              {VENTURE.description}
            </p>
            <div className="mb-6 space-y-3 bg-bg/30 p-5 rounded-2xl">
              {VENTURE.results.map((result, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 text-sm text-text/80 leading-[1.6]"
                >
                  <span className="text-blue flex-shrink-0 mt-1.5 text-[10px]">
                    ◆
                  </span>
                  <span>
                    <strong className="text-blue-light font-medium">{result.title}:</strong> {result.desc}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {VENTURE.techs.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue/5 border border-blue/20 font-mono text-[10px] text-blue-light px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
