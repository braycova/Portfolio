interface Skill {
  imageUrl: string;
  name: string;
  description: string;
}

const skills: Skill[] = [
  {
    imageUrl: "/skills/Python.svg",
    name: "Python",
    description: "Many indents",
  },
  {
    imageUrl: "/skills/TypeScript.svg",
    name: "TypeScript",
    description: "Like JavaScript, but better",
  },
  {
    imageUrl: "/skills/Java.svg",
    name: "Java",
    description: "Programming Language",
  },
  {
    imageUrl: "/skills/Cobol.png",
    name: "Cobol",
    description: "An older programming language",
  },
  {
    imageUrl: "/skills/CSharp.svg",
    name: "C#",
    description: "Used with .NET",
  },
  {
    imageUrl: "/skills/MongoDB.svg",
    name: "MongoDB",
    description: "Non-SQL Database",
  },
  {
    imageUrl: "/skills/NextJS.svg",
    name: "Next.js",
    description: "JavaScript Framework",
  },
  {
    imageUrl: "/skills/React.svg",
    name: "React",
    description: "JavaScript Framework",
  },
]

export default skills;