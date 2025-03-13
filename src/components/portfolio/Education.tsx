import SectionTitle from "@/components/ui/SectionTitle";
import Timeline from "@/components/ui/Timeline";
import { education } from "@/data/experience";

export default function Education() {
  return (
    <section id="education" className="mb-9 scroll-m-20" aria-label="College Experience">
      <SectionTitle title="Education" />
      <Timeline exp={education} />
    </section>
  )
}