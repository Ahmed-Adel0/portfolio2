export type Skill = {
  name: string;
  core?: boolean;
};

export type SkillGroup = {
  label: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "هندسة البرمجيات وبناء الأنظمة",
    skills: [
      { name: "Next.js", core: true },
      { name: "PHP / Laravel", core: true },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Supabase" },
      { name: "MySQL" },
      { name: "REST APIs" },
      { name: "Git / GitHub" },
    ],
  },

  {
    label: "تحليل الأنظمة وتصميم الحلول",
    skills: [
      { name: "تحليل المتطلبات", core: true },
      { name: "نمذجة العمليات", core: true },
      { name: "SDLC" },
      { name: "توثيق الأنظمة" },
      { name: "System Design" },
      { name: "Solution Architecture" },
    ],
  },

  {
    label: "قيادة تنفيذ المشاريع التقنية",
    skills: [
      { name: "Tech Leadership", core: true },
      { name: "إدارة المهام" },
      { name: "التواصل مع أصحاب المصلحة" },
      { name: "تنسيق المشاريع" },
      { name: "Agile / Scrum" },
    ],
  },

  {
    label: "رحلة علوم البيانات",
    skills: [
      { name: "Python" },
      { name: "Statistics" },
      { name: "Data Analysis" },
      { name: "Mathematics" },
      { name: "CS Fundamentals" },
    ],
  },
];
