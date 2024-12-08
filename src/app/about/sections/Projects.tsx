"use client";

import ProjectCard from "@/components/Card/ProjectCard";
import SkyLine from "@/components/Textures/Skyline";
import Stars from "@/components/Textures/Stars";
import AnimatedTitle from "@/components/Title/AnimatedTitle";
import { getLang } from "@/langs";
import { cn } from "@/util";
import { useRef } from "react";

const projects = getLang("PROJECT_ITEMS")();

export default function Projects() {
  const ref = useRef<HTMLElement>(null);


  return <section
    ref={ref}
    id="projects"
    className={cn(
      "min-h-screen",
      "bg-gradient-to-b",
      "dark:from-ctp-peach",
      "dark:to-ctp-teal",
      "from-ctp-surface2",
      "to-ctp-surface2",
      "via-ctp-mantle",
      "relative",
      "flex",
      "flex-col",
      "isolate",
    )}>
    <Stars starsAmount={100} className="absolute inset-0 w-full h-full text-ctp-text -z-10" />
    <SkyLine className="rotate-180 -translate-y-[1px]" />
    <AnimatedTitle text="Projects" className="dark:!text-ctp-text drop-shadow-md" />
    {/* items */}
    <div className="max-w-full self-center rounded-md my-56 z-10">
      <div
        className={cn(
          "mt-5",
          "grid",
          "grid-cols-3",
          "gap-5 px-viewport",
          "max-sm:grid-cols-1",
          "max-lg:grid-cols-2",
        )}
      >
        {projects.map(x =>
          <ProjectCard
            className="w-full"
            key={x.name} {...x} />
        )}
      </div>
    </div>
    {/* items */}
    <SkyLine className="-mb-px" />
  </section>
}
