import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Aside() {
  const links = ["About", "Skills", "Experience", "Education", "Projects"]

  return (
    <aside>
      <header>
        <h1>Brayan Covarrubias</h1>
        <p>Software Developer</p>
        <p><FontAwesomeIcon icon={faLocationDot} className="fa-fw"/> Iowa, USA</p>
      </header>
      <nav>
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}>&#9656; {link}</a>
        ))}
      </nav>
      <nav className="pt-2 text-3xl">
        <a href="mailto:brayan.cova@outlook.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} className="fa-fw"/></a>
        <a href="https://github.com/justnoted" target="_blank"><FontAwesomeIcon icon={faGithub} className="fa-fw"/></a>
        <a href="https://www.linkedin.com/in/brayan-covarrubias-segura/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="fa-fw"/></a>
      </nav>
    </aside>
  )
}