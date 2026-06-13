export type Service = {
  num: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
};

export const services: Service[] = [
  {
    num: "01",
    title: "بناء المنصات البرمجية ومواقع الويب",
    description: "تصميم وتطوير منصات وتطبيقات ويب سريعة جداً وخفيفة لتصفح عملائك، وتوجيههم بسهولة نحو اتخاذ قرار الشراء.",
    tags: ["Next.js", "React", "TypeScript", "Vercel"],
    icon: "platform"
  },
  {
    num: "02",
    title: "تحليل النظم وأتمتة العمليات التجارية",
    description: "أتمتة الأعمال اليدوية اليومية المتكررة وربطها بنظام برمجي مخصص يوفر ساعات العمل ويمنع الأخطاء البشرية.",
    tags: ["Business Analysis", "Process Modeling", "Workflows"],
    icon: "automation"
  },
  {
    num: "03",
    title: "تصميم وإدارة قواعد البيانات والـ Backend",
    description: "بناء هياكل خلفية قوية وقواعد بيانات مرنة تضمن استجابة سريعة جداً للموقع وتتحمل زيادة حركة الزوار بدون بطء.",
    tags: ["Supabase", "PostgreSQL", "API Design", "Security"],
    icon: "database"
  },
  {
    num: "04",
    title: "تصميم واجهات المستخدم السريعة والبيعية",
    description: "تصميم واجهات احترافية ومريحة للعين، متوافقة 100% مع الجوال وتركز على تحويل الزوار إلى عملاء فعليين.",
    tags: ["Responsive Design", "Tailwind CSS", "UX Audit"],
    icon: "ui"
  },
  {
    num: "05",
    title: "تكامل الأنظمة والربط بالخدمات الخارجية",
    description: "ربط موقعك ببوابات الدفع الإلكتروني (Stripe)، قنوات الإشعارات التلقائية، وخدمات البريد أو الـ CRM الخاصة بك.",
    tags: ["Stripe Integration", "APIs", "WhatsApp Webhooks"],
    icon: "api"
  },
  {
    num: "06",
    title: "الاستشارات الفنية وفحص أداء المواقع",
    description: "مراجعة شاملة لسرعة وأمان كود موقعك الحالي، وتجهيز خطة تقنية واضحة لتسريعه ورفعه لـ معايير Lighthouse العالية.",
    tags: ["Performance Audit", "Architecture Consulting"],
    icon: "consulting"
  }
];
