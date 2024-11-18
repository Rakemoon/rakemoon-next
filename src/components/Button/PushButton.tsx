import { cn } from "@/util";

type Props = React.HTMLAttributes<HTMLButtonElement>;

export default function PushButton({ className, children, ...props }: Props) {
  return <button
    {...props}
    className={cn(
      "text-ctp-base",
      "font-semibold",
      "bg-ctp-red/20",
      "rounded-full",
      "p-2",
      "z-10",
      "relative",
      "before:inset-0",
      "before:absolute",
      "before:w-full",
      "before:h-full",
      "before:bg-ctp-red",
      "before:rounded-full",
      "before:-translate-y-1",
      "before:-z-[1]",
      "active:before:translate-y-0",
      "before:transition",
      className,
    )}>{children}</button>
}
