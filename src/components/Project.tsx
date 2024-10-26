import Title from "./ui/Title";
import TitleBadge from "./ui/TitleBadge";

export default function Project() {
  return <section
    className="section"
    id={Project.sectionId}>
    <TitleBadge>My Work</TitleBadge>
    <Title>Projects</Title>
  </section>;
}

Project.sectionId = "project";
Project.sectionName = "Project";
