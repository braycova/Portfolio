import Intro from "@/components/header/Intro";
import Navigation from "@/components/header/Navigation";
import Contact from "@/components/header/Contact";

export default function Header() {
  return (
    <div className="lg:w-1/2 lg:h-screen lg:sticky lg:top-0">
      <header className="mt-7 p-7 lg:border-2 lg:rounded-lg border-b-2 border-gray-700">
        <Intro />
        <Navigation />
        <Contact />
      </header>
    </div>
  )
}