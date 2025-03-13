import SectionTitle from "@/components/ui/SectionTitle";
import Timeline from "@/components/ui/Timeline";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mb-9 scroll-m-20" aria-label="Work Experience">
      <SectionTitle title="Experience" />
      <Timeline exp={experiences} />
    </section>
  )
}