import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const sections = ["Skills", "Experience", "Education", "Projects"]

  return (
    <nav className="flex justify-between items-center py-4 px-2 md:px-0 sticky top-0 bg-slate-300 dark:bg-gray-900 relative z-10" aria-label="In-page navigation links">
      <a href="#"><Image src='/favicon.ico' alt='Portfolio Icon' width={50} height={50} className="rounded-lg bg-purple-400 transition ease-in-out hover:bg-white hover:scale-110" /></a>
      <div>
        {sections.map((section) => (
          <a key={section} href={`#${section.toLowerCase()}`} className="md:inline hidden p-2 hover:text-indigo-400 transition">
            {section}
          </a>
        ))}
        <button className="items-center p-2">
          {/* TODO: Add theme toggle */}
          <FontAwesomeIcon icon={faMoon}/>
        </button>
      </div>
    </nav>
  )
}