export type StudyItem = {
  name: string;
  sub: string;
};

export type TagItem = {
  name: string;
  tag: true;
};

export type LearningItem = StudyItem | TagItem;

export type LearningColumn =
  | { label: string; type: "text"; items: StudyItem[] }
  | { label: string; type: "tags"; items: TagItem[] };

export const learningColumns: LearningColumn[] = [
  {
    label: "أدرس الآن",
    type: "text",
    items: [
      {
        name: "علوم الحاسب",
        sub: "بناء أساس قوي في البرمجة، الخوارزميات، هياكل البيانات، وفهم طريقة عمل الأنظمة من الداخل",
      },
      {
        name: "علوم البيانات",
        sub: "Data Science — الإحصاء، تحليل البيانات، Python، وبناء فهم أعمق للبيانات واتخاذ القرار",
      },
      {
        name: "تحليل وتصميم الأنظمة",
        sub: "System Analysis & Design — فهم احتياجات الأعمال، نمذجة الأنظمة، وتصميم حلول رقمية فعالة",
      },
      {
        name: "هندسة البرمجيات",
        sub: "Software Engineering — بناء أنظمة منظمة، قابلة للتوسع، وسهلة التطوير والصيانة",
      },
    ],
  },
  {
    label: "أقرأ حالياً",
    type: "text",
    items: [
      {
        name: "Computer Science Illuminated",
        sub: "فهم شامل لمفاهيم علوم الحاسب بداية من أساسيات الحوسبة حتى الخوارزميات والأنظمة",
      },
      {
        name: "Software Architecture",
        sub: "تصميم أنظمة برمجية قوية وقابلة للنمو مع تطور احتياجات المشاريع",
      },
      {
        name: "كتب ريادة الأعمال والمنتجات الرقمية",
        sub: "فهم بناء المنتجات، احتياجات العملاء، وتحويل الأفكار إلى حلول قابلة للتطبيق",
      },
    ],
  },
  {
    label: "مجالات الاهتمام",
    type: "tags",
    items: [
      { name: "هندسة البرمجيات", tag: true },
      { name: "علوم الحاسب", tag: true },
      { name: "الأنظمة الرقمية", tag: true },
      { name: "علوم البيانات", tag: true },
      { name: "الذكاء الاصطناعي", tag: true },
      { name: "ريادة الأعمال", tag: true },
      { name: "تحليل الأعمال", tag: true },
      { name: "بناء المنتجات التقنية", tag: true },
    ],
  },
];
