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
    author: string;
  };
}

export const comparisonData: ComparisonData = {
  title: "لماذا العمل معي مختلف عن أي مستقل آخر؟",
  subtitle: "مقارنة سريعة توضح الفارق بين العمل التقليدي والمنهجية القائمة على تحقيق نتائج الأعمال الملموسة",
  rows: [
    {
      aspect: "سرعة التنفيذ والإطلاق",
      freelancer: {
        text: "أسابيع أو شهور بسبب التشتت وكثرة الكلام دون إنجاز فعلي.",
        isPositive: false
      },
      withMe: {
        text: "إطلاق أولي للمشروع خلال 3 إلى 7 أيام فقط لتجربة السوق مبكراً.",
        isPositive: true
      }
    },
    {
      aspect: "فهم متطلبات الأعمال",
      freelancer: {
        text: "ينفذ فقط ما تطلبه حرفياً دون مناقشة جدواه التجارية أو فائدته لمشروعك.",
        isPositive: false
      },
      withMe: {
        text: "تحليل فني للمشروع والتركيز على الميزات التي تزيد أرباحك وتوفر وقتك.",
        isPositive: true
      }
    },
    {
      aspect: "مرونة وجودة الكود",
      freelancer: {
        text: "أكواد معقدة ومبعثرة يصعب على أي مطور آخر فهمها أو التعديل عليها.",
        isPositive: false
      },
      withMe: {
        text: "كود منظم ومقسّم لـ Features بملفات منفصلة يسهل تطويرها مستقبلاً.",
        isPositive: true
      }
    },
    {
      aspect: "التواصل والتحديث المستمر",
      freelancer: {
        text: "اختفاء مفاجئ لأيام، وردود متأخرة بعد تسلم الدفعة الأولى من المبلغ.",
        isPositive: false
      },
      withMe: {
        text: "قناة تواصل يومية ومباشرة على واتساب لمتابعة التقدم خطوة بخطوة.",
        isPositive: true
      }
    },
    {
      aspect: "تسليم المنتج النهائي",
      freelancer: {
        text: "أخطاء تقنية متكررة وتصميم بطيء ينفر العملاء ويقلل من مصداقيتك.",
        isPositive: false
      },
      withMe: {
        text: "موقع سريع التحميل (أقل من ثانيتين)، متناسق تماماً وخالٍ من الأخطاء.",
        isPositive: true
      }
    }
  ],
  quote: {
    text: "«السر ليس في تعقيد التكنولوجيا بل في تبسيطها؛ الحل الذكي هو الذي يحل مشكلة عميلك بأقل كود وأسرع وقت وأبسط واجهة.»",
    author: "أحمد النحاس"
  }
};
