"use client"
import SectionTitle from "@/components/ui/SectionTitle";
import {Card, Group, Badge, Button, Text, Image} from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { projects, Project } from "@/data/projects";

export default function Projects() {

  const Item = ({p}: {p: Project}) => (
    <Card shadow="sm" padding="lg" radius="lg" withBorder>
      <Card.Section>
        <Image src={p.imageUrl} height={50} alt={p.name}/>
      </Card.Section>

      <Group mt="md" mb="xs">
        <Text fw={700}>{p.name}</Text>
      </Group>

      <Group gap="xs" mb="md">
        {p.skills.map((skill, index) => (
          <Badge key={index} color={skill.color}>{skill.name}</Badge>
        ))}
      </Group>

      <Text size="sm" c="dimmed">{p.description}</Text>

      <Group mt="md" mb="xs">
        <Button color="black" radius="md" component="a" href={p.projectUrl} target="_blank"
                leftSection={<FontAwesomeIcon icon={faGithub} className="fw-fa"/>}>View GitHub</Button>
        {p.webUrl && (
          <Button variant="gradient" gradient={{ from: 'indigo', to: 'violet', deg: 90 }} radius="md" component="a" href={p.webUrl} target="_blank"
                  leftSection={<FontAwesomeIcon icon={faUpRightFromSquare} className="fw-fa"/>}>Visit Website</Button>
        )}
      </Group>
    </Card>
  )

  return (
    <section id="projects" className="mb-9 scroll-m-20" aria-label="Recent Projects">
      <SectionTitle title="Recent Projects"/>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 my-3">
        {projects.map((project, index) => (
          <Item key={index} p={project}/>
        ))}
      </div>
    </section>
  )
}