export type ProjectStatus = "Live" | "In Development" | "Validation";

export interface Project {
  id: string;
  code: string;
  name: string;
  businessDescription: string; // Business outcome in Arabic
  link?: string; // Optional live link
}

export const projectsData: Project[] = [
  {
    id: "medplus",
    code: "MED+",
    name: "MEDCAL+ نظام إدارة العيادات الطبية",
    businessDescription: "نظام رقمي لإدارة حجوزات العيادات الطبية بشكل كامل، ساعد في تقليل وقت انتظار المرضى وتحسين كفاءة العمل داخل العيادة من خلال تقليل الإجراءات اليدوية وتنظيم تدفق الحجز والاستقبال.",

    link: "https://medical-platform-alpha.vercel.app/en"
  },
  
  {
    id: "jatory",
    code: "JATORY",
    name: "منصة Jatory التعليمية",
    businessDescription: "منصة تعليمية تهدف إلى ربط طلاب الكليات العلمية بالمسارات المهنية المناسبة وسوق العمل، من خلال تحليل الاهتمامات وتوجيه المستخدمين نحو مسارات أكثر توافقًا مع قدراتهم.",
    
    link: "https://jatory.vercel.app/"
  },
  {
    id: "mortaqa",
    code: "MORTAQA",
    name: "منصة مرتقى التعليمية",
  businessDescription: "منصة تعليمية تهدف إلى ربط الطلاب بالمعلمين والإدارة داخل بيئة تعليمية رقمية منظمة، من خلال إدارة عملية التعلم وتوجيه المستخدمين لمسارات تعليمية تتناسب مع احتياجاتهم ومستوياتهم، مما يحسن تجربة التعلم ويزيد من التفاعل والاستمرارية في المنصة.",

    link: "https://mortaqa-8zh1niqml-ahmed-adels-projects-4130fd31.vercel.app/"
  },

  {
    id: "outwin",
    code: "OUTWIN",
    name: "شركة Outwin للحلول الرقمية",
    businessDescription: "قيادة وتنفيذ مشاريع التحول الرقمي للعملاء من مرحلة تحليل الاحتياج حتى تسليم الحلول التقنية، مع تحسين كفاءة العمليات الداخلية وتقليل الهدر التشغيلي في عدة مشاريع.",
    link: "https://outwinads.com/"
    
  },
  
  {
    id: "eds",
    code: "EDS",
    name: "مبادرة Egypt Data Scholars",
    businessDescription: "منصة تعليمية وطنية في مجال علوم البيانات والذكاء الاصطناعي، تم تصميمها لدعم الطلاب وتوفير مسار تعلم منظم مع مجتمع نشط للتطبيق والتطوير.",
    
    link: "https://egyds.com/"
  },

 {
  id: "dental-website",
  code: "DENTAL",
  name: "موقع إلكتروني لطبيب أسنان",

  businessDescription: "تصميم وتطوير موقع إلكتروني احترافي لطبيب أسنان بهدف تحسين الظهور الرقمي للعيادة، وبناء حضور موثوق على الإنترنت يساعد المرضى على معرفة الخدمات وحجز المواعيد بسهولة، مع تحسين تجربة التواصل وتقليل الاعتماد على المكالمات اليدوية.",

  link: "https://static-medical.vercel.app/en"
},
  
  {
    id: "bstance",
    code: "B•STANCE",
    name: "منظومة B•Stance الرياضية",
    businessDescription: "نظام SaaS لإدارة الأكاديميات الرياضية يشمل إدارة الاشتراكات، متابعة اللاعبين، وتحليل الأداء، بهدف تحسين التشغيل وزيادة كفاءة الإدارة داخل الأكاديميات.",
    
    link: "https://b-stance.com/"
  }
];
