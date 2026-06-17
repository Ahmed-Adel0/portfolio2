export type SiteConfig = {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  robots: string;
  lang: string;
  dir: "rtl" | "ltr";
};

export const site: SiteConfig = {
  title: "أحمد النحاس — مهندس برمجيات",

  description: "أساعد أصحاب الأعمال على تحويل عملياتهم وأفكارهم إلى أنظمة رقمية قابلة للنمو تزيد الكفاءة وتدعم نمو الإيرادات",

  keywords: [
    "مهندس برمجيات",
    "محلل أنظمة",
    "أنظمة إدارة الأعمال",
    "تحليل النظم",
    "Next.js",
    "تطوير الويب",
    "SaaS",
    "أتمتة العمليات"
  ],

  author: "أحمد النحاس",
  robots: "index, follow",
  lang: "ar",
  dir: "rtl",
};
