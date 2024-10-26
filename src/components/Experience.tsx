import { getLang } from "@/langs";
import Title from "./ui/Title";
import TitleBadge from "./ui/TitleBadge";

export default function Experience() {
  const title = getLang("EXPERIENCE_TITLE")();
  const badge = getLang("EXPERIENCE_BADGE")();

  return <section
    className="section"
    id={Experience.sectionId}>
    <TitleBadge>{badge}</TitleBadge>
    <Title>{title}</Title>
  </section>;
}

Experience.sectionId = "experience";
