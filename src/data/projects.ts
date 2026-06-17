export type ProjectStatus = "Live" | "In Development" | "Validation";

export interface Project {
  id: string;
  code: string;
  name: string;
  businessDescription: string; // Business outcome in Arabic
  image: string; // Screenshot image path
  link?: string; // Optional live link
}

export const projectsData: Project[] = [
  {
    id: "medplus",
    code: "MED+",
    name: "MEDCAL+ نظام إدارة العيادات الطبية",
    businessDescription: "نظام رقمي لإدارة حجوزات العيادات الطبية بشكل كامل، ساعد في تقليل وقت انتظار المرضى وتحسين كفاءة العمل داخل العيادة.",
    image: "/assets/projects/1.png",
    link: "https://medical-platform-alpha.vercel.app/en"
  },
  
  {
    id: "jatory",
    code: "JATORY",
    name: "منصة Jatory التعليمية",
    businessDescription: "منصة تعليمية تهدف إلى ربط طلاب الكليات العلمية بالمسارات المهنية المناسبة وسوق العمل.",
    image: "/assets/projects/2.png",
    link: "https://jatory.vercel.app/"
  },
  {
    id: "mortaqa",
    code: "MORTAQA",
    name: "منصة مرتقى التعليمية",
    businessDescription: "منصة تعليمية تهدف إلى ربط الطلاب بالمعلمين والإدارة داخل بيئة تعليمية رقمية منظمة.",
    image: "/assets/projects/3.png",
    link: "https://mortaqa-8zh1niqml-ahmed-adels-projects-4130fd31.vercel.app/"
  },

  {
    id: "outwin",
    code: "OUTWIN",
    name: "شركة Outwin للحلول الرقمية",
    businessDescription: "قيادة وتنفيذ مشاريع التحول الرقمي للعملاء من مرحلة تحليل الاحتياج حتى تسليم الحلول التقنية.",
    image: "/assets/projects/4.png",
    link: "https://outwinads.com/"
    
  },
  
  {
    id: "eds",
    code: "EDS",
    name: "مبادرة Egypt Data Scholars",
    businessDescription: "منصة تعليمية وطنية في مجال علوم البيانات والذكاء الاصطناعي، تم تصميمها لدعم الطلاب وتوفير مسار تعلم منظم.",
    image: "/assets/projects/5.png",
    link: "https://egyds.com/"
  },

  {
    id: "tabeeb",
    code: "TABEEB",
    name: "موقع طبيب أسنان",
    businessDescription: "منصة رقمية متخصصة في تقديم الخدمات الطبية وربط المرضى بالأطباء المتخصصين بشكل سريع وفعال.",
    image: "/assets/projects/6.png",
    link: "https://egyds.com/"
  },
  
  {
    id: "bstance",
    code: "B•STANCE",
    name: "منظومة B•Stance الرياضية",
    businessDescription: "نظام SaaS لإدارة الأكاديميات الرياضية يشمل إدارة الاشتراكات، متابعة اللاعبين، وتحليل الأداء.",
    image: "/assets/projects/7.png",
    link: "https://b-stance.com/"
  }
];
