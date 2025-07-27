import Image from "next/image";
import { location, description, contacts } from "@/data/about";
import { Tooltip } from '@mantine/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="flex sm:flex-row flex-col p-7 border-b-2 border-gray-700">
      <Image src="/Profile.jpg" alt="profile image" width={200} height={200} className="rounded-full w-42 h-42 border-2 border-gray-800 hover:border-indigo-700 transition"/>

      <div className="flex flex-col justify-center ml-3">
        <h1 className="font-bold text-2xl">Brayan Covarrubias</h1>
        <span className="text-lg">Software Developer </span>

        <span className="mt-1 text-sm text-gray-400"><FontAwesomeIcon icon={faLocationDot} className="fa-fw"/> {location}</span>
        <p className="mt-2 text-sm text-gray-300">{description}</p>

        <nav className="mt-2 text-3xl" aria-label="Email and Social Links">
          {contacts.map((contact) => (
            <Tooltip key={contact.name} label={contact.tooltip} color="indigo">
              <a href={contact.link} target="_blank" className="hover:text-blue-500 transition" aria-label={`${contact.name} (opens as new tab)`} >
                <FontAwesomeIcon icon={contact.icon} className="fa-fw"/>
              </a>
            </Tooltip>
          ))}
        </nav>
      </div>

    </header>
  )
}