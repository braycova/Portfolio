import SectionTitle from "@/components/ui/SectionTitle";
import { Timeline, Avatar, Badge, Group, TimelineItem } from '@mantine/core';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="mb-9 scroll-m-20" aria-label="Work Experience">
      <SectionTitle title="Experience" />

      <Timeline color="white" radius="md" active={experiences.length} lineWidth={1} bulletSize={55} className="p-4">

        {experiences.map((e, index) => (
          <TimelineItem key={index} bullet={<Avatar size={60} radius="md" src={e.logoUrl} />}>
            <p className="font-bold text-xl text-gray-100">{e.title}</p>
            <p className="font-sm mb-1 text-slate-300">{e.companyName} • {e.location}</p>
            <span className="text-sm p-1 px-3 my-2 border-2 rounded-lg text-slate-300 border-gray-600 bg-gray-800">{e.duration}</span>

            <ul className="text-sm ml-3 my-2 list-disc">
              {e.responsibilities.map((resp, index) => (
                <li key={index} className="mr-2 mb-1 text-gray-400">{resp}</li>
              ))}
            </ul>

            <Group gap="xs">
              {e.skills.map((skill, index) => (
                <Badge key={index} color={e.color}>{skill}</Badge>
              ))}
            </Group>

          </TimelineItem>
        ))}

      </Timeline>
    </section>
  )
}