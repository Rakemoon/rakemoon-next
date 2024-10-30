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

export default function ProjectCard({ name, summary, imagePath, stacks, links }: ProjectCardProps) {

  const [ref, isOnView] = useOnView<HTMLDivElement>();

  return <Card className={
    "gap-5 transition w-full h-full duration-1000 "
    + (isOnView ? "" : "opacity-0 translate-y-1/2")
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
        return <stack.icon
          key={x}
          height="2.1rem"
          width="2.1rem"
          className="border rounded-full overflow-hidden p-1 border-dashed"
        />;
      })}
    </div>

    <div className="flex gap-2.5 flex-wrap">
      {links.map(([name, href]) => <ProjectButton text={name} link={href} key={href} />)}
    </div>
  </Card>;
}

function ProjectButton({ text, link }: { text: string, link: string }) {
  return <Link href={link} target="_blank" className="border py-1 px-2.5 rounded-md border-dashed text-sm">{text}</Link>;
}
