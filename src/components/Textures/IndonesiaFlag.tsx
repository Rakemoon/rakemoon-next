"use client";

import { cn, range } from "@/util";
import { AnimationProps, motion } from "framer-motion";

type Props = {
  className?: string;
  segments: number;
  stagger: number;
}

export default function IndonesiaFlag({ className, segments, stagger }: Props) {
  return <div className={cn(
    "flex",
    className,
  )}>
    {[...range(segments)].map(x => <motion.div
      key={x}
      className={cn(
        "grow",
        "[background-image:linear-gradient(to_bottom,red_0%_50%,white_50%_100%)]"
      )}
      whileInView={{
        y: [0, 2, 0, -2, 0]
      } satisfies AnimationProps["animate"]}
      transition={{
        delay: x * stagger,
        repeat: Infinity,
      } satisfies AnimationProps["transition"]}
    >
    </motion.div>)}
  </div>;
}
