export interface TestimonialCard {
  id: string;
  stars: number;
  quote: string;
  tags: string[];
  projectName: string;
  date: string;
  platform: string;
}

// Omitted/empty by default for MVP as per FR-003b.
// Add objects here to dynamically trigger Testimonials display on the page.
export const testimonialsData: TestimonialCard[] = [
  {
    id: "medplus-client",
    stars: 5,
    quote: "النظام ساعدنا في تنظيم الحجوزات وتقليل الضغط على فريق الاستقبال بشكل واضح، وأصبح التعامل مع المرضى أسرع وأكثر تنظيمًا من قبل.",
    tags: ["Medical System", "Automation", "Efficiency"],
    projectName: "MED+ Clinic System",
    date: "2026",
    platform: "Private Client"
  },

  {
    id: "jatory-edtech",
    stars: 5,
    quote: "تم تحويل الفكرة إلى منصة تعليمية منظمة ساعدت في تحسين تجربة الطلاب وتسهيل الوصول للمحتوى والمسارات المناسبة لكل مستخدم.",
    tags: ["EdTech", "Product Design", "User Experience"],
    projectName: "Jatory Platform",
    date: "2026",
    platform: "Educational Project"
  },

  {
    id: "consulting-system",
    stars: 5,
    quote: "التحليل التقني الذي تم للمشروع كان دقيق جدًا وساعدنا على إعادة بناء النظام بشكل أكثر استقرارًا وقابلية للتوسع.",
    tags: ["System Analysis", "Architecture", "Scalability"],
    projectName: "Technical Consulting Engagement",
    date: "2025",
    platform: "Business Client"
  }
];