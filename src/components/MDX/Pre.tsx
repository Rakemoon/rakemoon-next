import HalfBleedContainer from "./HalfBleedContainer";

type Props = {
  children: React.ReactNode;
}

export default function Pre({ children }: Props) {
  return <HalfBleedContainer className="bg-ctp-crust">
    <pre className="overflow-auto">
      {children}
    </pre>

  </HalfBleedContainer>
}
