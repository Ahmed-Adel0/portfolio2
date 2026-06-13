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
  title: "كيف نشتغل معاً؟",
  subtitle: "خطوات واضحة ومبسطة من الجلسة الأولى وحتى إطلاق مشروعك والبدء في استقبال العملاء",
  steps: [
    {
      num: "01",
      title: "التخطيط والتحليل للعمل",
      description: "نجلس معاً (أونلاين) لنحدد أهداف عملك، مشكلات عملائك، والحلول التي سنقدمها لتصيغ محتوى بيعي مقنع."
    },
    {
      num: "02",
      title: "هيكلة وفصل البيانات",
      description: "نجهز محتوى الموقع بالكامل (نصوص وصور) بشكل مستقل لضمان سهولة التحديث وسرعة التحميل القياسية."
    },
    {
      num: "03",
      title: "التطوير وتجربة المستخدم",
      description: "نبني موقعاً بتصميم جذاب وتجربة مستخدم سريعة وخفيفة جداً، مع تحسين تام للعمل على كافة الهواتف."
    },
    {
      num: "04",
      title: "الإطلاق والمتابعة",
      description: "نطلق موقعك على الدومين الخاص بك، مع تقديم 30 يوماً دعم فني مجاني ومتابعة مستمرة لضمان الاستقرار."
    }
  ],
  cta: {
    label: "ابدأ مشروعك الآن",
    href: "https://wa.me/201554463626?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A3%D8%AD%D9%85%D8%AF%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%8A."
  }
};
