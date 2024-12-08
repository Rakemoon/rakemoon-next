import { cn } from "@/util";
import { forwardRef } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>

const TextInput = forwardRef<HTMLInputElement, Props>(
  function TextInput({ className, ...props }: Props, ref) {
    return <input
      className={cn(
        "rounded-md",
        "p-2.5",
        "dark:bg-ctp-crust",
        "outline-ctp-sky",
        "outline-offset-2",
        "placeholder:text-ctp-red",
        "text-ctp-sky",
        className,
      )}
      {...props}
      ref={ref}
    />
  }
);

export default TextInput;
