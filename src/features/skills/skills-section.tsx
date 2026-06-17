"use client";

import { skillGroups } from "@/data/skills";
import { SectionHeader } from "@/shared/components/section-header";
import { SkillGroup } from "./_components/SkillGroup";

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
            <SkillGroup
              key={group.label}
              group={group}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
