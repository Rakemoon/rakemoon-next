"use client";

import IndonesiaFlag from "@/components/v2/Textures/IndonesiaFlag";
import AnimatedTitle from "@/components/v2/Title/AnimatedTitle";
import { getLang } from "@/langs";
import { cn } from "@/util";
import { motion, AnimationProps } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const overviewDescription = getLang("OVERVIEW_DESCRIPTION")();

type GridItemProps = {
  className?: string;
  children?: React.ReactNode;
  innerClassName?: string;
}

function GridItem({ className, children, innerClassName }: GridItemProps) {
  return <div
    className={cn(
      "border-4",
      "hover:z-20 border-dashed border-ctp-sky rounded-md",
      "flex",
      className
    )}>
    <motion.div
      whileInView={{
        opacity: [0, 1],
      } satisfies AnimationProps["animate"]}
      transition={{
        duration: 0.5,
      } satisfies AnimationProps["transition"]}
      whileHover={{
        x: -10,
        y: -10,
      } satisfies AnimationProps["animate"]}
      className={cn(
        "bg-ctp-surface2",
        "dark:bg-ctp-crust",
        "rounded-md grow",
        "-m-[4px]",
        "shadow-md",
        innerClassName,
      )}>
      {children}
    </motion.div>
  </div>

}

export default function Overview() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      console.log(coords);
    });
  }, []);
  return <section
    id="overview"
    className="flex flex-col items-center text-ctp-text"
  >
    <div
      className={cn(
        "min-h-screen",
        "max-w-[150ch]",
        "grid",
        "grid-cols-12",
        "grid-rows-6",
        "gap-4",
        "p-1",
        "my-20"
      )}
    >
      <GridItem
        className={cn(
          "col-span-10",
          "row-span-4",
        )}
        innerClassName={cn(
          "p-viewport",
          "flex flex-col gap-5",
          "relative"
        )}>
        <AnimatedTitle
          text="Overview"
          className={cn(
            "absolute",
            "-top-11"
          )}
        />
        {overviewDescription.map(x => <p
          className="font-semibold text-lg"
          key={x}>
          {x}
        </p>)}
        <motion.div
          initial={{
            transformOrigin: "bottom right",
          } satisfies AnimationProps["initial"]}
          whileInView={{
            rotateZ: [0, 45, 0],
          } satisfies AnimationProps["animate"]}
          transition={{
            duration: 1,
            repeat: Infinity,
          } satisfies AnimationProps["transition"]}
          className={cn(
            "mt-auto",
            "self-end",
            "text-7xl",
            "w-max",
            "h-max"
          )}
        >{"👋"}</motion.div>
      </GridItem>
      <GridItem className={cn(
        "col-span-2",
        "row-span-2",
        "font-semibold",
      )} innerClassName={cn(
        "p-viewport",
        "flex",
        "flex-col",
        "justify-center",
        "gap-2"
      )}>
        My nationality is <strong>Indonesia</strong>
        <IndonesiaFlag
          segments={20}
          stagger={0.1}
          className={cn(
            "aspect-video",
          )}
        />
      </GridItem>
      <GridItem className={cn(
        "col-span-2",
        "row-span-2",
      )}>
        <Image
          src="https://avatars.githubusercontent.com/u/39423103"
          alt="less handsome guy"
          width={100}
          height={100}
          className="w-full aspect-square rounded-t-md"
        />
        <p className="text-lg font-semibold text-center mt-2">Adzikri Fauzi Shiddiq</p>
      </GridItem>
      <GridItem className={cn(
        "col-span-2",
        "row-span-2",
      )} />
      <GridItem className={cn(
        "col-span-2",
        "row-span-2",
      )} />
      <GridItem className={cn(
        "col-span-2",
        "row-span-2",
      )} />
      <GridItem className={cn(
        "col-span-2",
        "row-span-2",
      )} />
      <GridItem className={cn(
        "col-span-2",
        "row-span-2",
      )} />
      <GridItem className={cn(
        "col-span-2",
        "row-span-2",
      )} />

    </div>
  </section>;
}
