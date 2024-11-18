import { cn } from "@/util";

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">;

export default function DemoRange({ className, ...props }: Props) {

  return <input
    {...props}
    className={cn(
      "appearance-none",
      "bg-transparent",
      "[&::-webkit-slider-runnable-track]:bg-ctp-base",
      "[&::-webkit-slider-runnable-track]:h-1",
      "[&::-webkit-slider-runnable-track]:rounded-full",
      "[&::-webkit-slider-runnable-track]:cursor-pointer",
      "[&::-webkit-slider-thumb]:appearance-none",
      "[&::-webkit-slider-thumb]:bg-ctp-red",
      "[&::-webkit-slider-thumb]:h-4",
      "[&::-webkit-slider-thumb]:w-1/5",
      "[&::-webkit-slider-thumb]:-mt-1.5",
      "[&::-webkit-slider-thumb]:rounded-full",
      "[&::-webkit-slider-thumb]:active:bg-ctp-blue",
      "[&::-webkit-slider-thumb]:cursor-grab",
      "[&::-webkit-slider-thumb]:active:cursor-grabbing",
      "[&::-moz-range-track]:bg-ctp-base",
      "[&::-moz-range-track]:h-1",
      "[&::-moz-range-track]:rounded-full",
      "[&::-moz-range-track]:cursor-pointer",
      "[&::-moz-range-thumb]:appearance-none",
      "[&::-moz-range-thumb]:bg-ctp-red",
      "[&::-moz-range-thumb]:h-4",
      "[&::-moz-range-thumb]:w-1/5",
      "[&::-moz-range-thumb]:-mt-1.5",
      "[&::-moz-range-thumb]:rounded-full",
      "[&::-moz-range-thumb]:active:bg-ctp-blue",
      "[&::-moz-range-thumb]:cursor-grab",
      "[&::-moz-range-thumb]:active:cursor-grabbing",
      "mb-5",
      className,
    )}
    type="range"
  />
}
