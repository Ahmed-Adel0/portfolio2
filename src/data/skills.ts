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
    label: "Software Engineering",    skills: [
      { name: "Next.js", core: true },
      { name: "PHP / Laravel", core: true },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Supabase" },
      { name: "MySQL" },
      { name: "REST APIs" },
      { name: "Git / GitHub" },
    ],
  },
  {
    label: "System Analysis",    skills: [
      { name: "Requirements Analysis", core: true },
      { name: "Process Modeling", core: true },
      { name: "SDLC" },
      { name: "Technical Documentation" },
      { name: "System Design" },
      { name: "Solution Architecture" },
    ],
  },
  {
    label: "Project Delivery",    skills: [
      { name: "Tech Leadership", core: true },
      { name: "Task Management" },
      { name: "Stakeholder Comms" },
      { name: "Project Coordination" },
      { name: "Agile / Scrum" },
    ],
  },
  {
    label: "Data Science Journey",    skills: [
      { name: "Python" },
      { name: "Statistics" },
      { name: "Data Analysis" },
      { name: "Mathematics" },
      { name: "CS Fundamentals" },
    ],
  },
];
