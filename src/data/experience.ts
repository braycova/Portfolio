interface Experience {
  logo: string;
  companyName: string;
  jobTitle: string;
  dateRange: string;
  highlights: string[];
  skillsUsed: string[][];
}

const experiences: Experience[] = [
  {
    logo: 'experience/Principal.jpeg',
    companyName: "Principal Financial Group",
    jobTitle: "Cobol Engineer Intern",
    dateRange: "Starting this May!",
    highlights: ["Accepted as a 2025 intern, excited for what's to come :)"],
    skillsUsed: [
      ["COBOL", "bg-gray-600"],
    ],
  },
]

export default experiences;