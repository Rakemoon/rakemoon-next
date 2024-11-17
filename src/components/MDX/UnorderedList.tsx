type Props = {
  children: React.ReactNode;
}

export default function UnorderedList({ children }: Props) {
  return <ul className="mb-5 list-disc ml-5 marker:text-ctp-red">{children}</ul>;
}
