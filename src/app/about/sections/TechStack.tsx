"use client"

import techStack from "@/components/ui/TechStack";
import AnimatedTitle from "@/components/Title/AnimatedTitle";
import { cn } from "@/util";
import { motion } from "framer-motion";


export default function TechStack() {
  return <section id="tech-stack" className="min-h-screen flex flex-col">
    <AnimatedTitle text="Tech Stack" className="!text-ctp-teal" />
    <ul
      className={cn(
        "grid",
        "grid-cols-8",
        "place-content-center",
        "p-viewport",
        "gap-5",
        "my-auto",
        "max-lg:grid-cols-5",
        "max-sm:grid-cols-4",
      )}>
      {Object
        .entries(techStack)
        .map(([k, v]) => <motion.li
          whileInView={{ rotate: [180, 0], scale: [0, 1] }}
          transition={{ duration: 0.5 }}
          key={k}
        >
          <v.icon
            width="10rem"
            height="10rem"
            className={cn(
              "w-full h-full",
              "shadow-md",
              "bg-ctp-crust",
              "p-2",
              "rounded-md",
              "dark:bg-transparent",
              "dark:shadow-none",
              "dark:rounded-none"
            )}
          />
        </motion.li>)
      }
    </ul>
  </section>;
}
