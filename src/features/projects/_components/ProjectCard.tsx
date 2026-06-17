import React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card group relative flex-shrink-0 w-full rounded-3xl overflow-hidden border border-border/60 bg-bg-2 shadow-sm hover:shadow-xl hover:border-blue/30 transition-all duration-500">
      {/* Screenshot */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-bg-3">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="project-card-img object-cover object-top"
          sizes="(max-width: 640px) 85vw, (max-width: 768px) 420px, (max-width: 1024px) 460px, 500px"
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2854]/80 via-[#0F2854]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Code badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="font-mono text-[10px] font-bold tracking-[2px] px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-blue border border-white/20 shadow-sm">
            {project.code}
          </span>
        </div>

        {/* Live link button — appears on hover */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100
              text-white text-xs font-bold px-6 py-3 rounded-full inline-flex items-center gap-2
              backdrop-blur-md bg-white/15 border border-white/25 hover:bg-white/25 hover:scale-105 transition-all"
          >
            <span>عرض المشروع</span>
            <svg className="w-3.5 h-3.5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>

      {/* Info */}
      <div className="p-5 sm:p-6" dir="rtl">
        <h3 className="text-sm sm:text-base font-bold text-text mb-2 leading-snug group-hover:text-blue transition-colors duration-300 line-clamp-1">
          {project.name}
        </h3>
        <p className="text-[11px] sm:text-xs text-muted leading-relaxed line-clamp-2">
          {project.businessDescription}
        </p>
      </div>
    </div>
  );
}
