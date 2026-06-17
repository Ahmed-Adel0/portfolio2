export interface ComparisonColumn {
  text: string;
  isPositive: boolean;
}

export interface ComparisonRow {
  aspect: string;
  freelancer: ComparisonColumn;
  withMe: ComparisonColumn;
}

export interface ComparisonData {
  title: string;
  subtitle: string;
  rows: ComparisonRow[];
  quote: {
    text: string;
  };
}

export const comparisonData: ComparisonData = {
  title: "لماذا يختلف العمل معي عن التعامل مع مطور تقليدي؟",
  subtitle: "لأن بناء نظام ناجح لا يعتمد فقط على كتابة الكود، بل على فهم احتياجات عملك وتحويلها إلى حل رقمي قابل للنمو",
  rows: [
    {
      aspect: "فهم احتياجات البيزنيس",
      freelancer: {
        text: "ينفذ المتطلبات كما هي دون تحليل تأثيرها على طريقة عملك أو أهداف المشروع.",
        isPositive: false
      },
      withMe: {
        text: "أبدأ بفهم طبيعة عملك وتحليل المشكلة لبناء حل تقني يخدم أهدافك ويحقق قيمة حقيقية.",
        isPositive: true
      }
    },
    {
      aspect: "تحويل الفكرة إلى منتج حقيقي",
      freelancer: {
        text: "يركز على الجانب البرمجي فقط دون المشاركة في تحويل الفكرة إلى منتج قابل للاستخدام.",
        isPositive: false
      },
      withMe: {
        text: "أساعدك في تحليل الفكرة، تحديد المتطلبات، وبناء نظام رقمي واضح يمكن تطويره مستقبلاً.",
        isPositive: true
      }
    },
    {
      aspect: "قابلية التوسع والتطوير",
      freelancer: {
        text: "حلول سريعة قد تصبح صعبة التعديل عندما يكبر مشروعك أو تزيد احتياجاتك.",
        isPositive: false
      },
      withMe: {
        text: "أبني أنظمة منظمة وقابلة للتوسع تساعد مشروعك على النمو وإضافة مزايا جديدة بسهولة.",
        isPositive: true
      }
    },
    {
      aspect: "إدارة المشروع والتواصل",
      freelancer: {
        text: "التواصل غالباً يقتصر على تنفيذ المهام بدون رؤية واضحة لمسار المشروع بالكامل.",
        isPositive: false
      },
      withMe: {
        text: "أتابع المشروع بشكل منظم بداية من تحليل المتطلبات وحتى الإطلاق مع وضوح في كل مرحلة.",
        isPositive: true
      }
    },
    {
      aspect: "جودة الحل النهائي",
      freelancer: {
        text: "قد تحصل على تطبيق يعمل فقط بدون التركيز على تجربة المستخدم أو احتياجات النمو المستقبلية.",
        isPositive: false
      },
      withMe: {
        text: "أبني منتجات رقمية تجمع بين الأداء، سهولة الاستخدام، والاحتياجات الفعلية لعملك.",
        isPositive: true
      }
    }
  ],
  quote: {
    text: "«التكنولوجيا ليست الهدف بحد ذاتها؛ الهدف هو بناء نظام يساعد عملك على العمل بشكل أفضل، يوفر وقتك، ويفتح فرصًا جديدة للنمو.»",
  }
};