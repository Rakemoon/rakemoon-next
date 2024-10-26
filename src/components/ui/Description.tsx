import { ReactNode } from "react"

type DescriptionProps = {
  children: ReactNode;
};

export default function Description({ children }: DescriptionProps) {
  return <p className="text-base font-medium opacity-50">{children}</p>
}
