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
  location: string;
  availableGlobally: boolean;
  stats: Stat[];
};

export const personal: PersonalData = {
  nameAr: "أحمد النحاس",
  nameEn: "Ahmed El-Nahhas",
  titleEn: "Software Engineer & Systems Analyst",
  bio: "أحيل متطلبات الأعمال المعقدة إلى منصات وأنظمة رقمية بسيطة وسريعة الاستجابة. أركز على الكود النظيف، الأداء العالي، والمبيعات الفعالة.",
  email: "ahmed.ibn.adell@gmail.com",
  phone: "01554463626",
  linkedin: "https://linkedin.com/in/ahmedibnadel",
  location: "المنصورة، مصر",
  availableGlobally: true,
  stats: [
    { value: "4+", label: "سنوات خبرة عمليّة" },
    { value: "15+", label: "مشاريع رقمية مسلّمة" },
    { value: "100%", label: "الالتزام بمواعيد الإطلاق" }
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
  headline: "من الفكرة إلى منتج حقيقي يخدم أعمالك ويسعد عملائك",
  paragraphs: [
    "أنا لست مجرد مبرمج يقوم بكتابة الكود التقني دون وعي؛ بل مهندس برمجيات ومحلل أنظمة أركز في المقام الأول على أهداف عملك التجاري وكيفية تحويل الزوار إلى عملاء فعليين.",
    "أساعدك على أتمتة العمليات اليومية المرهقة وبناء واجهات سريعة التصفح وخفيفة التحميل على كافة الأجهزة، مما يزيد من رضا عملائك ويوفر وقتك الثمين لإدارة عملك.",
    "جميع الحلول التي أبنيها تعتمد على النظافة والترتيب وفصل البيانات بالكامل، مما يضمن أن موقعك سيكون مرناً وقابلاً للتوسع بواسطة أي مطور آخر في المستقبل دون تعقيد."
  ],
  badges: [
    { label: "خبرة 4+ سنوات في هندسة الويب" },
    { label: "خبرة في تحليل النظم وتوثيق العمليات" },
    { label: "إتقان التقنيات الحديثة (Next.js & Supabase)" },
    { label: "دعم فني وضمان الجودة بعد الإطلاق" }
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
  title: "أبني لك منصة رقمية سريعة تحوّل زوارك إلى عملاء دائمين",
  subtitle: "مطور برمجيات ويب ومحلل نظم متخصص في تصميم وتطوير مواقع وتطبيقات ويب بيعية وسريعة التحميل لزيادة مبيعاتك وتسهيل أتمتة عملياتك التقنية.",
  primaryCTA: {
    label: "ابدأ مشروعك الآن",
    href: "https://wa.me/201554463626?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A3%D8%AD%D9%85%D8%AF%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%8A."
  },
  secondaryCTA: {
    label: "تصفح المشاريع",
    href: "#projects"
  }
};
