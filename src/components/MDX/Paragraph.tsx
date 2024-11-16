type Props = {
  children: React.ReactNode;
}

export default function Paragraph({ children }: Props) {
  return <p className="pb-5">{children}</p>;
}
