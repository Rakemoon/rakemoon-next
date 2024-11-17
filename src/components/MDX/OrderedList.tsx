type Props = {
  children: React.ReactNode;
}

export default function OrderedList({ children }: Props) {
  return <ol className="mb-5 list-decimal ml-5 marker:text-ctp-red">
    {children}
  </ol>;
}
