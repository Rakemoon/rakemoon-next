"use client";

import { useOnView } from "@/hooks/use-observer";
import { Experience } from "@/types";
import Card from "./Card";
import Image from "next/image";

type ExperienceTimelineProps = Experience & {
  odd: boolean;
};

function CardExperience(props: ExperienceTimelineProps) {
  const [ref, isOnView] = useOnView<HTMLDivElement>();
  return <Card className={
    "h-full w-full flex flex-col gap-2.5 transition ease-ease-out-back duration-1000 relative " +
    "before:absolute before:bg-transparent before:top-0 before:bottom-0 before:h-0 before:my-auto " +
    `${props.odd ? "before:-left-[10px]" : "before:-right-[10px]"} ` +
    "before:border-t-[10px] before:border-t-transparent " +
    "before:border-b-[10px] before:border-b-transparent " +
    `${props.odd ? "before:border-r-[10px] before:border-r-foreground" : "before:border-l-[10px] before:border-l-foreground"} ` +
    "max-lg:before:border-r-[10px] max-lg:before:border-r-foreground max-lg:before:-left-[10px] max-lg:before:right-[unset] max-lg:before:border-l-[0px] max-lg:before:my-2.5 " +
    (props.odd ? "" : "ml-auto ") +
    (isOnView ? "" : `opacity-0 ${props.odd ? "translate-x-1/2" : "-translate-x-1/2"}`)
  } ref={ref}>
    <h3 className="text-xl font-semibold w-fit">{props.as}</h3>
    <h4 className="text-base font-semibold dark:text-white text-black text-opacity-50">{props.place}</h4>
    <h5 className="text-sm font-semibold dark:text-white text-black text-opacity-50 italic">{props.at}</h5>
    <ul className="list-disc pl-5">
      {props.does.map(x => <li key={x}>{x}</li>)}
    </ul>
  </Card>;
}

function WhenExperience(props: ExperienceTimelineProps) {
  const [ref, isOnView] = useOnView<HTMLSpanElement>();
  return <i ref={ref} className={
    "w-max block my-auto transition ease-ease-out-back duration-1000 " +
    "max-lg:bg-background dark:max-lg:border max-lg:border-dashed max-lg:rounded-md max-lg:p-1 max-lg:text-xs " +
    "dark:shadow-none max-lg:shadow-md shadow-stone-500 " +
    (props.odd ? "ml-auto " : "") +
    (isOnView ? "" : `opacity-0 ${props.odd ? "translate-x-1/2" : "-translate-x-1/2"}`)
  }>
    {props.when.map(formatDate).join(" - ")}
  </i>;
}

function formatDate(date: Date | "now") {
  if (date === "now") return "Now";
  return `${date.toLocaleString("default", { month: "long", year: "numeric" })}`;
}

function CircleExperience(props: ExperienceTimelineProps) {
  const [ref, isOnView] = useOnView<HTMLDivElement>();
  return <div
    className={
      "w-20 min-w-10 max-lg:w-10 aspect-square bg-background rounded-full self-center max-lg:self-start justify-self-center border-[2px] transition duration-1000 overflow-hidden " +
      (isOnView ? "" : "scale-0")
    }
    ref={ref}>
    <Image
      src={props.imagePath + "/thumb.png"}
      alt={props.at}
      width={80}
      height={80}
      className="w-full h-full object-cover block"
    />
  </div>;
}

export default function ExperienceTimeline(props: ExperienceTimelineProps) {
  return <div className={
    `flex ${props.odd ? "flex-row-reverse" : ""} justify-center gap-10 max-lg:flex-row-reverse max-lg:justify-end relative ` +
    "max-lg:gap-3"
  }>
    <div className="w-[45%] max-lg:w-full">
      <CardExperience {...props} />
    </div>
    <CircleExperience {...props} />
    <div className="w-[45%] flex max-lg:absolute max-lg:w-fit max-lg:h-fit max-lg:-top-2 max-lg:right-2">
      <WhenExperience {...props} />
    </div>
  </div>;
}
