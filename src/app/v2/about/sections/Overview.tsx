"use client";

import IndonesiaFlag from "@/components/v2/Textures/IndonesiaFlag";
import AnimatedTitle from "@/components/v2/Title/AnimatedTitle";
import { getLang } from "@/langs";
import { cn } from "@/util";
import { motion, AnimationProps } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Circle, Triangle, Square } from "react-feather";

// iMPORTANT TODO!
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

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

const LazyMap = dynamic(() => import("@/components/v2/Textures/GeoMap"), {
  ssr: false,
  loading: () => <p className="w-full aspect-video">Loading</p>,
});

export default function Overview() {

  return <section
    id="overview"
    className="flex flex-col items-center text-ctp-text overflow-hidden"
  >
    <div
      className={cn(
        "min-h-screen",
        "max-w-[150ch]",
        "grid",
        "grid-cols-12",
        "grid-rows-[repeat(6,min-content)]",
        "gap-4",
        "my-20",
        "p-2",
      )}
    >
      <GridItem
        className={cn(
          "col-span-10",
          "row-span-4",
          "max-lg:col-span-12",
          "max-lg:row-span-3"
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
        "max-lg:[grid-column:10/13]",
        "max-lg:row-span-1",
        "max-md:[grid-column:1/5]",
        "max-md:[grid-row:4/5]",
        "max-sm:[grid-column:1/7]",
      )} innerClassName={cn(
        "p-viewport",
        "flex",
        "flex-col",
        "justify-center",
        "gap-2",
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
        "max-lg:[grid-column:10/13]",
        "max-lg:row-span-1",
        "max-md:[grid-column:1/5]",
        "max-md:[grid-row:5/6]",
        "max-sm:[grid-row:4/5]",
        "max-sm:[grid-column:7/13]",
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
        "col-span-6",
        "row-span-2",
        "max-lg:[grid-column:1/10]",
        "max-lg:[grid-row:4/6]",
        "max-md:[grid-row:4/6]",
        "max-md:[grid-column:1/13]",
        "max-md:[grid-row:7/10]",
      )} innerClassName="flex flex-col">
        <LazyMap className="w-full rounded-t-md aspect-video shadow-inner" />
        <p className="p-viewport">
          I am from <strong>Bandung</strong>, also known as the City of Flowers <i>(Kota Kembang)</i> in <strong>Indonesia</strong>.
          But now this city has become a paradise for snacks.
        </p>
      </GridItem>
      <GridItem className={cn(
        "col-span-6",
        "row-span-1",
        "max-md:[grid-column:5/13]",
        "max-md:[grid-row:5/6]",
        "max-sm:[grid-column:1/-1]",
      )}
        innerClassName="flex justify-center items-center flex-col gap-5 p-5">
        <p className="text-2xl">Backend Developer</p>
        <div className="flex gap-5">
          <Circle size="3rem" className="text-ctp-red" />
          <Triangle size="3rem" className="text-ctp-green" />
          <Square size="3rem" className="text-ctp-blue" />
        </div>
      </GridItem>

      <GridItem className={cn(
        "col-span-6",
        "row-span-1",
        "max-md:[grid-column:5/13]",
        "max-md:[grid-row:4/5]",
        "max-sm:[grid-row:6/7]",
        "max-sm:[grid-column:1/-1]",
      )}
        innerClassName="flex justify-center items-center flex-col gap-5 p-5">
        <p className="text-2xl">Front Developer</p>
        <div className="grid grid-cols-3 gap-1">
          <div className="bg-ctp-rosewater h-5 w-5"></div>
          <div className="bg-ctp-mauve h-5 w-5"></div>
          <div className="bg-ctp-yellow h-5 w-5"></div>
          <div className="bg-ctp-red h-5 w-5"></div>
          <div className="bg-ctp-blue h-5 w-5"></div>
          <div className="bg-ctp-green h-5 w-5"></div>
          <div className="bg-ctp-rosewater h-5 w-5"></div>
          <div className="bg-ctp-mauve h-5 w-5"></div>
          <div className="bg-ctp-yellow h-5 w-5"></div>
        </div>
      </GridItem>

    </div>
  </section>;
}
