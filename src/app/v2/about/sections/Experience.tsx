"use client";

import ExperienceCard from "@/components/v2/Card/ExperienceCard";
import SkyLine from "@/components/v2/Textures/Skyline";
import AnimatedTitle from "@/components/v2/Title/AnimatedTitle";
import { getLang } from "@/langs";
import { cn } from "@/util";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = getLang("EXPERIENCE_ITEMS")();

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center",]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const hookY = useTransform(() => {
    const rect = ref.current?.getBoundingClientRect().height ?? 0;
    return scaleY.get() * rect;
  });

  return <section
    ref={ref}
    id="experience"
    className={cn(
      "from-ctp-crust to-ctp-crust via-ctp-mauve",
      "min-h-[200svh] bg-gradient-to-l flex flex-col items-center relative justify-start",
      "overflow-hidden",
      "gap-5",
    )}>
    <SkyLine className="absolute top-0 rotate-180 left-0 right-0 w-full max-lg:scale-y-150 max-lg:translate-y-1/4 -mt-1" />
    <SkyLine className="absolute bottom-0 left-0 right-0 mt-2" />
    <AnimatedTitle text="Experiences" className="z-10 !text-ctp-blue" />
    <motion.div className="w-[2px] bg-ctp-base absolute top-0 left-0 right-0 mx-auto h-full" style={{ scaleY, transformOrigin: "top" }}></motion.div>
    <motion.div className="rounded-full w-max bg-ctp-base absolute left-0 right-0 m-auto p-2 animate-pulse" style={{ y: hookY }}>
    </motion.div>
    <div className={cn(
      "gap-5",
      "flex",
      "flex-col",
      "w-[900px]",
      "max-w-full",
      "grow",
      "my-96",
      "max-md:gap-56"

    )}>
      {experiences.map((x, i) => <ExperienceCard
        odd={Boolean(i % 2)}
        className={cn(
          "z-10",
        )}
        key={x.place} {...x}
      />)}
    </div>
  </section>
    ;
}