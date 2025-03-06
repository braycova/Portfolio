import SectionTitle from "@/components/portfolio/SectionTitle";
import { projects, Project } from "@/data/projects";
import Image from "next/image";
import {faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Projects() {
  const ProjectItem = ({project}: {project: Project}) => (
    <a href={project.projectUrl} target="_blank" className="flex p-3 dark:bg-gray-800 border-1 border-gray-700 rounded-lg hover:bg-indigo-400 dark:hover:bg-indigo-900 transition">
      <Image src={project.imageUrl} alt={project.name} width={100} height={50} className="mr-3 w-25 h-25 object-cover rounded-lg" />
      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-xl">{project.name} <FontAwesomeIcon icon={faUpRightFromSquare} className="fa-fw font-light text-lg hover:text-xl"/></h2>
        <p className="opacity-85 text-sm">{project.description}</p>
        <ul className="flex gap-2 my-2">
          {project.skillsUsed.map((skill, index) => (
            <li key={index} className={`border-1 border-gray-700 rounded-lg px-2 text-sm flex justify-center items-center font-bold text-gray-200 ${skill[1]}`}>{skill[0]}</li>
          ))}
        </ul>
      </div>
    </a>
  )

  return (
    <section id="projects">
      <SectionTitle title="Featured Projects"/>
      <div className="flex flex-col gap-3 my-3">
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project}/>
        ))}
      </div>
    </section>
  )
}