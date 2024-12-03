"use client"

import techStack from "@/components/ui/TechStack";
import AnimatedTitle from "@/components/Title/AnimatedTitle";
import { cn } from "@/util";
import { motion } from "framer-motion";


export default function TechStack() {
  return <section id="tech-stack" className="flex flex-col overflow-hidden">
    <AnimatedTitle text="Tech Stack" className="!text-ctp-teal" />
    <motion.ul
      whileInView={{
        x: ["100%", "-100%", "100%"]
      }}
      transition={{
        duration: 50,
        repeat: Infinity,
      }}
      className={cn(
        "place-content-center",
        "p-viewport",
        "gap-5",
        "my-auto",
        "flex",
      )}>
      {Object
        .entries(techStack)
        .map(([k, v]) => <li
          key={k}
        >
          <v.icon
            width="10rem"
            height="10rem"
            className={cn(
              "shadow-md",
              "bg-ctp-crust",
              "p-2",
              "rounded-md",
              "dark:bg-transparent",
              "dark:shadow-none",
              "dark:rounded-none"
            )}
          />
        </li>)
      }
    </motion.ul>
  </section>;
}
