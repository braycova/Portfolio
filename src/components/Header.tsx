import Image from "next/image";
import { location, description, contacts } from "@/data/header";
import { Tooltip } from '@mantine/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="p-7 border-b-2 border-gray-700">
      <Image src="/Profile.jpg" alt="Profile image" width={200} height={200} className="rounded-4xl mb-1 border-2 border-gray-800 hover:border-indigo-700 transition"/>
      <h1 className="font-bold text-4xl">Brayan Covarrubias</h1>
      <p className="text-2xl">Software Developer</p>
      <p className="mt-1 text-lg"><FontAwesomeIcon icon={faLocationDot} className="fa-fw"/> {location}</p>
      <p className="mt-2 dark:text-gray-300">{description}</p>

      <nav className="mt-2 text-3xl" aria-label="Email and Social Links">
        {contacts.map((contact) => (
          <Tooltip key={contact.name} label={contact.label} arrowSize={4} withArrow color="indigo">
            <a href={contact.link} target="_blank" className="hover:text-blue-500 transition" aria-label={`${contact.name} (opens as new tab)`} >
              <FontAwesomeIcon icon={contact.icon} className="fa-fw"/>
            </a>
          </Tooltip>
        ))}
      </nav>
    </header>
  )
}