"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { cn } from "@/util";
import { Hash } from "react-feather";

type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children?: React.ReactNode;
  id?: string;
}

export default function Heading({ level, children, id }: Props) {
  switch (level) {
    case 1: return <h1 id={id} className="text-4xl mb-5">{children}</h1>;
    case 2: return <Heading2 id={id}>{children}</Heading2>;
    case 3: return <h3 id={id} className="text-2xl mb-5">{children}</h3>;
    case 4: return <h4 id={id} className="text-xl mb-5">{children}</h4>;
    case 5: return <h5 id={id} className="text-lg mb-5">{children}</h5>;
    case 6: return <h6 id={id} className="text-md mb-5">{children}</h6>;
  }
}

export function Heading2({ children, id }: Omit<Props, "level">) {
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
      "text-3xl mb-5",
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
