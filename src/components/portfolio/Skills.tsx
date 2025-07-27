import skills from "@/data/skills";
import Image from "next/image";

export default function Skills() {
  const Item = ({imageUrl, name}: {imageUrl: string, name: string}) => {
    return (
      <div className="flex flex-col items-center py-4 px-2 border-1 border-gray-700 rounded-lg hover:scale-110 bg-gray-800 hover:bg-gray-700 transition">
        <Image src={imageUrl} alt={name} width={25} height={25} className="rounded-lg object-contain h-8 w-8" />
        <span className="text-gray-300 text-sm mt-2">{name}</span>
      </div>
    )
  }

  return (
    <section id="skills" className="mb-9 scroll-m-20 flex justify-center" aria-label="Current skills">
      <div className="grid grid-cols-4 gap-4 md:w-3/4 w-full">
        {skills.map((skill, index) => (
          <Item key={index} imageUrl={skill.imageUrl} name={skill.name} />
        ))}
      </div>
    </section>
  )
}