type Experience = {
  logoUrl: string;
  companyName: string;
  title: string;
  location: string;
  duration: string;
  responsibilities: string[];
  skills: string[];
  color: string;
}

type Education = {
  logoUrl: string;
  institutionName: string;
  degree: string;
  location: string;
  graduationDate: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    logoUrl: 'logos/Principal.jpeg',
    companyName: "Principal Financial Group",
    title: "Software Engineer Intern",
    location: "Des Moines, IA",
    duration: "May 2025 - Present",
    responsibilities: ["Involved on supporting one of Principal's legacy systems",
      "Played a role on current company initiatives"],
    skills: ["JCL", "COBOL", "Mainframe"],
    color: "rgb(29, 52, 99)"
  },
]

export const education: Education[] = [
  {
    logoUrl: 'logos/IndianHills.jpg',
    institutionName: "Indian Hills Community College",
    degree: "Computer Software Development (AAS)",
    location: "Ottumwa, IA",
    graduationDate: "February 2025",
    highlights: ["Graduated with emphasis in Web, Mobile, and Mainframe Development",
      "Taught on-demand languages, best practices, and team collaboration",
      "Participated in college-sponsored code competitions"],
  },
]