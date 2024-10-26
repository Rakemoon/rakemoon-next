import { getLang } from "@/langs";
import Title from "./ui/Title";
import TitleBadge from "./ui/TitleBadge";

export default function Stack() {
  const title = getLang("STACK_TITLE")();
  const badge = getLang("STACK_BADGE")();

  return <section
    className="section"
    id={Stack.sectionId}>
    <TitleBadge>{badge}</TitleBadge>
    <Title>{title}</Title>
  </section>;
}

Stack.sectionId = "stack";
