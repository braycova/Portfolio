import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const links = ["Skills", "Experience", "Education", "Projects"]

  return (
    <div className="w-1/2 lg:h-screen lg:sticky lg:top-0">
      <header className="mt-7 p-7 border-2 rounded-lg">
        <div>
          <h1 className="font-bold text-4xl"><a href="#">Brayan Covarrubias</a></h1>
          <p className="text-2xl">Software Developer</p>
          <p className="mt-1 text-lg"><FontAwesomeIcon icon={faLocationDot} className="fa-fw"/> Iowa, USA</p>
          <p className="mt-2 opacity-80">An up-and-coming software developer, on route to Des Moines as an intern at
            Principal Financial this May.</p>
        </div>
        <nav className="grid grid-cols-2 gap-2">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-lg border-gray-900">
              {link}
            </a>
          ))}
        </nav>
        <nav className="pt-2 text-3xl">
          <a href="mailto:brayan.cova@outlook.com" target="_blank" title="Shoot me an email!"><FontAwesomeIcon
            icon={faEnvelope} className="fa-fw"/></a>
          <a href="https://github.com/justnoted" target="_blank" title="GitHub"><FontAwesomeIcon icon={faGithub}
                                                                                                 className="fa-fw"/></a>
          <a href="https://www.linkedin.com/in/brayan-covarrubias-segura/" target="_blank"
             title="LinkedIn"><FontAwesomeIcon icon={faLinkedin} className="fa-fw"/></a>
        </nav>
      </header>
    </div>
  )
}