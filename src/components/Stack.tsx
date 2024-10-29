import { getLang } from "@/langs";
import Title from "./ui/Title";
import TitleBadge from "./ui/TitleBadge";
import techStack from "./ui/TechStack";

export default function Stack() {
  const title = getLang("STACK_TITLE")();
  const badge = getLang("STACK_BADGE")();

  return <section
    className="section flex flex-col gap-2.5"
    id={Stack.sectionId}>
    <TitleBadge>{badge}</TitleBadge>
    <Title>{title}</Title>
    <ul className="flex gap-5 mt-2.5 flex-wrap max-w-[40rem]">
      {Object.values(techStack)
        .map(x => <li key={x.name} className="relative group">
          <span className="absolute -top-1/2 left-0 right-0 text-center bg-background rounded-md border text-xs p-1 scale-0 group-hover:scale-100 transition">
            {x.name}
          </span>
          <x.icon
            width="4.5rem"
            height="4.5rem"
          />
        </li>)
      }
    </ul>
  </section>;
}

Stack.sectionId = "stack";
