export type MethodologyStep = {
  num: string;
  title: string;
  description: string;
};

export const methodologySteps: MethodologyStep[] = [
  {
    num: "01",
    title: "فهم المشكلة",
    description: "ما المشكلة الحقيقية؟ ليس الطلب، بل ما وراءه.",  },
  {
    num: "02",
    title: "فهم أهداف العمل",
    description: "ما الذي يريد العميل أو المؤسسة تحقيقه فعلاً؟",  },
  {
    num: "03",
    title: "تحليل المتطلبات",
    description: "توثيق وتحليل المتطلبات الوظيفية وغير الوظيفية بدقة.",  },
  {
    num: "04",
    title: "تصميم الحل",
    description: "اختيار التقنيات المناسبة وتصميم البنية الصحيحة.",  },
  {
    num: "05",
    title: "إدارة التنفيذ",
    description: "التنسيق بين الفريق والعميل وضمان الجودة في كل مرحلة.",  },
  {
    num: "06",
    title: "القياس والتحسين",
    description: "قياس الأثر الحقيقي والتحسين المستمر بناءً على البيانات.",  },
];
