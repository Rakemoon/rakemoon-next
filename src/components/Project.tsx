import { getLang } from "@/langs";
import Title from "./ui/Title";
import TitleBadge from "./ui/TitleBadge";

export default function Project() {
  const title = getLang("PROJECT_TITLE")();
  const badge = getLang("PROJECT_BADGE")();

  return <section
    className="section"
    id={Project.sectionId}>
    <TitleBadge>{badge}</TitleBadge>
    <Title>{title}</Title>
  </section>;
}

Project.sectionId = "project";
