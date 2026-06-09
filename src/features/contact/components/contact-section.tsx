import {
  CONTACT_EMAIL,
  PHONE,
  LINKEDIN,
} from "@/shared/constants/nav.constant";

export function ContactSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-24 py-32 text-center bg-bg relative overflow-hidden"
      id="contact"
      dir="rtl"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Eyebrow */}
        <div className="reveal font-mono text-xs text-blue tracking-[3px] uppercase mb-8 flex items-center justify-center gap-4">
          <span className="inline-block w-10 h-px bg-gradient-to-r from-transparent to-blue opacity-70"></span>
          لنبني شيئاً معاً
          <span className="inline-block w-10 h-px bg-gradient-to-l from-transparent to-blue opacity-70"></span>
        </div>

        {/* Heading */}
        <h2 className="reveal reveal-delay-1 text-5xl md:text-6xl lg:text-7xl font-black leading-[1.0] tracking-[-3px] mb-6">
          عندك فكرة؟
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-blue-light">
            تواصل معي.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="reveal reveal-delay-2 text-lg text-muted mb-16 max-w-xl mx-auto leading-relaxed">
          متاح للمشاريع الجديدة، الاستشارات، والتعاون المثمر.
        </p>

        {/* Contact Links */}
        <div className="reveal reveal-delay-3 flex gap-4 justify-center flex-wrap">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group bg-bg-2/60 backdrop-blur-md border border-border/50 px-6 py-4 text-text text-sm
              inline-flex items-center gap-3 rounded-2xl hover:border-blue/60 hover:bg-blue/5
              hover:text-blue-light hover:shadow-[0_0_25px_rgba(26,110,255,0.12)] transition-all duration-300"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-5 h-5 opacity-60 flex-shrink-0 group-hover:opacity-100 transition-opacity"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            {CONTACT_EMAIL}
          </a>

          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-bg-2/60 backdrop-blur-md border border-border/50 px-6 py-4 text-text text-sm
              inline-flex items-center gap-3 rounded-2xl hover:border-blue/60 hover:bg-blue/5
              hover:text-blue-light hover:shadow-[0_0_25px_rgba(26,110,255,0.12)] transition-all duration-300"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-5 h-5 opacity-60 flex-shrink-0 group-hover:opacity-100 transition-opacity"
            >
              <rect x="2" y="2" width="20" height="20" rx="3" />
              <path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
            </svg>
            linkedin.com/in/ahmedibnadel
          </a>

          <a
            href={`tel:${PHONE}`}
            className="group bg-bg-2/60 backdrop-blur-md border border-border/50 px-6 py-4 text-text text-sm
              inline-flex items-center gap-3 rounded-2xl hover:border-blue/60 hover:bg-blue/5
              hover:text-blue-light hover:shadow-[0_0_25px_rgba(26,110,255,0.12)] transition-all duration-300"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-5 h-5 opacity-60 flex-shrink-0 group-hover:opacity-100 transition-opacity"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.8 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            0155 446 3626
          </a>
        </div>
      </div>
    </section>
  );
}
