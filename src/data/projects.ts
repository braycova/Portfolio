export interface Project {
  imageUrl: string;
  projectUrl: string;
  webUrl?: string;
  name: string;
  description: string;
  skills: string[][];
}

export const projects: Project[] = [
  {
    imageUrl: '/projects/Website.png',
    projectUrl: 'https://github.com/braycova/Portfolio',
    webUrl: 'https://www.brayancovarrubias.com',
    name: "Personal Website",
    description: "My 2nd (official) rendition. Built with Next.js, styled with Tailwind CSS and Mantine, deployed with Vercel.",
    skills: [
      ["Next.js", "black"],
      ["Tailwind CSS", "blue"],
      ["Vercel", "black"],
    ],
  },
  {
    imageUrl: '/projects/Lucia.png',
    projectUrl: 'https://github.com/braycova/LuciaDiscord',
    name: "LuciaDiscord",
    description: "A discord bot experiment built with a interactive game economy and fun utility commands.",
    skills: [
      ["Python", "blue"],
      ["Discord API", "indigo"],
    ],
  },
]