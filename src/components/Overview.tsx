import Title from "./ui/Title";
import TitleBadge from "./ui/TitleBadge";

export default function Overview() {
  return <section
    className="section"
    id={Overview.sectionId}>
    <TitleBadge>Introduction</TitleBadge>
    <Title>Overview</Title>
  </section>;
}

Overview.sectionId = "overview";
Overview.sectionName = "Overview";
