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
        sub: "الأساسيات العميقة — خوارزميات، هياكل بيانات، نظرية الحوسبة",
      },
      {
        name: "تحليل وتصميم الأنظمة",
        sub: "System Analysis & Design — SDLC، نمذجة الأنظمة",
      },
      {
        name: "الرياضيات",
        sub: "الجبر وحساب المثلثات والتفكير الرياضي التحليلي",
      },
      {
        name: "علوم البيانات",
        sub: "Data Science — Python، إحصاء، تحليل البيانات",
      },
    ],
  },
  {
    label: "أقرأ حالياً",
    type: "text",
    items: [
      {
        name: "Computer Science Illuminated",
        sub: "رحلة شاملة في أساسيات علوم الحاسب — من الدوائر للخوارزميات",
      },
      {
        name: "Introduction to Mathematical Thinking",
        sub: "كيف يفكر عقل الرياضياتي؟ منهجية التفكير المنطقي",
      },
      {
        name: "Algebra and Trigonometry 2e",
        sub: "بناء قاعدة رياضية متينة لعلوم البيانات والخوارزميات",
      },
    ],
  },
  {
    label: "مجالات الاهتمام",
    type: "tags",
    items: [
      { name: "الرياضيات", tag: true },
      { name: "الأدب", tag: true },
      { name: "التاريخ", tag: true },
      { name: "الفلسفة", tag: true },
      { name: "علوم الشريعة", tag: true },
      { name: "علوم الحاسب", tag: true },
      { name: "ريادة الأعمال", tag: true },
      { name: "الأنظمة المعقدة", tag: true },
    ],
  },
];
