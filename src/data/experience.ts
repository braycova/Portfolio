export interface Experience {
  logoUrl: string;
  title: string;
  subtitle?: string;
  date: string;
  highlights: string[];
  skills?: string[][];
}

export const experiences: Experience[] = [
  {
    logoUrl: 'experience/Principal.jpeg',
    title: "Principal Financial Group",
    subtitle: "Cobol Engineer Intern",
    date: "Starting this May 2025!",
    highlights: ["Accepted as a 2025 intern, excited for what's to come :)"],
    skills: [
      ["COBOL", "gray"],
    ],
  },
]

export const education: Experience[] = [
  {
    logoUrl: 'education/IndianHills.jpg',
    title: "Indian Hills Community College",
    date: "February 2025",
    highlights: ["Associate of Applied Science, emphasis in Web, Mobile, and Mainframe Development",
      "Taught on-demand languages, best practices, and project collaboration"],
  },
]