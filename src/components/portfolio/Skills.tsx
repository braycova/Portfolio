import skills from "@/data/skills";
import Image from "next/image";

export default function Skills() {
  const Item = ({imageUrl, name, description}: {imageUrl: string, name: string, description: string}) => {
    return (
      <div className="bg-gray-800 border-1 border-gray-700 rounded-lg flex p-3 items-center">
        <Image src={imageUrl} alt={name} width={50} height={50} className="rounded-lg object-contain h-15 w-15" />
        <div className="flex flex-col p-2 justify-center">
          <span className="font-bold text-lg">{name}</span>
          <span className="opacity-80 text-sm">{description}</span>
        </div>
      </div>
    )
  }

  return (
    <section id="about">
      <h1 className="font-bold text-2xl">Skills</h1>
      <p>There&#39;s a couple of languages I&#39;ve worked with. <br />These are some of my main ones:</p>
      <div className="grid grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <Item key={index} imageUrl={skill.imageUrl} name={skill.name} description={skill.description} />
        ))}
      </div>
    </section>
  )
}