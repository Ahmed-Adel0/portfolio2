export type Stat = {
  value: string;
  label: string;
};

export type PersonalData = {
  nameAr: string;
  nameEn: string;
  titleEn: string;
  bio: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  facebook: string;
  location: string;
  availableGlobally: boolean;
  stats: Stat[];
};

export const personal: PersonalData = {
  nameAr: "أحمد النحاس",
  nameEn: "Ahmed El-Nahhas",
  titleEn: "Software Engineer",
  bio: "أساعد أصحاب الأعمال والشركات على تحويل أفكارهم وتحدياتهم التشغيلية إلى أنظمة رقمية قابلة للتوسع. أجمع بين فهم احتياجات العمل، تحليل الأنظمة، وتطوير حلول برمجية عملية تحقق قيمة حقيقية.",
  email: "ahmed.ibn.adell@gmail.com",
  phone: "01554463626",
  linkedin: "https://linkedin.com/in/ahmedibnadel",
  github: "https://github.com/Ahmed-Adel0",
  facebook: "https://www.facebook.com/ahmed.ibn.adell",
  location: "المنصورة، مصر",
  availableGlobally: true,
  stats: [
    { value: "5+", label: "سنوات في تطوير الويب والأنظمة" },
    { value: "15+", label: "مشاريع رقمية" },
    { value: "100%", label: "تركيز على حلول تخدم أهداف العمل" }
  ]
};

export interface CredentialBadge {
  label: string;
}

export interface WhyMeContent {
  headline: string;
  paragraphs: string[];
  badges: CredentialBadge[];
  photoSrc: string;
}

export const whyMeContent: WhyMeContent = {
  headline: "أحوّل أفكار عملك إلى أنظمة رقمية تساعدك على النمو وزيادة العملاء",

  paragraphs: [
    "مهندس برمجيات، طالب بكلية الإحصاء قسم علوم الحاسب - جامعة القاهرة. أتعامل مع البرمجيات كأداة لحل مشكلات الأعمال وليس مجرد كتابة كود. أركز على فهم طبيعة نشاطك وتحويله إلى نظام رقمي يرفع الكفاءة ويزيد العائد.",

    "أساعد أصحاب الأعمال على أتمتة العمليات اليومية، وتقليل الاعتماد على الإجراءات اليدوية، وبناء واجهات سريعة وسهلة الاستخدام تعمل بكفاءة على جميع الأجهزة، مما يحسن تجربة العملاء ويزيد فرص التحويل.",

    "أبني أنظمة منظمة وقابلة للتوسع، بحيث تظل مرنة وسهلة التطوير مستقبلًا، ويمكن لأي فريق تقني استكمالها بدون تعقيد أو إعادة بناء."
  ],

  badges: [
    { label: "خبرة +5 سنوات في تطوير الأنظمة وتطبيقات الويب" },
    { label: "خبرة في تحليل النظم وتصميم حلول الأعمال" },
    { label: "بناء أنظمة SaaS باستخدام تقنيات حديثة" },
    { label: "قيادة وإدارة تنفيذ المشاريع في شركة Outwin" }
  ],

  photoSrc: "/assets/images/hero-img.png"
};

export interface HeroContent {
  title: string;
  subtitle: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA: {
    label: string;
    href: string;
  };
}

export const heroContent: HeroContent = {
  title: "حوّل عملك إلى نظام رقمي سريع يزيد العملاء ويقلل الهدر في الوقت",

  subtitle: "أساعد أصحاب الأعمال والشركات على تحويل أفكارهم وتحدياتهم التشغيلية إلى أنظمة رقمية قابلة للتوسع، مصممة لزيادة المبيعات، تحسين تجربة العملاء، وأتمتة العمليات اليومية بدل الطرق التقليدية اليدوية.",

  primaryCTA: {
    label: "ابدأ مشروعك الآن",
    href: "https://wa.me/201554463626?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A3%D8%AD%D9%85%D8%AF%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D8%AC%D8%AF%D9%8A%D8%AF."
  },

  secondaryCTA: {
    label: "تصفح المشاريع",
    href: "#projects"
  }
};
