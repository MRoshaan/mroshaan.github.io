export type Certification = {
  name: string;
  issuer: string;
  completed: string;
  duration?: string;
  url: string;
};

export const education = {
  institution: "Sir Syed University of Engineering & Technology",
  location: "Karachi, Pakistan",
  degree: "BS Computer Science",
  detail: "Batch 2023F · Roll No 2023F-BCS-311 · Regular (Morning)",
  period: "Sep 2023 - Jul 2027",
  status: "Final year · 7th semester in progress",
  cgpa: "3.80 / 4.00",
  credits: "102 credit hours earned",
  semesterGpas: [
    { term: "Fall 2023", gpa: "3.70" },
    { term: "Spring 2024", gpa: "3.71" },
    { term: "Fall 2024", gpa: "3.90" },
    { term: "Spring 2025", gpa: "3.92" },
    { term: "Fall 2025", gpa: "3.81" },
    { term: "Spring 2026", gpa: "3.78" },
  ],
  coursework: [
    "Machine Learning",
    "Artificial Intelligence",
    "Data Structures and Algorithms",
    "Database Systems",
    "Operating Systems",
    "Software Engineering",
    "Computer Networks",
    "Information Security",
    "Compiler Construction",
    "Design and Analysis of Algorithms",
    "Probability and Statistics",
    "Linear Algebra",
  ],
} as const;

export const certifications: Certification[] = [
  {
    name: "FastAPI: The Complete Course 2025 (Beginner + Advanced)",
    issuer: "Udemy",
    completed: "31 Oct 2025",
    duration: "21.5 hours",
    url: "https://www.udemy.com/certificate/UC-c87bd78f-c6b1-4e2b-b3ba-b00d190f4969/",
  },
  {
    name: "Microsoft Power BI Desktop for Business Intelligence",
    issuer: "Udemy",
    completed: "31 Oct 2025",
    duration: "17 hours",
    url: "https://ude.my/UC-11d54533-681a-45e6-8b96-90ab707e8fbe",
  },
  {
    name: "Data Analyst in Python, Tableau, SQL and ChatGPT with Projects",
    issuer: "Udemy",
    completed: "31 Oct 2025",
    duration: "21.5 hours",
    url: "https://ude.my/UC-f5779c87-9cfa-4528-ab6c-e078c74048bd",
  },
  {
    name: "Understanding Data Science",
    issuer: "DataCamp",
    completed: "07 Nov 2025",
    duration: "2 hours",
    url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/0c26683551c6b5d01c11035db1d66bc2c3bb8baa",
  },
  {
    name: "Introduction to MongoDB in Python",
    issuer: "DataCamp",
    completed: "09 Nov 2025",
    duration: "3 hours",
    url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/bc98f530d040b999257c867c2cb657354d281ca3",
  },
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    completed: "08 Jan 2026",
    url: "https://www.netacad.com/certificates/?issuanceId=ba63e18c-934b-4629-82e6-0aae6bb7cedd",
  },
];

export const languages = [
  { name: "English", level: "Professional working proficiency" },
  { name: "Urdu", level: "Native or bilingual proficiency" },
] as const;
