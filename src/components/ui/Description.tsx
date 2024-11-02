import { ReactNode } from "react"

type DescriptionProps = {
  children: ReactNode;
};

export default function Description({ children }: DescriptionProps) {
  return <div className="flex flex-col gap-5">
    {children instanceof Array ? children.map(x => <Pharagraph key={x}>{x}</Pharagraph>) : <Pharagraph>{children}</Pharagraph>}
  </div>
}

function Pharagraph({ children }: DescriptionProps) {
  return <p className="text-base font-medium dark:text-white text-foreground text-opacity-50">{children}</p>;
}
