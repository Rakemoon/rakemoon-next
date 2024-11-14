import { ProjectList } from "@/types"
import SectionTitle from "../Title/SectionTitle";
import { cn } from "@/util";
import Image from "next/image";
import LinkOnList from "../Link/LinkOnList";

type Props = ProjectList & {
  className?: string;
};

export default function ProjectCard(props: Props) {
  return <div
    className={cn(
      "dark:bg-ctp-base",
      "backdrop-blur",
      "dark:backdrop-blur-none",
      "p-5",
      "text-ctp-text",
      "rounded-md",
      "flex",
      "flex-col",
      "gap-1",
      "dark:border dark:border-ctp-overlay2",
      "shadow-md dark:shadow-none",
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
    <SectionTitle className="mt-5">{props.name}</SectionTitle>
    <p className="mb-5">{props.summary}</p>
    <p className="flex flex-wrap gap-1 mt-auto">{props.stacks.map(x => <span key={x}>#{x}</span>)}</p>
    <ul className="pl-viewport mt-5">
      {props.links.map(([name, href]) => <li key={name}>
        <LinkOnList href={href}>{name}</LinkOnList>
      </li>)}
    </ul>
  </div>
}
