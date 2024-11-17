import { cn } from "@/util";

type Props = {
  children: React.ReactNode;
  className?: string;
}

export default function HalfBleedContainer({ children, className }: Props) {
  return <div className={cn(
    "@container",
    "mb-5",
    "-mx-viewport",
  )}>
    <div className={cn(
      "@[675.75px]:rounded-md",
      "h-full w-full",
      "px-viewport",
      "py-5",
      className
    )}>
      {children}
    </div>
  </div>;
}
