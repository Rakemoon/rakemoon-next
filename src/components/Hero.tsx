import PrettyName from "./ui/PrettyName";
import Title from "./ui/Title";

export default function Hero() {
  return <section
    className="section flex flex-col items-center justify-center"
    id={Hero.sectionId}>
    <Title>
      Hi! I{"'"}m <PrettyName>Adzikri Fauzi Shiddiq</PrettyName>
    </Title>
  </section>;
}

Hero.sectionId = "hero";
