import Title from "./ui/Title";
import TitleBadge from "./ui/TitleBadge";

export default function Stack() {
  return <section
    className="section"
    id={Stack.sectionName}>
    <TitleBadge>What i have learned so far</TitleBadge>
    <Title>Tech Stack</Title>
  </section>;
}

Stack.sectionName = "stack";
