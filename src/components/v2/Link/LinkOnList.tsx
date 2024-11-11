import { cn } from "@/util";
import Link from "next/link";
import { ArrowRight } from "react-feather";

type Props = {
  children: React.ReactNode;
  href: URL | string;
}

export default function LinkOnList({ children, href }: Props) {
  return <Link
    className={cn(
      "relative",
      "hover:text-ctp-sky",
      "transition",
      "font-medium",
      "text-ctp-subtext0",
    )}
    href={href}
  >
    <ArrowRight
      size="1rem"
      className="absolute top-0 bottom-0 my-auto -left-viewport"
    />
    {children}
  </Link>
}
