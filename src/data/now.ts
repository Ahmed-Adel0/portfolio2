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
      { name: "Outwin", sub: "قيادة الفريق التقني — مشاريع عملاء" },
      { name: "Jatory", sub: "مرحلة التحقق من الفكرة (Validation)" },
      { name: "B•Stance", sub: "بناء المنظومة الرياضية المتكاملة" },
    ],
  },
  {
    label: "أتعلم",
    icon: "📚",
    items: [
      { name: "Data Science", sub: "Python والإحصاء وتحليل البيانات" },
      {
        name: "System Analysis & Design",
        sub: "التعمق في تحليل وتصميم الأنظمة",
      },
      {
        name: "Computer Science",
        sub: "الأساسيات والرياضيات والخوارزميات",
      },
    ],
  },
  {
    label: "أقرأ",
    icon: "📖",
    items: [
      { name: "Computer Science Illuminated", sub: "في التقدم" },
      { name: "Intro to Mathematical Thinking", sub: "في التقدم" },
      { name: "Algebra and Trigonometry 2e", sub: "في التقدم" },
    ],
  },
];
