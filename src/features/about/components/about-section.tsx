import { SectionHeader } from "@/shared/components/section-header";

export function AboutSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-24 py-24 border-b border-border bg-bg relative overflow-hidden"
      id="about"
      dir="rtl"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionHeader num="001" title="من أنا؟" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Content */}
          <div className="reveal reveal-delay-1 p-8 md:p-10 rounded-3xl bg-bg-2/40 backdrop-blur-md border border-border/40 shadow-lg">
            <p className="text-2xl md:text-3xl font-bold leading-[1.6] mb-8">
              لستُ <em className="text-blue not-italic">مجرد مطوّر ويب.</em>
              <br />
              أنا مهندس يفهم المشكلة من جذورها.
            </p>

            <p className="text-base md:text-lg text-muted leading-[1.9] mb-6">
              بدأت رحلتي من إدارة الرياضة — عالم الأنظمة والتشغيل والناس. اكتشفت
              مبكراً أن الكود وحده لا يحل المشكلات، بل فهم السياق وتحليل الأنظمة
              هو ما يصنع الفارق الحقيقي.
            </p>

            <p className="text-base md:text-lg text-muted leading-[1.9] mb-8">
              تحولت إلى البرمجيات، وأضفت إليها تحليل الأنظمة وقيادة المشاريع.
              اليوم أعمل في تحويل الأفكار والمشكلات التشغيلية إلى منتجات رقمية
              قابلة للنمو — لأنني أفهم الأعمال قبل الكود.
            </p>

            <blockquote className="border-r-4 border-blue pr-6 py-2 text-base md:text-lg italic text-muted-2 leading-[1.8] bg-blue/5 rounded-l-2xl">
              التكنولوجيا ليست غاية في حد ذاتها، بل وسيلة لفهم المشكلات وبناء
              أنظمة أكثر كفاءةً وتأثيراً.
            </blockquote>
          </div>

          {/* Right Journey */}
          <div className="reveal reveal-delay-2 lg:pl-12">
            <div className="font-mono text-xs text-blue tracking-widest uppercase mb-10 flex items-center gap-4">
              <span className="w-12 h-px bg-blue/50"></span>
              مسيرتي
            </div>

            <div className="relative space-y-10 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-border before:via-border/50 before:to-transparent">
              
              {/* Journey Item 1 */}
              <div className="relative flex items-start gap-6 group">
                <div
                  className="w-12 h-12 rounded-full flex-shrink-0 bg-bg-3 border border-border-2
                  flex items-center justify-center font-mono text-xs text-muted z-10 transition-colors group-hover:border-blue/50 group-hover:text-blue"
                >
                  01
                </div>
                <div className="pt-2">
                  <div className="text-lg font-bold mb-2 group-hover:text-blue-light transition-colors">
                    خريج إدارة رياضية
                  </div>
                  <div className="text-sm text-muted leading-[1.7]">
                    أساس قوي في إدارة الأنظمة والمؤسسات والعمليات البشرية
                  </div>
                </div>
              </div>

              {/* Journey Item 2 */}
              <div className="relative flex items-start gap-6 group">
                <div
                  className="w-12 h-12 rounded-full flex-shrink-0 bg-bg-3 border border-border-2
                  flex items-center justify-center font-mono text-xs text-muted z-10 transition-colors group-hover:border-blue/50 group-hover:text-blue"
                >
                  02
                </div>
                <div className="pt-2">
                  <div className="text-lg font-bold mb-2 group-hover:text-blue-light transition-colors">
                    الانتقال إلى البرمجيات
                  </div>
                  <div className="text-sm text-muted leading-[1.7]">
                    اكتشاف الشغف بالتقنية وبناء الأنظمة الرقمية من الصفر
                  </div>
                </div>
              </div>

              {/* Journey Item 3 */}
              <div className="relative flex items-start gap-6 group">
                <div
                  className="w-12 h-12 rounded-full flex-shrink-0 bg-bg-3 border border-border-2
                  flex items-center justify-center font-mono text-xs text-muted z-10 transition-colors group-hover:border-blue/50 group-hover:text-blue"
                >
                  03
                </div>
                <div className="pt-2">
                  <div className="text-lg font-bold mb-2 group-hover:text-blue-light transition-colors">
                    تحليل الأنظمة وقيادة المشاريع
                  </div>
                  <div className="text-sm text-muted leading-[1.7]">
                    التعمق في تحليل المتطلبات وتصميم الحلول وقيادة فرق التنفيذ
                  </div>
                </div>
              </div>

              {/* Journey Item 4 - Now */}
              <div className="relative flex items-start gap-6 group">
                <div
                  className="w-12 h-12 rounded-full flex-shrink-0 bg-blue/10 border border-blue
                  flex items-center justify-center font-mono text-[10px] text-blue z-10 shadow-[0_0_20px_rgba(26,110,255,0.3)] animate-pulse"
                >
                  الآن
                </div>
                <div className="pt-2">
                  <div className="text-lg font-bold mb-2 text-blue-light">
                    علوم البيانات وعلوم الحاسب
                  </div>
                  <div className="text-sm text-muted leading-[1.7]">
                    توسيع عمق المعرفة — الرياضيات، الخوارزميات، Data Science
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
