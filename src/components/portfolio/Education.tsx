"use client"
import SectionTitle from "@/components/portfolio/SectionTitle";
import { Timeline, Avatar } from '@mantine/core';
import educations from "@/data/education";

export default function Education() {
  const EduTimeline = () => (
    <Timeline color="indigo" radius="md" active={educations.length} lineWidth={1} bulletSize={55} className="p-4 mb-4">
      {educations.map((edu, index) => (
        <Timeline.Item key={index} bullet={ <Avatar size={55} radius="md" src={edu.logo} /> }>
          <h2 className="font-bold text-xl mb-1">{edu.schoolName}</h2>
          <span className="border-1 border-gray-700 bg-gray-800 rounded-lg my-2 p-1 px-3 text-sm">{edu.graduationDate}</span>
          <ul className="text-sm my-2 opacity-85">
            {edu.highlights.map((highlight, index) => (
              <li key={index}>&#x2022; {highlight}</li>
            ))}
          </ul>
        </Timeline.Item>
      ))}
    </Timeline>
  )

  return (
    <section id="education">
      <SectionTitle title="Education" />
      <EduTimeline />
    </section>
  )
}