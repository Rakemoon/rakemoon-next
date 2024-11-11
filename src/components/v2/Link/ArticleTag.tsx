import { cn } from "@/util";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: URL | string;
}

export default function ArticleTag({ children, href }: Props) {
  return <Link
    href={href}
    className={cn(
      "px-2 py-1",
      "text-ctp-subtext0",
      "font-medium",
      "border-2",
      "border-ctp-overlay0",
      "rounded-md"
    )}
  >
    {children}
  </Link>;
}
