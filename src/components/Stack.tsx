import { getLang } from "@/langs";
import Title from "./ui/Title";
import TitleBadge from "./ui/TitleBadge";
import techStack from "./ui/TechStack";
import StackIcon from "./ui/StackIcon";

export default function Stack() {
  const title = getLang("STACK_TITLE")();
  const badge = getLang("STACK_BADGE")();

  return <section
    className="section flex flex-col gap-2.5"
    id={Stack.sectionId}>
    <TitleBadge>{badge}</TitleBadge>
    <Title>{title}</Title>
    <ul className="grid grid-cols-8 max-md:grid-cols-4 gap-5 mt-2.5">
      {Object.values(techStack)
        .map(x => <li key={x.name}>
          <StackIcon tip={x.name}>
            <x.icon
              width="4.5rem"
              height="4.5rem"
              className="w-full h-full aspect-square"
            />
          </StackIcon>
        </li>)
      }
    </ul>
  </section>;
}

Stack.sectionId = "stack";
