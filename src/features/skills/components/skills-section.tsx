import { skillGroups } from "@/data/skills";
import { SectionHeader } from "@/shared/components/section-header";

export function SkillsSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-24 py-24 border-b border-border bg-bg relative overflow-hidden"
      id="skills"
      dir="rtl"
    >
      <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionHeader num="005" title="المهارات" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={group.label}
              className={`reveal reveal-delay-${(index % 2) + 1} bg-bg-2/40 backdrop-blur-md border border-border/40 p-8 rounded-3xl hover:bg-bg-3/60 hover:border-blue/30 transition-all duration-300 hover:shadow-[0_10px_30px_-15px_rgba(26,110,255,0.1)] group`}
            >
              <div
                className="font-mono text-xs text-blue tracking-[2px] uppercase mb-6 flex items-center gap-4"
                dir="ltr"
              >
                <div className="w-2 h-2 rounded-full bg-blue/50 group-hover:bg-blue group-hover:shadow-[0_0_10px_rgba(26,110,255,0.8)] transition-all"></div>
                {group.label}
                <span className="flex-1 h-px bg-gradient-to-r from-blue/20 to-transparent"></span>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-4 py-2 text-sm rounded-xl transition-all duration-300 cursor-default ${
                      skill.core
                        ? "bg-blue/10 border border-blue/30 text-blue-light shadow-[0_0_15px_rgba(26,110,255,0.1)] font-medium hover:bg-blue/20"
                        : "bg-bg-3/50 border border-border/50 text-muted hover:border-blue/40 hover:text-text hover:bg-bg-4"
                    }`}
                  >
                    {skill.name}
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
