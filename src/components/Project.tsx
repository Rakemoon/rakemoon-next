import Title from "./ui/Title";
import TitleBadge from "./ui/TitleBadge";

export default function Project() {
  return <section
    className="section"
    id={Project.sectionName}>
    <TitleBadge>My Work</TitleBadge>
    <Title>Projects</Title>
  </section>;
}

Project.sectionName = "project";
