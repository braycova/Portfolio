import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Projects from "@/components/portfolio/Projects";

export default function Portfolio() {
  return (
    <main className="py-7 px-3">
      <Skills />
      <Experience />
      <Education />
      <Projects />
    </main>
  )
}