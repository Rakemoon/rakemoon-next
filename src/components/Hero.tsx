import { getLang } from "@/langs";
import Description from "./ui/Description";
import PrettyName from "./ui/PrettyName";
import Title from "./ui/Title";
import TitleBadge from "./ui/TitleBadge";

export default function Hero() {
  const title = getLang("HERO_TITLE")();
  const name = getLang("USER_NAME")();
  const description = getLang("HERO_DESCRIPTION")();
  const arabName = getLang("USER_ARAB_NAME")();

  return <section
    className="section flex flex-col items-center justify-center"
    id={Hero.sectionId}>
    <div className="flex flex-col">
      <TitleBadge>{arabName}</TitleBadge>
      <Title>
        {title} <PrettyName>{name}</PrettyName>
      </Title>
      <Description>
        {description}
      </Description>
    </div>
  </section>;
}

Hero.sectionId = "hero";
