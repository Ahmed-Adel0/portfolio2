"use client";

import { navLinks } from "@/data/nav";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";


const WA_HREF =
  "https://wa.me/201554463626?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A3%D8%AD%D9%85%D8%AF%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%8A.";

export function Navigation() {
  const [activeLink, setActiveLink] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 140) current = section.id;
      });
      setActiveLink(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* close menu when clicking outside */
  useEffect(() => {
    if (!menuOpen) return;
    const close = (e: MouseEvent) => {
      const nav = document.getElementById("main-nav");
      if (nav && !nav.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [menuOpen]);

  /* prevent body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${
  scrolled || menuOpen
    ? "bg-white/95 backdrop-blur-xl border-b border-border shadow-[0_2px_20px_rgba(15,40,84,0.08)]"
    : "bg-white/95 backdrop-blur-xl border-b border-border" 
}`}
      dir="rtl"
    >
      {/* ── Top Bar ── */}
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-3">

        {/* Logo */}
        <Image
  src="/assets/images/nav-Logo.png"
  alt="Logo"
  width={200}
  height={200}
  className="rounded-full w-10 h-10 md:w-12 md:h-12 object-contain"
/>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/60 backdrop-blur-md border border-border/80 rounded-2xl px-2 py-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-medium transition-all px-4 py-2 rounded-xl ${
                activeLink === link.href.slice(1)
                  ? "bg-blue/10 text-blue border border-blue/25 font-bold"
                  : "text-muted hover:text-text hover:bg-bg-3/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* CTA — desktop only */}
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex group relative px-5 py-2.5 font-cairo text-xs font-bold text-white
              items-center gap-2 rounded-xl overflow-hidden transition-all
              hover:shadow-[0_4px_18px_rgba(15,40,84,0.3)] hover:scale-105"
            style={{ background: "linear-gradient(135deg, #1C4D8D 0%, #0F2854 100%)" }}
          >
            <span className="relative z-10">ابدأ مشروعك ←</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: "linear-gradient(135deg, #4988C4 0%, #1C4D8D 100%)" }}
            />
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl transition-all"
            style={{ color: "#1C4D8D" }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
              style={{ backgroundColor: "#1C4D8D" }}
            />
            <span
              className={`block w-5 h-0.5 rounded-full my-1.5 transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
              style={{ backgroundColor: "#1C4D8D" }}
            />
            <span
              className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
              style={{ backgroundColor: "#1C4D8D" }}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-2 border-t border-border/40">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium px-4 py-3.5 rounded-2xl transition-all ${
                activeLink === link.href.slice(1)
                  ? "font-bold border"
                  : "hover:bg-bg-3/60"
              }`}
              style={
                activeLink === link.href.slice(1)
                  ? { color: "#1C4D8D", backgroundColor: "rgba(28,77,141,0.07)", borderColor: "rgba(28,77,141,0.2)" }
                  : { color: "#4B6186" }
              }
            >
              {link.label}
            </Link>
          ))}

          {/* WhatsApp CTA inside drawer */}
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-sm font-bold text-white text-center py-3.5 rounded-2xl transition-all
              hover:shadow-[0_4px_18px_rgba(15,40,84,0.3)] active:scale-95"
            style={{ background: "linear-gradient(135deg, #1C4D8D 0%, #0F2854 100%)" }}
          >
            ابدأ مشروعك ←
          </a>
        </div>
      </div>
    </nav>
  );
}
