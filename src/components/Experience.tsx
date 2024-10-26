import Title from "./ui/Title";
import TitleBadge from "./ui/TitleBadge";

export default function Experience() {
  return <section
    className="section"
    id={Experience.sectionName}>
    <TitleBadge>What i have done so far</TitleBadge>
    <Title>Experiences</Title>
  </section>;
}

Experience.sectionName = "experience";
