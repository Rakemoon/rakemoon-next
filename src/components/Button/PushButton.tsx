import { cn } from "@/util";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function PushButton({ className, children, ...props }: Props) {
  return <button
    {...props}
    className={cn(
      "text-ctp-base",
      "font-semibold",
      "isolate",
      "grid",
      "group",
      className,
    )}>
    <div className={cn(
      "col-[1/-1]",
      "row-[1/-1]",
      "w-full",
      "h-full",
      "rounded-md",
      "bg-ctp-red/20",
    )}></div>
    <div className={cn(
      "col-[1/-1]",
      "row-[1/-1]",
      "bg-ctp-red",
      "w-full",
      "h-full",
      "p-2",
      "rounded-md",
      "-translate-y-1",
      "group-active:translate-y-0",
      "transition-transform",
    )}>{children}</div>
  </button>
}
