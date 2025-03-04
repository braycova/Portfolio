interface Skill {
  imageUrl: string;
  name: string;
  description: string;
}

const skills: Skill[] = [   // TODO: Replace with proper icons/descriptions
  {
    imageUrl: "/placeholder.jpg",
    name: "Python",
    description: "Known for many indents",
  },
  {
    imageUrl: "/placeholder.jpg",
    name: "TypeScript",
    description: "Like JavaScript, but better",
  },
  {
    imageUrl: "/placeholder.jpg",
    name: "Java",
    description: "Programming Language",
  },
  {
    imageUrl: "/placeholder.jpg",
    name: "Cobol",
    description: "A very old programming language",
  },
  {
    imageUrl: "/placeholder.jpg",
    name: "Next.js",
    description: "JavaScript Framework",
  },
  {
    imageUrl: "/placeholder.jpg",
    name: "React",
    description: "JavaScript Framework",
  },
  {
    imageUrl: "/placeholder.jpg",
    name: "MongoDB",
    description: "Non-SQL Database",
  },
  {
    imageUrl: "/placeholder.jpg",
    name: "C#",
    description: "Programming Language",
  },
]

export default skills;