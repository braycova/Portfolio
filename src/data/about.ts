import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface Contact {
  name: string;
  link: string;
  tooltip: string;
  icon: IconDefinition;
}

export const location: string = "Ottumwa, IA, USA";
export const description: string =
  "An up-and-coming software developer based in the great corn state of Iowa 🌽\n" +
  "Currently open for work :)";

export const contacts: Contact[] = [
  {
    name: "Email",
    link: "mailto:brayan.cova@outlook.com",
    tooltip: "Shoot me an email",
    icon: faEnvelope
  },
  {
    name: "GitHub",
    link: "https://github.com/braycova",
    tooltip: "GitHub",
    icon: faGithub
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/brayan-covarrubias-segura/",
    tooltip: "LinkedIn",
    icon: faLinkedin
  },
]