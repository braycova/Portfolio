import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const links = ["Skills", "Experience", "Education", "Projects"]

  return (
    <aside className="w-1/3 h-3/4 flex flex-col justify-between">
      <header>
        <h1 className="font-bold text-4xl"><a href="#">Brayan Covarrubias</a></h1>
        <p className="text-2xl">Software Developer</p>
        <p className="text-lg"><FontAwesomeIcon icon={faLocationDot} className="fa-fw"/> Iowa, USA</p>
        <p className="mt-2">An up-and-coming software developer, on route to Des Moines to intern at Principal Financial.</p>
      </header>
      <nav className="flex flex-col">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="text-lg">&#9656; {link}</a>
        ))}
      </nav>
      <nav className="pt-2 text-3xl">
        <a href="mailto:brayan.cova@outlook.com" target="_blank" title="Shoot me an email!"><FontAwesomeIcon icon={faEnvelope} className="fa-fw"/></a>
        <a href="https://github.com/justnoted" target="_blank" title="GitHub"><FontAwesomeIcon icon={faGithub} className="fa-fw"/></a>
        <a href="https://www.linkedin.com/in/brayan-covarrubias-segura/" target="_blank" title="LinkedIn"><FontAwesomeIcon icon={faLinkedin} className="fa-fw"/></a>
      </nav>
    </aside>
  )
}