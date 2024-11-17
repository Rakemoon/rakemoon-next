import HalfBleedContainer from "./HalfBleedContainer";

type Props = {
  children: React.ReactNode & { props?: { className?: string } };
}

export default function Pre({ children }: Props) {
  if (children?.props?.className?.startsWith("language-")) {
    return <>{children}</>;
  };
  return <HalfBleedContainer className="bg-ctp-crust">
    <pre className="overflow-auto">
      {children}
    </pre>

  </HalfBleedContainer>
}
