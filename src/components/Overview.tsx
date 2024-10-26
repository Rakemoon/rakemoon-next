import Title from "./ui/Title";
import TitleBadge from "./ui/TitleBadge";

export default function Overview() {
  return <section
    className="section"
    id={Overview.sectionName}>
    <TitleBadge>Introduction</TitleBadge>
    <Title>Overview</Title>
  </section>;
}

Overview.sectionName = "overview";
