import skills from "@/data/skills";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Skills() {
  const Item = ({imageUrl, name}: {imageUrl: string, name: string}) => {
    return (
      <div className="flex flex-col items-center py-4 px-2 border-1 border-gray-700 rounded-lg hover:scale-110 bg-gray-200 hover:bg-white dark:bg-gray-800 dark:hover:bg-gray-700 transition">
        <Image src={imageUrl} alt={name} width={25} height={25} className="rounded-lg object-contain h-10 w-10" />
        <span className="dark:text-gray-300 text-sm mt-2">{name}</span>
      </div>
    )
  }

  return (
    <section id="skills" className="mb-9 scroll-m-20" aria-label="Current skills">
      <SectionTitle title="Skills" />
      <p className="my-2">I&#39;ve worked with a variety of languages and frameworks. These are some of my current technologies.</p>
      <div className="grid grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <Item key={index} imageUrl={skill.imageUrl} name={skill.name} />
        ))}
      </div>
    </section>
  )
}