import Image from "next/image";
import Card from "./Card";
import Description from "./Description";
import Link from "next/link";
import { ProjectList } from "@/types";

type ProjectCardProps = ProjectList;

const size = 100;

export default function ProjectCard({ name, summary, imagePath, stacks, links }: ProjectCardProps) {
  return <Card className="gap-5 hover:-translate-y-1 transition w-full">
    <Image
      src={imagePath + "/thumb.png"}
      alt={name}
      width={16 * size}
      height={9 * size}
      className="aspect-video rounded-md"
    />
    <div>
      <h3 className="font-semibold text-2xl">{name}</h3>
      <Description>{summary}</Description>
    </div>

    <div className="flex gap-1 flex-wrap text-white text-opacity-50 text-sm">
      {stacks.map(x => <span key={x}>#{x}</span>)}
    </div>

    <div className="flex gap-2.5 mt-auto flex-wrap">
      {links.map(([name, href]) => <ProjectButton text={name} link={href} key={href} />)}
    </div>
  </Card>;
}

function ProjectButton({ text, link }: { text: string, link: string }) {
  return <Link href={link} target="_blank" className="border py-1 px-2.5 rounded-md border-dashed text-sm">{text}</Link>;
}