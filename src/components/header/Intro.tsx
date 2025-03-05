import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Intro() {
  return (
    <div className="">
      <div className="flex lg:justify-center mb-3">
        <a href="#"><Image src={"/placeholder.jpg"} alt={"My profile image"} width={200} height={200}
                           className="rounded-4xl border-2 border-gray-800 hover:border-indigo-700 transition"/></a>
      </div>
      <h1 className="font-bold text-4xl">Brayan Covarrubias</h1>
      <p className="text-2xl">Software Developer</p>
      <p className="mt-1 text-lg"><FontAwesomeIcon icon={faLocationDot} className="fa-fw"/> Iowa, USA</p>
      <p className="mt-2 opacity-80">An up-and-coming software developer, on route to Des Moines as an intern at
        Principal Financial this May.</p>
    </div>
  )
}