export type Level = "Light" | "Moderate" | "High" | "Critical";

export const DEMO_INPUT = `DBMS Assignment: Complete normalization and SQL questions. Due September 12. Estimated effort 3 hours.

Java Project: Build the authentication and dashboard modules. Due September 15. Estimated effort 8 hours.

Presentation: Prepare a 10-slide presentation and practice the explanation. Due September 14. Estimated effort 4 hours.

Aptitude Practice: Complete 3 practice modules before the assessment. Due September 13. Estimated effort 2 hours.

Project Documentation: Prepare the final project documentation. Due September 16. Estimated effort 3 hours.`;

export const TASKS = [
  { task: "DBMS Assignment", deadline: "Sep 12", effort: 3, priority: "High", status: "Not Started" },
  { task: "Aptitude Practice", deadline: "Sep 13", effort: 2, priority: "Medium", status: "Not Started" },
  { task: "Presentation", deadline: "Sep 14", effort: 4, priority: "High", status: "Not Started" },
  { task: "Java Project", deadline: "Sep 15", effort: 8, priority: "High", status: "Not Started" },
  { task: "Project Documentation", deadline: "Sep 16", effort: 3, priority: "Medium", status: "Not Started" },
] as const;

export const WORKLOAD: { day: string; date: string; hours: number; level: Level; peak?: boolean }[] = [
  { day: "Tue", date: "September 9", hours: 2, level: "Light" },
  { day: "Wed", date: "September 10", hours: 3, level: "Moderate" },
  { day: "Thu", date: "September 11", hours: 4, level: "Moderate" },
  { day: "Fri", date: "September 12", hours: 6, level: "High" },
  { day: "Sat", date: "September 13", hours: 7, level: "Critical", peak: true },
  { day: "Sun", date: "September 14", hours: 6, level: "High", peak: true },
  { day: "Mon", date: "September 15", hours: 5, level: "High" },
];

export const PLAN = [
  { when: "TODAY", items: ["Start DBMS Assignment", "Spend 1.5 hours"], total: "1.5 hrs" },
  { when: "SEPTEMBER 10", items: ["Start Java Project", "Spend 2 hours"], total: "2 hrs" },
  { when: "SEPTEMBER 11", items: ["Continue Java Project", "Spend 2 hours"], total: "2 hrs" },
  { when: "SEPTEMBER 12", items: ["Complete DBMS Assignment", "Practice Aptitude"], total: "3 hrs" },
  { when: "SEPTEMBER 13", items: ["Continue Java Project"], total: "3 hrs" },
  { when: "SEPTEMBER 14", items: ["Complete Presentation"], total: "4 hrs" },
  { when: "SEPTEMBER 15", items: ["Finish Java Project"], total: "3 hrs" },
];

export const levelClasses: Record<Level, { bar: string; chip: string }> = {
  Light: { bar: "bg-light", chip: "bg-light/20 text-light-foreground" },
  Moderate: { bar: "bg-moderate", chip: "bg-moderate/25 text-moderate-foreground" },
  High: { bar: "bg-high", chip: "bg-high/25 text-high-foreground" },
  Critical: { bar: "bg-critical", chip: "bg-critical/20 text-critical-foreground" },
};
