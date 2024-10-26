import Title from "./ui/Title";
import TitleBadge from "./ui/TitleBadge";

export default function Experience() {
  return <section
    className="section"
    id={Experience.sectionId}>
    <TitleBadge>What i have done so far</TitleBadge>
    <Title>Experiences</Title>
  </section>;
}

Experience.sectionId = "experience";
Experience.sectionName = "Experience";
