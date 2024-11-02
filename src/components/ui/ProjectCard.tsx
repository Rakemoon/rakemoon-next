"use client";

import Image from "next/image";
import Card from "./Card";
import Description from "./Description";
import Link from "next/link";
import { ProjectList } from "@/types";
import techStack from "./TechStack";
import { useOnView } from "@/hooks/use-observer";

type ProjectCardProps = ProjectList;

const size = 100;

function LinkIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
      <path strokeDasharray={48} strokeDashoffset={48} d="M11 5h-6v14h14v-6">
        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></animate>
      </path>
      <path strokeDasharray={12} strokeDashoffset={12} d="M13 11l7 -7">
        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="12;0"></animate>
      </path>
      <path strokeDasharray={8} strokeDashoffset={8} d="M21 3h-6M21 3v6">
        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"></animate>
      </path>
    </g>
  </svg>;
}

export default function ProjectCard({ name, summary, imagePath, stacks, links }: ProjectCardProps) {

  const [ref, isOnView] = useOnView<HTMLDivElement>();

  return <Card className={
    "gap-5 transition w-full h-full duration-1000 ease-linear "
    + (isOnView ? "" : "scale-0 rotate-[45deg]")
  } ref={ref}>
    <Image
      src={imagePath + "/thumb.png"}
      alt={name}
      width={16 * size}
      height={9 * size}
      className="aspect-video rounded-md object-cover"
    />
    <div>
      <h3 className="font-semibold text-2xl">{name}</h3>
      <Description>{summary}</Description>
    </div>

    <div className="flex gap-1 flex-wrap-reverse mt-auto">
      {stacks.map(x => {
        const stack = techStack[x];
        return <div
          className="group relative"
          key={x}>
          <span className="absolute -top-5 w-max text-xs bg-background scale-0 p-1 group-hover:scale-100 transition border rounded-md border-dashed z-10 shadow-md dark:shadow-none">{stack.name}</span>
          <stack.icon
            height="2.1rem"
            width="2.1rem"
            className={
              "dark:border rounded-full overflow-hidden p-1 border-dashed drop-shadow-lg"
            }
          />
        </div>;
      })}
    </div>

    <div className="flex gap-2.5 flex-wrap">
      {links.map(([name, href]) => <ProjectButton text={name} link={href} key={href} />)}
    </div>
  </Card>;
}

function ProjectButton({ text, link }: { text: string, link: string }) {
  return <Link href={link} target="_blank" className="dark:border py-1 px-2.5 rounded-md border-dashed text-sm grid grid-cols-[max-content_1fr] items-center gap-2.5 dark:text-white text-foreground text-opacity-50 hover:text-opacity-100 transition shadow-md shadow-stone-200 dark:shadow-none">
    <LinkIcon />
    <span>{text}</span>
  </Link>;
}
