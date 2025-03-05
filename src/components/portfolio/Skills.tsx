import skills from "@/data/skills";
import Image from "next/image";

export default function Skills() {
  const Item = ({imageUrl, name, description}: {imageUrl: string, name: string, description: string}) => {
    return (
      <div className="flex px-2 items-center bg-gray-800 border-1 border-gray-700 rounded-lg ">
        <Image src={imageUrl} alt={name} width={50} height={50} className="rounded-lg object-contain h-15 w-15" />
        <div className="p-2 justify-center">
          <p className="font-bold">{name}</p>
          <p className="opacity-80 text-xs">{description}</p>
        </div>
      </div>
    )
  }

  return (
    <section id="about">
      <div className="flex items-center gap-3">
        <h1 className="font-bold text-3xl">Skills</h1>
        <span className="border-b-2 border-amber-50 flex-grow"></span>
      </div>
      <p className="my-2">I&#39;ve worked with a variety of languages and frameworks. These are some of them I focus on.<br/> You can view the rest of my skills on my resume :)</p>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <Item key={index} imageUrl={skill.imageUrl} name={skill.name} description={skill.description} />
        ))}
      </div>
    </section>
  )
}