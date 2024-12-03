"use client";

import { ThemeContext } from "@/contexts/ThemeContext"
import { cn } from "@/util";
import { motion } from "framer-motion";
import { useContext } from "react"
import { Moon, Sun } from "react-feather";

export default function ThemeButton() {
  const ctx = useContext(ThemeContext);
  const isDark = ctx?.getTheme() === "dark";

  return <button
    className={cn(
      "grid",
      "[&>*]:col-[1/-1]",
      "[&>*]:row-[1/-1]",
    )}
    onClick={() => ctx?.setTheme(isDark ? "light" : "dark")}>
    <motion.div
      initial={{ scale: +isDark }}
      animate={{ scale: +isDark }}
    ><Moon /></motion.div>
    <motion.div
      initial={{ scale: +!isDark }}
      animate={{ scale: +!isDark }}
    ><Sun /></motion.div>
  </button>;
}
