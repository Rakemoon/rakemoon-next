import { ProjectList } from "@/types"
import SectionTitle from "../Title/SectionTitle";
import { cn } from "@/util";
import Image from "next/image";
import LinkOnList from "../Link/LinkOnList";
import techStack from "../ui/TechStack";

type Props = ProjectList & {
  className?: string;
};

export default function ProjectCard(props: Props) {
  return <div
    className={cn(
      "dark:bg-ctp-base",
      "backdrop-blur",
      "dark:backdrop-blur-none",
      "text-ctp-text",
      "rounded-md",
      "dark:border dark:border-ctp-overlay2",
      "shadow-md",
      // "dark:shadow-none",
      "flex",
      "flex-col",
      props.className
    )}>
    <Image
      src={props.imagePath + "/thumb.png"}
      alt={props.name}
      width="500"
      height="0"
      className={cn(
        "rounded-md",
        "h-auto aspect-video"
      )}
    />
    <div className={cn(
      "rounded-md",
      "px-5 py-5",
      "flex",
      "flex-col",
      "grow"
    )}>
      <SectionTitle>{props.name}</SectionTitle>
      <p className="mb-5">{props.summary}</p>
      <p className="flex gap-2 mt-auto flex-wrap-reverse">{props.stacks.map(x => {
        const stack = techStack[x];
        return <stack.icon key={x} className="flex-shrink-0" width="2rem" height="2rem" />
      })}</p>
      <ul className="pl-viewport mt-5">
        {props.links.map(([name, href]) => <li key={name}>
          <LinkOnList href={href}>{name}</LinkOnList>
        </li>)}
      </ul>
    </div>
  </div>
}
