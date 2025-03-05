export default function Navigation() {
  const sections = ["Skills", "Experience", "Education", "Projects"]

  return (
    <nav className="lg:grid grid-cols-2 gap-2 my-5 hidden">
      {sections.map((section) => (
        <a key={section} href={`#${section.toLowerCase()}`} className="font-bold text-center p-2 border-2 border-gray-400 rounded-lg hover:bg-indigo-800 transition">
          {section}
        </a>
      ))}
    </nav>
  )
}