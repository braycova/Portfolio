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
  description: string;
}

export const experiences: Experience[] = [
  {
    logoUrl: 'logos/Principal.jpeg',
    companyName: "Principal Financial Group",
    title: "Software Engineer Intern",
    location: "Des Moines, IA",
    duration: "May 2025 - August 2025",
    responsibilities: ["Supported a critical legacy system within an agile team environment by resolving tickets and observing modernization efforts",
      "Contributed to key company initiatives by conducting mainframe job research and implementation",
      "Collaborated with a team of interns to design and build an application prototype during an annual CodeJam event, leveraging AI and local codebase development"],
    skills: ["JCL", "COBOL", "Mainframe", "Agile Development"],
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
    description: "Graduated with a triple emphasis in web, mobile, and mainframe development, applying best practices, unit testing, and collaborative skills in final projects and competitive college events.",
  },
]