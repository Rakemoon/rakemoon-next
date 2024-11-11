import { cn } from "@/util";
import { default as NextLink } from "next/link"

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: URL | string;
};

export default function Link({ children, className, ...props }: Props) {
  return <NextLink
    className={cn(
      "underline",
      "decoration-transparent",
      "hover:decoration-ctp-sky",
      "transition-colors",
      "underline-offset-4",
      className
    )}
    {...props}
  >
    {children}
  </NextLink>;
}
