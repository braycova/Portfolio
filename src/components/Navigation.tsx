import Image from "next/image";

export default function Navigation() {
  const sections = ["experience", "education", "projects"]

  return (
    <nav className="flex justify-between items-center py-4 px-2 md:px-0 sticky top-0 bg-gray-900 z-10" aria-label="In-page navigation links">
      <a href="#"><Image src='/favicon.ico' alt='Portfolio Icon' width={50} height={50} className="rounded-lg bg-indigo-400 transition ease-in-out hover:bg-white hover:scale-110" /></a>
      <div>
        {sections.map((section) => (
          <a key={section} href={`#${section.toLowerCase()}`} className="md:inline hidden p-2 hover:text-indigo-400 transition">
            {section}
          </a>
        ))}
      </div>
    </nav>
  )
}