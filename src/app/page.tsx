"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/shared/components/navigation/navigation";
import { Footer } from "@/shared/components/footer/footer";
import { HeroSection } from "@/features/hero/HeroSection";
import { WhyMeSection } from "@/features/why-me/WhyMeSection";
import { TestimonialsSection } from "@/features/testimonials/TestimonialsSection";
import { ComparisonSection } from "@/features/comparison/ComparisonSection";
import { ServicesSection } from "@/features/services/services-section";
import { ProjectsSection } from "@/features/projects/projects-section";
import { HowItWorksSection } from "@/features/how-it-works/HowItWorksSection";
import { FaqSection } from "@/features/faq/FaqSection";
import { testimonialsData } from "@/data/testimonials";

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
      {/* Glow effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(26, 110, 255, 0.04), transparent 80%)`
        }}
      />
      
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <WhyMeSection />
        {testimonialsData.length > 0 && <TestimonialsSection />}
        <ComparisonSection />
        <ServicesSection />
        <ProjectsSection />
        <HowItWorksSection />
        <FaqSection />
        <Footer />
      </div>
    </div>
  );
}
