"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/shared/components/navigation/navigation";
import { Footer } from "@/shared/components/footer/footer";
import { HeroSection } from "@/features/hero/components/hero-section";
import { AboutSection } from "@/features/about/components/about-section";
import { ServicesSection } from "@/features/services/components/services-section";
import { MethodologySection } from "@/features/methodology/components/methodology-section";
import { ProjectsSection } from "@/features/projects/components/projects-section";
import { SkillsSection } from "@/features/skills/components/skills-section";
import { LearningSection } from "@/features/learning/components/learning-section";
import { NowSection } from "@/features/now/components/now-section";
import { ContactSection } from "@/features/contact/components/contact-section";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-bg relative overflow-hidden">
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(26, 110, 255, 0.06), transparent 80%)`
        }}
      />
      
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <MethodologySection />
        <ProjectsSection />
        <SkillsSection />
        <LearningSection />
        <NowSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
