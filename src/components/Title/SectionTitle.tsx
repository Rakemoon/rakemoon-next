import { cn } from "@/util";

type Props = {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className }: Props) {
  return <h2 className={cn(
    "text-ctp-maroon",
    "font-medium",
    className
  )}>{children}</h2>
}
