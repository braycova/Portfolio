interface Skill {
  name: string;
  color: string;
}

export interface Project {
  imageUrl: string;
  projectUrl: string;
  webUrl?: string;
  name: string;
  description: string;
  skills: Skill[];
}

export const projects: Project[] = [
  {
    imageUrl: '/projects/Website.png',
    projectUrl: 'https://github.com/braycova/Portfolio',
    webUrl: 'https://www.brayancovarrubias.com',
    name: "Personal Website",
    description: "Built with Next.js, styled with Tailwind CSS and with components from Mantine. Deployed with Vercel.",
    skills: [
      { name: "Next.js", color: "black" },
      { name: "Tailwind CSS", color: "blue" },
      { name: "Vercel", color: "black" }
    ]
  },
  {
    imageUrl: '/projects/Lucia.png',
    projectUrl: 'https://github.com/braycova/LuciaDiscord',
    name: "LuciaDiscord",
    description: "A discord bot experiment built with a interactive game economy and fun utility commands.",
    skills: [
      { name: "Python", color: "blue" },
      { name: "Discord API", color: "indigo" },
    ],
  },
]