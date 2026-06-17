export type NowItem = {
  name: string;
  sub: string;
};

export type NowColumn = {
  label: string;
  icon: string;
  items: NowItem[];
};

export const nowColumns: NowColumn[] = [
  {
    label: "أعمل على",
    icon: "⚡",
    items: [
      { name: "Outwin", sub: "قيادة الفريق التقني وتنفيذ مشاريع عملاء وتحويل متطلبات الأعمال إلى أنظمة رقمية" },
      { name: "Jatory", sub: "تطوير نموذج منصة تعليمية في مرحلة التحقق من الفكرة (Validation)" },
      { name: "B•Stance", sub: "بناء نظام SaaS لإدارة الأكاديميات الرياضية وتوحيد عمليات التشغيل" },
    ],
  },

  {
    label: "أتعلم",
    icon: "📚",
    items: [
      { name: "Data Science", sub: "تطوير فهم أعمق للإحصاء، Python، وتحليل البيانات لدعم اتخاذ القرار" },
      {
        name: "System Analysis & Design",
        sub: "تعزيز القدرة على تحويل متطلبات الأعمال إلى حلول وأنظمة قابلة للتنفيذ",
      },
      {
        name: "Computer Science",
        sub: "تقوية الأساسيات في الخوارزميات، الهياكل، والرياضيات التطبيقية",
      },
    ],
  },

  {
    label: "أقرأ",
    icon: "📖",
    items: [
      { name: "Computer Science Illuminated", sub: "تطوير الفهم النظري لأسس علوم الحاسب" },
      { name: "Intro to Mathematical Thinking", sub: "تعزيز التفكير المنطقي والتحليلي" },
      { name: "Algebra and Trigonometry 2e", sub: "دعم الأساس الرياضي لعلوم البيانات والهندسة" },
    ],
  },
];
