export type ProjectStatus = "Live" | "In Development" | "Validation";

export interface Project {
  id: string;
  code: string;
  status: ProjectStatus;
  name: string;
  businessDescription: string; // Business outcome in Arabic
  techs: string[];
  link?: string; // Optional live link
}

export const projectsData: Project[] = [
  {
    id: "medplus",
    code: "MED+",
    status: "Live",
    name: "المنصة الطبية MED+",
    businessDescription: "أتمتة إدارة حجوزات العيادات الطبية بالكامل، مما قلل وقت انتظار المرضى بنسبة 40% ووفر عشرات ساعات العمل الأسبوعية لموظفي الاستقبال.",
    techs: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    link: "https://medplus-demo.vercel.app" // Placeholder/Demo URL
  },
  {
    id: "jatory",
    code: "JATORY",
    status: "Validation",
    name: "منصة Jatory التعليمية",
    businessDescription: "منصة لربط وتأهيل طلاب الكليات العلمية بالمسارات المهنية المناسبة وسوق العمل الفعلي، ساهمت في توجيه أكثر من 500 طالب.",
    techs: ["Business Analysis", "Ed-Tech", "Market Validation"]
  },
  {
    id: "outwin",
    code: "OUTWIN",
    status: "Validation",
    name: "وكالة Outwin الرقمية",
    businessDescription: "قيادة وتوجيه مشاريع التحول الرقمي التقنية للعملاء، وتنسيق تسليم حلول متكاملة ساعدت الشركات على زيادة كفاءتها التشغيلية بنسبة 30%.",
    techs: ["Tech Leadership", "SDLC Management", "Client Consulting"]
  },
  {
    id: "eds",
    code: "EDS",
    status: "Live",
    name: "مبادرة Egypt Data Scholars",
    businessDescription: "بناء وإطلاق منصة وطنية متكاملة لتدريب الطلاب في علوم البيانات والذكاء الاصطناعي، سجل عليها أكثر من 1000 طالب نشط.",
    techs: ["Next.js", "PostgreSQL", "Tailwind CSS", "Ed-Tech"],
    link: "https://datachamp.org"
  },
  {
    id: "bstance",
    code: "B•STANCE",
    status: "In Development",
    name: "منظومة B•Stance الرياضية",
    businessDescription: "منصة سحابية متكاملة (SaaS) موجهة لإدارة الأكاديميات الرياضية، تشمل متابعة الاشتراكات واللاعبين وقياس وتحسين الأداء الرياضي والتشغيلي.",
    techs: ["Next.js App Router", "Supabase Database", "Sports Tech", "SaaS"]
  }
];
