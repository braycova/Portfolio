import SectionTitle from "@/components/ui/SectionTitle";
import { Timeline, Avatar, TimelineItem } from '@mantine/core';
import { education } from '@/data/experience';

export default function Education() {
  return (
    <section id="education" className="mb-9 scroll-m-20" aria-label="College Experience">
      <SectionTitle title="Education" />

      <Timeline color="white" radius="md" active={education.length} lineWidth={1} bulletSize={55} className="p-4">

        {education.map((e, index) => (
          <TimelineItem key={index} bullet={<Avatar size={60} radius="md" src={e.logoUrl} />}>
            <p className="font-bold text-xl text-gray-100">{e.institutionName}</p>
            <p className="font-sm mb-1 text-slate-300">{e.degree} • {e.location}</p>
            <span className="text-sm p-1 px-3 my-2 border-2 rounded-lg text-slate-300 border-gray-600 bg-gray-800">{e.graduationDate}</span>
            <p className="text-sm my-2 mb-1 text-gray-400">{e.description}</p>
          </TimelineItem>
        ))}

      </Timeline>
    </section>
  )
}