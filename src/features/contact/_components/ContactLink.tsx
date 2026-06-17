import React from "react";

interface ContactLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  target?: string;
  rel?: string;
}

export function ContactLink({ href, label, icon, target, rel }: ContactLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="group bg-bg-2/60 backdrop-blur-md border border-border/50 px-6 py-4 text-text text-sm
        inline-flex items-center gap-3 rounded-2xl hover:border-blue/60 hover:bg-blue/5
        hover:text-blue-light hover:shadow-[0_0_25px_rgba(28,77,141,0.15)] transition-all duration-300"
    >
      <div className="w-5 h-5 opacity-60 flex-shrink-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        {icon}
      </div>
      {label}
    </a>
  );
}
