"use client";

import { useEffect, useRef, useState } from "react";
import { projectsData } from "@/data/projects";
import { SectionHeader } from "@/shared/components/section-header";

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 4);

  useEffect(() => {
    const els = gridRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => el.classList.add("visible"));
  }, [showAll]);

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
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className={`reveal reveal-delay-${(index % 2) + 1} group bg-bg border border-border/80 rounded-3xl p-8 flex flex-col justify-between hover:border-blue/30 transition-all duration-300 shadow-sm`}
            >
              <div>

                <h3 className="text-lg sm:text-xl font-bold mb-4 text-text group-hover:text-blue transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                  {project.businessDescription}
                </p>
              </div>

              <div>

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
          <div className="reveal mt-12 text-center bg-linear-gradient(135deg, #1C4D8D 0%, #0F2854 100%)">
            <button
  onClick={() => setShowAll(!showAll)}
  className="group relative text-white px-8 py-3.5 font-cairo text-xs font-bold
    inline-flex items-center gap-3 rounded-full overflow-hidden transition-all
    hover:scale-105 hover:shadow-[0_6px_28px_rgba(15,40,84,0.35)]"
  style={{ background: "linear-gradient(135deg, #1C4D8D 0%, #0F2854 100%)" }}
>
  <span className="relative z-10">{showAll ? "عرض مشاريع أقل" : "عرض جميع المشاريع"}</span>
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
    style={{ background: "linear-gradient(135deg, #4988C4 0%, #1C4D8D 100%)" }} />
</button>
          </div>
        )}
      </div>
    </section>
  );
}
