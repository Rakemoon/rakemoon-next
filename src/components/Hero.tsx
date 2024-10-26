import Title from "./ui/Title";
import TitleBadge from "./ui/TitleBadge";

export default function Hero() {
  return <section
    className="section"
    id={Hero.sectionName}>
    <TitleBadge>Fullstuck Developer</TitleBadge>
    <Title>Rakemoon</Title>
  </section>;
}

Hero.sectionName = "hero";
