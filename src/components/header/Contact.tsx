import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <nav className="pt-2 text-3xl">
      <a href="mailto:brayan.cova@outlook.com" target="_blank" title="Shoot me an email!" className="hover:text-indigo-500 transition"><FontAwesomeIcon icon={faEnvelope} className="fa-fw"/></a>
      <a href="https://github.com/justnoted" target="_blank" title="GitHub" className="hover:text-gray-500 transition"><FontAwesomeIcon icon={faGithub} className="fa-fw"/></a>
      <a href="https://www.linkedin.com/in/brayan-covarrubias-segura/" target="_blank" title="LinkedIn" className="hover:text-blue-400 transition"><FontAwesomeIcon icon={faLinkedin} className="fa-fw"/></a>
    </nav>
  )
}