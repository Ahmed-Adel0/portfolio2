export interface HowItWorksStep {
  num: string;
  title: string;
  description: string;
}

export interface HowItWorksData {
  title: string;
  subtitle: string;
  steps: HowItWorksStep[];
  cta: {
    label: string;
    href: string;
  };
}

export const howItWorksData: HowItWorksData = {
  title: "كيف نحول فكرتك إلى نظام رقمي؟",
  subtitle: "من فهم احتياجات عملك وتحليل المشكلة، حتى بناء وإطلاق حل تقني يساعدك على تطوير مشروعك",
  steps: [
    {
      num: "01",
      title: "فهم وتحليل احتياجات عملك",
      description: "نبدأ بجلسة لمناقشة طبيعة نشاطك، التحديات التي تواجهها، والأهداف التي تريد تحقيقها للوصول إلى تصور واضح للحل المناسب."
    },
    {
      num: "02",
      title: "تحليل النظام وتخطيط الحل",
      description: "نحوّل احتياجاتك إلى متطلبات واضحة ونحدد مكونات النظام والخصائص الأساسية لضمان بناء منتج يخدم طريقة عملك."
    },
    {
      num: "03",
      title: "تطوير النظام وبناء التجربة",
      description: "نقوم ببناء الحل الرقمي باستخدام تقنيات حديثة مع التركيز على الأداء، سهولة الاستخدام، وقابلية النظام للتوسع مستقبلاً."
    },
    {
      num: "04",
      title: "الإطلاق والتحسين المستمر",
      description: "بعد إطلاق النظام نتابع الأداء ونساعدك على تحسين المنتج وإضافة التطويرات التي يحتاجها عملك مع نموه."
    }
  ],
  cta: {
    label: "ناقش مشروعك معي",
    href: "https://wa.me/201554463626?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A3%D8%AD%D9%85%D8%AF%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D9%85%D9%86%D8%A7%D9%82%D8%B4%D8%A9%20%D9%81%D9%83%D8%B1%D8%A9%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%8A%20%D9%88%D8%A7%D9%84%D8%AD%D9%84%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%20%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%B3%D8%A8%20%D9%84%D9%87."
  }
};