import { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
}

export default function Title({ children }: TitleProps) {
  return <h2 className="text-4xl font-bold">
    {children}
  </h2>;
}
