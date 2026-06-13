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
  title: "أحمد النحاس — مهندس برمجيات ومحلل أنظمة",
  description: "أحول متطلبات الأعمال إلى أنظمة ومنتجات رقمية قابلة للنمو",
  keywords: [
    "مهندس برمجيات",
    "محلل أنظمة",
    "Next.js",
    "البرمجة",
    "تطوير الويب",
  ],
  author: "أحمد النحاس",
  robots: "index, follow",
  lang: "ar",
  dir: "rtl",
};
