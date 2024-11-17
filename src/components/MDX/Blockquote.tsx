"use client";

import { cn } from "@/util";
import HalfBleedContainer from "./HalfBleedContainer";

type Props = {
  children: React.ReactNode;
}

export default function Blockquote({ children }: Props) {

  return <HalfBleedContainer className={cn(
    "bg-ctp-sky bg-opacity-10",
    "border-l-4 border-ctp-sky",
    "pb-0"
  )}>
    <blockquote>
      {children}
    </blockquote>
  </HalfBleedContainer>;
}
