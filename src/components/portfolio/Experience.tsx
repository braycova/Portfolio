"use client"
import SectionTitle from "@/components/portfolio/SectionTitle";
import experiences from "@/data/experience";
import { Timeline, Avatar } from '@mantine/core';

export default function Experience() {
  const ExpTimeline = () => (
    <Timeline color="indigo" radius="md" active={experiences.length} lineWidth={1} bulletSize={55} className="p-4 mb-4">
      {experiences.map((exp, index) => (
        <Timeline.Item key={index} bullet={ <Avatar size={55} radius="md" src={exp.logo} /> }>
          <h2 className="font-bold text-xl mb-1">{exp.companyName} <span className="font-light">&#x2022; {exp.jobTitle}</span></h2>
          <span className="border-1 border-gray-700 bg-gray-800 rounded-lg my-2 p-1 px-3 text-sm">{exp.dateRange}</span>
          <ul className="text-sm my-2 opacity-85">
            {exp.highlights.map((highlight, index) => (
              <li key={index}>&#x2022; {highlight}</li>
            ))}
          </ul>
          <ul className="flex gap-2">
            {exp.skillsUsed.map((skill, index) => (
              <li key={index} className={`border-1 border-gray-700 rounded-lg px-2 text-sm flex justify-center items-center font-bold ${skill[1]}`}>{skill[0]}</li>
            ))}
          </ul>
        </Timeline.Item>
      ))}
    </Timeline>
  )

  return (
    <section id="experience">
      <SectionTitle title="Experience" />
      <ExpTimeline />
    </section>
  )
}