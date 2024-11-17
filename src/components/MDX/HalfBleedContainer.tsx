import { cn } from "@/util";

type Props = {
  children?: React.ReactNode;
  className?: string;
  innerHtml?: string;
}

export default function HalfBleedContainer({ children, className, innerHtml }: Props) {
  return <div className={cn(
    "@container",
    "mb-5",
    "-mx-viewport",
  )}>
    {children && <div className={cn(
      "@[675.75px]:rounded-md",
      "h-full w-full",
      "px-viewport",
      "py-5",
      className
    )}>
      {children}
    </div>}
    {innerHtml && <div className={cn(
      "@[675.75px]:rounded-md",
      "h-full w-full",
      "px-viewport",
      "py-5",
      className
    )}
      dangerouslySetInnerHTML={{
        __html: innerHtml
      }}></div>}
  </div>;
}
