"use client";

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
    className="section relative overflow-hidden grid grid-cols-[1fr]"
    id={Hero.sectionId}>
    <div className="[grid-row:_1_/_2_] [grid-column:_1_/_2_] w-full h-full relative overflow-hidden">
    </div>
    <div className="flex flex-col backdrop-blur-0 w-full h-full [grid-row:_1_/_2_] [grid-column:_1_/_2_] items-center justify-center">
      <div>
        <TitleBadge>{arabName}</TitleBadge>
        <Title>
          {title} <PrettyName>{name}</PrettyName>
        </Title>
        <Description>
          {description}
        </Description>
      </div>
    </div>
  </section>;
}

Hero.sectionId = "hero";
