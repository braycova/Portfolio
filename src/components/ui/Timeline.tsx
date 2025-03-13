"use client"
import {Timeline as Tl, Avatar, Badge, Group} from '@mantine/core';
import { Experience } from '@/data/experience';

export default function Timeline({exp}: { exp: Experience[] }) {
  return (
    <Tl color="white" radius="md" active={exp.length} lineWidth={1} bulletSize={53} className="p-4">
      {exp.map((e, index) => (
        <Tl.Item key={index} bullet={<Avatar size={60} radius="md" src={e.logoUrl} />}>
          <h2 className="font-bold text-xl mb-1">{e.title} {e.subtitle && (<span className="font-light">&#x2022; {e.subtitle}</span>)}</h2>
          <span className="text-sm p-1 px-3 my-2 border-1 rounded-lg border-gray-700 dark:bg-gray-800">{e.date}</span>
          <ul className="text-sm my-2 text-gray-300">
            {e.highlights.map((highlight, index) => (
              <li key={index} className="mr-2">&#x2022; {highlight}</li>
            ))}
          </ul>
          {e.skills && (
            <Group gap="xs">
              {e.skills.map((skill, index) => (
                <Badge key={index} color={skill[1]}>{skill[0]}</Badge>
              ))}
            </Group>
          )}
        </Tl.Item>
      ))}
    </Tl>
  )
}