"use client";

import ProjectCard from "@/components/v2/Card/ProjectCard";
import SkyLine from "@/components/v2/Textures/Skyline";
import AnimatedTitle from "@/components/v2/Title/AnimatedTitle";
import { getLang } from "@/langs";
import { cn } from "@/util";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = getLang("PROJECT_ITEMS")();

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const translateXBottom = useTransform(() => {
    const value = springProgress.get();
    return `-${(1 - value) * 100}%`;
  });

  const translateXTop = useTransform(() => {
    const value = springProgress.get();
    return `-${value * 100}%`;
  });

  const translateCard = useTransform(springProgress, [0, 1], [100, -100]);

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
    )}>
    <div className="-mt-1 sticky -top-1 overflow-hidden w-full">
      <motion.div
        className="flex"
        style={{ x: translateXTop }}
      >
        <SkyLine className="rotate-180 w-full shrink-0" />
        <SkyLine className="rotate-180 w-full shrink-0 -ml-1" />
      </motion.div>
    </div>
    {/* items */}
    <div className="max-w-full self-center rounded-md my-56 z-10">
      <AnimatedTitle text="Projects" className="dark:!text-ctp-text drop-shadow-md" />
      <motion.div
        className={cn(
          "mt-5",
          "grid",
          "grid-cols-3",
          "gap-5 px-viewport",
          "max-sm:grid-cols-1",
          "max-lg:grid-cols-2",
        )}
        transition={{ delay: 0 }}
        style={{ translateY: translateCard }}
      >
        {projects.map(x =>
          <ProjectCard
            className="w-full"
            key={x.name} {...x} />
        )}
      </motion.div>
    </div>
    {/* items */}
    <div className="mt-auto sticky -bottom-1 overflow-hidden w-full">
      <motion.div
        className="flex"
        style={{ x: translateXBottom }}
      >
        <SkyLine className="w-full shrink-0" />
        <SkyLine className="w-full shrink-0 -ml-1" />
      </motion.div>
    </div>
  </section>
}
