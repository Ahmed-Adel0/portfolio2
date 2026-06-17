"use client";

import { useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { projectsData, Project } from "@/data/projects";
import { SectionHeader } from "@/shared/components/section-header";
import { ProjectCard } from "./_components/ProjectCard";

type ProjectsCarouselProps = {
  projects: Project[];
  direction: "rtl" | "ltr";
  playDirection?: "forward" | "backward";
};

function ProjectsCarousel({ projects, direction, playDirection = "forward" }: ProjectsCarouselProps) {
  // Setup Autoplay Plugin
  const plugin = useMemo(
    () =>
      Autoplay({
      delay: 4000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    }),
    [playDirection]
  );

  // Setup Embla Carousel
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      direction: direction,
      align: "start",
    },
    [plugin]
  );

  return (
    <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing" ref={emblaRef}>
      {/* We use negative margin and padding on items to create gaps (like shadcn/ui does) */}
      <div className="flex -ml-4 sm:-ml-6 touch-pan-y">
        {projects.map((project, idx) => (
          <div
            key={`${project.id}-${idx}`}
            // 1 card on mobile (100%), 2 on small (50%), 2.5/3 on larger screens.
            className="flex-[0_0_100%] min-w-0 pl-4 sm:pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_40%] xl:flex-[0_0_33.333333%]"
          >
            <div className="w-full">
              <ProjectCard project={project} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  // Split projects into two rows
  const half = Math.ceil(projectsData.length / 2);
  const row1 = projectsData.slice(0, half);
  const row2 = projectsData.slice(half);

  // Pad the arrays if necessary to ensure loop works smoothly
  const duplicatedRow1 = [...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2];

  return (
    <section
      className="py-24 border-b border-border bg-bg relative overflow-hidden"
      id="projects"
      dir="rtl"
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue/2 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="container mx-auto max-w-7xl relative z-10 px-6 md:px-12 lg:px-24 mb-16">
        <SectionHeader num="04" title="أبرز الأعمال والمشاريع" />
        <p className="text-muted text-xs sm:text-sm -mt-8 max-w-2xl leading-relaxed">
          دليل ملموس على الكفاءة والنتائج. مشاريع تم تصميمها وتطويرها لحل مشكلات فعلية ومساعدة أصحاب الأعمال على النمو.
        </p>
      </div>

      {/* Carousels Container */}
      <div className="relative z-10 space-y-8 sm:space-y-12 pb-10">
        {/* Row 1 — default RTL direction */}
        <div className="px-6 md:px-12 lg:px-24 w-full max-w-[1600px] mx-auto">
          <ProjectsCarousel projects={duplicatedRow1} direction="rtl" playDirection="forward" />
        </div>

        {/* Row 2 — opposite direction LTR */}
        <div className="px-6 md:px-12 lg:px-24 w-full max-w-[1600px] mx-auto">
          <ProjectsCarousel projects={duplicatedRow2} direction="ltr" playDirection="backward" />
        </div>
      </div>
    </section>
  );
}
