"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { cn } from "@/util";
import { Hash } from "react-feather";

type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children?: React.ReactNode;
  headCount?: number;
}

export default function Heading({ level, children, headCount }: Props) {
  switch (level) {
    case 1: return <h1 className="text-4xl">{children}</h1>;
    case 2: return <Heading2 headCount={headCount}>{children}</Heading2>;
    case 3: return <h3 className="text-2xl">{children}</h3>;
    case 4: return <h4 className="text-xl">{children}</h4>;
    case 5: return <h5 className="text-lg">{children}</h5>;
    case 6: return <h6 className="text-md">{children}</h6>;
  }
}

export function Heading2({ children, headCount }: Omit<Props, "level">) {
  const id = (children!.toString().toLowerCase().replaceAll(" ", "-") + "-" + headCount)
  const springEase = useSpring(0, {
    duration: 1,
  });
  const x = useTransform(() => `${(1 - springEase.get()) * 100}%`);
  const rotate = useTransform(() => `${(1 - springEase.get()) * 180}deg`);

  return <h2
    id={id}
    onMouseEnter={() => springEase.set(1)}
    onMouseLeave={() => springEase.set(0)}
    className={cn(
      "font-semibold",
      "text-3xl my-5",
      "flex",
      "items-center",
      "gap-1",
      "text-ctp-red",
    )}>
    <motion.a
      whileHover={{ scale: 1.2 }}
      style={{ x, opacity: springEase, rotate }}
      className={cn(
        "-ml-7",
        "mt-1.5",
        "transition",
        "block"
      )}
      href={`#${id}`}
    >
      <Hash />
    </motion.a>
    <span>{children}</span>
  </h2>;
}
