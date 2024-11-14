"use client";

import { cn } from "@/util";
import { motion, AnimationProps } from "framer-motion";

type Props = {
  className?: string;
  text: string;
}
export default function AnimatedTitle({ className, text }: Props) {
  return <h2 className={cn(
    "text-ctp-red font-bold text-5xl flex justify-center",
    className
  )}>
    {text.split("").map((x, i) =>
      <motion.span
        className="block"
        whileInView={{
          y: [100, 0],
          opacity: [0, 1]
        }}
        key={x + i}
        transition={{
          delay: i * 0.1,
        } satisfies AnimationProps["transition"]}
      >{x}</motion.span>
    )}
  </h2>;
}
