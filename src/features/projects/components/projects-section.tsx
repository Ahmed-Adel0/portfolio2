"use client";

import { useState } from "react";
import { projectsData } from "@/data/projects";
import { SectionHeader } from "@/shared/components/section-header";

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 4);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Live":
        return (
          <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            جاهز للاستخدام (Live)
          </span>
        );
      case "In Development":
        return (
          <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
            قيد التطوير (Building)
          </span>
        );
      case "Validation":
        return (
          <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
            تحت الدراسة (Validation)
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section
      className="px-6 md:px-12 lg:px-24 py-24 border-b border-border bg-bg-2 relative overflow-hidden"
      id="projects"
      dir="rtl"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionHeader num="04" title="أبرز الأعمال والمشاريع" />
        <p className="text-muted text-xs sm:text-sm mb-16 -mt-8 max-w-2xl leading-relaxed">
          دليل ملموس على الكفاءة والنتائج. مشاريع تم تصميمها وتطويرها لحل مشكلات فعلية ومساعدة أصحاب الأعمال على النمو.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className={`reveal reveal-delay-${(index % 2) + 1} group bg-bg border border-border/80 rounded-3xl p-8 flex flex-col justify-between hover:border-blue/30 transition-all duration-300 shadow-sm`}
            >
              <div>
                <div className="flex justify-between items-center gap-4 mb-6">
                  <span className="font-mono text-xs font-bold text-blue tracking-[1px]">
                    {project.code}
                  </span>
                  {getStatusBadge(project.status)}
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-4 text-text group-hover:text-blue transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                  {project.businessDescription}
                </p>
              </div>

              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 mb-4">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="bg-bg-3 border border-border/90 text-muted font-mono text-[9px] sm:text-[10px] px-3 py-1 rounded-full transition-colors group-hover:border-blue/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Conditional View Project Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue hover:text-blue-dark transition-all mt-2 group/link"
                  >
                    <span>معاينة المشروع</span>
                    <span className="transition-transform group-hover/link:translate-x-[-3px] block">←</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Show All Button */}
        {projectsData.length > 4 && (
          <div className="reveal mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-bg border border-border/85 hover:border-blue/40 text-text hover:text-blue px-8 py-3.5 text-xs font-bold rounded-full transition-all duration-300"
            >
              {showAll ? "عرض مشاريع أقل" : "عرض جميع المشاريع"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
