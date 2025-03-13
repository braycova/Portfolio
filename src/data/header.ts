import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface Contact {
  name: string;
  label: string;
  link: string;
  icon: IconDefinition;
}

export const location: string = "Iowa, USA";
export const description: string = "An up-and-coming software developer from southeastern Iowa :)";

export const contacts: Contact[] = [
  {
    name: "Email",
    label: "Shoot me an email!",
    link: "mailto:brayan.cova@outlook.com",
    icon: faEnvelope
  },
  {
    name: "GitHub",
    label: "GitHub",
    link: "https://github.com/braycova",
    icon: faGithub
  },
  {
    name: "LinkedIn",
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/brayan-covarrubias-segura/",
    icon: faLinkedin
  },
]