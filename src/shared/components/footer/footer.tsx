import Image from "next/image";
import { personal } from "@/data/personal";

/* ─── Social Icon SVGs ─── */
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.85L.054 23.5a.5.5 0 00.609.61l5.716-1.498A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.68-.523-5.2-1.43l-.373-.22-3.865 1.013 1.032-3.768-.242-.386A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.908 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
  </svg>
);

export function Footer() {
  const socialLinks = [
    {
      label: "WhatsApp",
      href: "https://wa.me/201554463626?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A3%D8%AD%D9%85%D8%AF%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%8A.",
      icon: <WhatsAppIcon />,
      hoverColor: "#25D366",
    },
    {
      label: "Facebook",
      href: personal.facebook,
      icon: <FacebookIcon />,
      hoverColor: "#1877F2",
    },
    {
      label: "GitHub",
      href: personal.github,
      icon: <GitHubIcon />,
      hoverColor: "#ffffff",
    },
    {
      label: "LinkedIn",
      href: personal.linkedin,
      icon: <LinkedInIcon />,
      hoverColor: "#0A66C2",
    },
    {
      label: "Gmail",
      href: `mailto:${personal.email}`,
      icon: <GmailIcon />,
      hoverColor: "#EA4335",
    },
  ];

  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden border-t border-white/10"
      style={{ background: "linear-gradient(160deg, #0F2854 0%, #1C4D8D 100%)" }}
    >
      {/* Top ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[220px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(189, 232, 245, 0.07)" }}
      />

      {/* ── Main footer row: Logo right / Socials left ── */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 py-6 flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-8">

        {/* RIGHT — Logo */}
        <div className="w-full flex justify-center lg:justify-end lg:w-auto flex-shrink-0">
          <div className="w-[160px] sm:w-[200px] lg:w-[220px]">
            <Image
              src="/assets/images/footer-logo.png"
              alt="Ahmed El-Nahhas"
              width={220}
              height={60}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* LEFT — Social Icons */}
        <div className="flex items-center gap-3" dir="ltr">
          {socialLinks.map(({ label, href, icon, hoverColor }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200
                hover:scale-110 hover:-translate-y-0.5"
              style={{
                color: "rgba(189,232,245,0.7)",
                backgroundColor: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(189,232,245,0.12)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = hoverColor;
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.14)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = hoverColor + "55";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 18px ${hoverColor}33`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(189,232,245,0.7)";
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(189,232,245,0.12)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="relative z-10 px-6 md:px-12 lg:px-24 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 border-t"
        style={{ borderColor: "rgba(189,232,245,0.10)" }}
      >
        <p className="font-cairo text-xs" style={{ color: "rgba(189,232,245,0.5)" }}>
          © 2026 جميع الحقوق محفوظة — النحاس جروب
        </p>
        <div className="flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: "#BDE8F5", boxShadow: "0 0 6px rgba(189,232,245,0.6)" }}
          />
          <p className="font-cairo text-xs" style={{ color: "rgba(189,232,245,0.5)" }}>
            {personal.location}
          </p>
        </div>
      </div>
    </footer>
  );
}

