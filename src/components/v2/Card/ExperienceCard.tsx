"use client";

import { Experience } from "@/types";
import { cn } from "@/util";
import SectionTitle from "../Title/SectionTitle";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

type Props = Experience & {
  className?: string;
  odd: boolean;
};

export default function ExperienceCard(props: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end", "start"]
  });

  const progressSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progressY = useTransform(progressSpring, [0, 1], [300, 0]);
  const progressRotate = useTransform(() => {
    const add = props.odd ? 3 : -3;
    return (1 - progressSpring.get()) * add;
  });

  return <motion.div
    ref={ref}
    className={cn(
      "bg-ctp-base",
      "max-w-96",
      "p-viewport",
      "text-ctp-text",
      "font-medium text-lg",
      "rounded-md",
      "shadow-md",
      "relative",
      {
        "self-end": props.odd,
        "self-start": !props.odd
      },
      props.className
    )}
    style={{ y: progressY, rotateZ: progressRotate, }}
  >
    <SectionTitle>{props.as}</SectionTitle>
    <p className="text-ctp-subtext0 mt-5 text-base">{props.place}</p>
    <p className="text-ctp-subtext1 text-base">{props.at}</p>
    <ul className="list-disc pl-5 mt-5 text-base">
      {props.does.map(x => <li key={x}>{x}</li>)}
    </ul>
    <p className={cn(
      "absolute -top-10",
      "max-sm:left-0",
      "max-sm:right-0",
      "max-sm:mx-auto",
      "max-sm:w-max",
      {
        "right-10": !props.odd
      }
    )}>
      {props.when.map(formatDate).join(" - ")}
    </p>
    <Image
      src={props.imagePath + "/thumb.png"}
      alt={props.place}
      width={80}
      height={80}
      className={cn(
        {

          "-right-[50px]": !props.odd,
          "-left-[50px]": props.odd,
        },
        "absolute",
        "rounded-md",
        "-top-[50px]",
        "border-2 border-ctp-base",
        "max-sm:left-0",
        "max-sm:right-0",
        "max-sm:mx-auto",
        "max-sm:-bottom-[100px]",
        "max-sm:top-[unset]",
      )}
    />
  </motion.div>
}


function formatDate(date: Date | "now") {
  if (date === "now") return "Now";
  return `${date.toLocaleString("default", { month: "long", year: "numeric" })}`;
}
