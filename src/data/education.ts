interface Education {
  logo: string;
  schoolName: string;
  graduationDate: string;
  highlights: string[];
}

const educations: Education[] = [
  {
    logo: 'education/IndianHills.jpg',
    schoolName: "Indian Hills Community College",
    graduationDate: "February 2025",
    highlights: ["Graduated with an emphasis in Web, Mobile, and Mainframe Development", "Taught on-demand languages, best practices, techniques, and project collaboration"],
  },
]

export default educations;