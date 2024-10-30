import { getLang } from "@/langs";
import Title from "./ui/Title";
import TitleBadge from "./ui/TitleBadge";
import ProjectCard from "./ui/ProjectCard";

export default function Project() {
  const title = getLang("PROJECT_TITLE")();
  const badge = getLang("PROJECT_BADGE")();
  const projects = getLang("PROJECT_ITEMS")();

  return <section
    className="section flex flex-col gap-2.5"
    id={Project.sectionId}>
    <TitleBadge>{badge}</TitleBadge>
    <Title>{title}</Title>
    <ul className="grid mt-2.5 grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3 gap-2.5">
      {projects.map(x => <li key={x.name}>
        <ProjectCard {...x} />
      </li>)}
    </ul>
  </section>;
}

Project.sectionId = "project";
