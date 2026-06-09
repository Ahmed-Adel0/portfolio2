"use client";

import { NAV_LINKS, CONTACT_EMAIL } from "@/shared/constants/nav.constant";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navigation() {
  const [activeLink, setActiveLink] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section[id], div[id='hero']");
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
          ? "bg-bg/80 backdrop-blur-xl border-b border-border/60 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
      dir="rtl"
    >
      {/* Logo */}
      <Link href="/" className="font-mono text-sm text-blue tracking-[3px] font-bold hover:text-blue-light transition-colors">
        AN.
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-1 bg-bg-2/40 backdrop-blur-md border border-border/40 rounded-2xl px-2 py-1.5">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-xs font-medium transition-all px-4 py-2 rounded-xl ${
              activeLink === link.href.slice(1)
                ? "bg-blue/15 text-blue-light border border-blue/30"
                : "text-muted hover:text-text hover:bg-bg-3/50"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="group relative bg-blue text-white px-5 py-2.5 font-cairo text-xs font-bold
          flex items-center gap-2 rounded-xl overflow-hidden transition-all
          hover:shadow-[0_0_20px_rgba(26,110,255,0.4)] hover:scale-105"
      >
        <span className="relative z-10">تواصل معي ←</span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue to-blue-light opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
    </nav>
  );
}
