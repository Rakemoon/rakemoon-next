import { getLang } from "@/langs";
import Title from "./ui/Title";
import TitleBadge from "./ui/TitleBadge";
import type { Experience } from "@/types";
import ExperienceTimeline from "./ui/ExperienceTimeline";


export default function Experience() {
  const title = getLang("EXPERIENCE_TITLE")();
  const badge = getLang("EXPERIENCE_BADGE")();
  const experiences = getLang("EXPERIENCE_ITEMS")();

  return <section
    className="section flex flex-col gap-5 transition-transform overflow-x-hidden"
    id="experience">
    <TitleBadge>{badge}</TitleBadge>
    <Title>{title}</Title>

    <ul className={
      "flex flex-col gap-10 relative " +
      "before:absolute before:inset-0 before:mx-auto before:w-[4px] before:bg-foreground " +
      "before:h-full before:-z-10 max-lg:before:mx-[1.17rem]"
    }>
      {experiences
        .map((x, i) => <li
          key={x.place}>
          <ExperienceTimeline
            {...x}
            odd={!!(i & 1)} />
        </li>
        )}
    </ul>
  </section>;
}

