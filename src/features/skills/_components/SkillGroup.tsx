import React from "react";

interface SkillItem {
  name: string;
  core?: boolean;
}

interface SkillGroupData {
  label: string;
  skills: SkillItem[];
}

interface SkillGroupProps {
  group: SkillGroupData;
  index: number;
}

export function SkillGroup({ group, index }: SkillGroupProps) {
  return (
    <div
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
  );
}
