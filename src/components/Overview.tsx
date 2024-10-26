import { getLang } from "@/langs";
import Title from "./ui/Title";
import TitleBadge from "./ui/TitleBadge";

export default function Overview() {
  const title = getLang("OVERVIEW_TITLE")();
  const badge = getLang("OVERVIEW_BADGE")();

  return <section
    className="section"
    id={Overview.sectionId}>
    <TitleBadge>{badge}</TitleBadge>
    <Title>{title}</Title>
  </section>;
}

Overview.sectionId = "overview";
