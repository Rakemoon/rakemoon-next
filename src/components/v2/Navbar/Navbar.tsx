import { cn } from "@/util";
import { Moon } from "react-feather";

type Props = {
  className?: string;
}

export default function Navbar({ className }: Props) {
  return <nav className={cn(
    "sticky top-0 w-full z-20 backdrop-blur",
    "flex",
    "justify-evenly",
    "items-center",
    "py-viewport",
    className
  )}>
    <div className={cn(
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
    </div>
    <ul className={cn(
      "flex",
      "gap-2.5",
      "h-full",
      "text-ctp-text",
      "max-sm:hidden",
      "items-center",
    )}>
      <li>Categories</li>
      <li>About</li>
    </ul>
  </nav>
}
