"use client";

import { useOnView } from "@/hooks/use-observer";
import { ReactNode } from "react";

type StackIconProps = {
  children: ReactNode;
  tip: string;
}

export default function StackIcon({ children, tip }: StackIconProps) {
  const [ref, isOnView] = useOnView<HTMLDivElement>();

  return <div
    className={
      "relative group transition duration-1000 drop-shadow-lg " +
      (isOnView ? "" : "opacity-0 translate-y-1/2")
    }
    ref={ref}>

    <span className="absolute -top-4 left-0 right-0 text-center rounded-md dark:border text-xs p-1 scale-0 group-hover:scale-100 transition w-max mx-auto dark:backdrop-blur-sm dark:bg-black bg-stone-100 dark:bg-opacity-50 shadow-sm shadow-stone-500 dark:shadow-none">
      {tip}
    </span>
    {children}
  </div>
}
