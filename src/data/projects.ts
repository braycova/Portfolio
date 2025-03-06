export interface Project {
  imageUrl: string;
  projectUrl: string;
  name: string;
  description: string;
  skillsUsed: string[][];
}

export const projects: Project[] = [
  {
    imageUrl: '/projects/Next.png',
    projectUrl: 'https://github.com/justnoted/Portfolio',
    name: "Personal Website",
    description: "The 2nd rendition of my personal website. Built with Next.js, styled with Tailwind CSS. Timeline feature by Mantine. Deployed with Vercel.",
    skillsUsed: [
      ["Next.js", "bg-slate-600"],
      ["Tailwind CSS", "bg-blue-600"],
      ["Vercel", "bg-slate-600"],
    ],
  },
  {
    imageUrl: '/projects/Lucia.jpg',
    projectUrl: 'https://github.com/justnoted/LuciaDiscord',
    name: "LuciaDiscord",
    description: "A discord bot experiment built with a fun interactive economy and API calls",
    skillsUsed: [
      ["Python", "bg-blue-600"],
      ["Discord API", "bg-indigo-600"],
    ],
  },
]