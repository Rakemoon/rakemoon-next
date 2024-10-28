"use client"

import { getLang } from "@/langs";
import Title from "./ui/Title";
import TitleBadge from "./ui/TitleBadge";
import useScroll from "@/hooks/use-scroll";

export default function Experience() {
  const [, y] = useScroll();


  const title = getLang("EXPERIENCE_TITLE")();
  const badge = getLang("EXPERIENCE_BADGE")();

  return <section
    className="section flex flex-col gap-5 transition-transform"
    id="experience">
    <TitleBadge>{badge}</TitleBadge>
    <Title>{title}</Title>
    <div style={{ width: Math.max(0, y - 1000), height: 1 }} className="bg-foreground max-w-full"></div>
  </section>;
}
