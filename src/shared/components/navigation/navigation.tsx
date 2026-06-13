"use client";

import { navLinks } from "@/data/nav";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navigation() {
  const [activeLink, setActiveLink] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 140) {
          current = section.id;
        }
      });

      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-[100] flex items-center justify-between px-6 md:px-12 lg:px-24 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-bg-2/90 backdrop-blur-xl border-b border-border shadow-[0_2px_20px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
      dir="rtl"
    >
      {/* Logo */}
      <Link href="/" className="font-mono text-sm text-blue tracking-[3px] font-bold hover:text-blue-dark transition-colors">
        AN.
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-1 bg-bg-2/45 backdrop-blur-md border border-border/80 rounded-2xl px-2 py-1.5">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-xs font-medium transition-all px-4 py-2 rounded-xl ${
              activeLink === link.href.slice(1)
                ? "bg-blue/10 text-blue border border-blue/20"
                : "text-muted hover:text-text hover:bg-bg-3/60"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <a
        href="https://wa.me/201554463626?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A3%D8%AD%D9%85%D8%AF%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%8A."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-blue text-white px-5 py-2.5 font-cairo text-xs font-bold
          flex items-center gap-2 rounded-xl overflow-hidden transition-all
          hover:shadow-[0_4px_15px_rgba(26,110,255,0.25)] hover:scale-105"
      >
        <span className="relative z-10">ابدأ مشروعك ←</span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue to-blue-dark opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
    </nav>
  );
}
