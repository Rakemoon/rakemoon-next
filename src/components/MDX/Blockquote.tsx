"use client";

import { cn } from "@/util";
import HalfBleedContainer from "./HalfBleedContainer";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
}

export default function Blockquote({ children }: Props) {
  const ref = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    console.log(ref.current?.innerText);
  }, []);

  return <HalfBleedContainer className={cn(
    "bg-ctp-sky bg-opacity-10",
    "border-l-4 border-ctp-sky",
    "pb-0"
  )}>
    <blockquote ref={ref}>
      {children}
    </blockquote>
  </HalfBleedContainer>;
}
