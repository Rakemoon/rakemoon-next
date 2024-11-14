"use client";

import { cn } from "@/util";
import { useScroll, useVelocity, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Moon } from "react-feather";
import Link from "../Link/Link";

type Props = {
  className?: string;
}

export default function Navbar({ className }: Props) {
  const [hide, setHide] = useState(false);
  const { scrollY } = useScroll();
  const velocityFactor = useVelocity(scrollY);

  useEffect(() => {
    const destroyReq = velocityFactor
      .on("change", x => {
        if (x > 0) setHide(true);
        if (x < 0) setHide(false);
      });

    return () => {
      destroyReq();
    }
  })

  return <motion.nav
    className={cn(
      "sticky top-0 w-full z-20 backdrop-blur",
      "flex",
      "justify-evenly",
      "items-center",
      "py-viewport",
      "origin-top",
      className
    )}
    animate={{ opacity: hide ? 0 : 1, scaleY: hide ? 0 : 1 }}
    transition={{ delay: 0.1, duration: 1 }}
  >
    <Link
      href="/"
      className={cn(
        "text-ctp-text",
        "font-bold",
        "text-4xl",
        "relative"
      )}>
      <span>
        RakemOon
      </span>
      <Moon className={cn(
        "text-ctp-sky",
        "absolute",
        "-top-2",
        "-right-2"
      )} />
    </Link>
    <ul className={cn(
      "flex",
      "gap-2.5",
      "h-full",
      "text-ctp-text",
      "max-sm:hidden",
      "items-center",
    )}>
      <li><Link href="/blog">Blog</Link></li>
      <li><Link href="/about">About</Link></li>
    </ul>
  </motion.nav>
}
