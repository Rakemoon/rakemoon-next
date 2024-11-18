import ShikiContextProvider from "@/contexts/ShikiContext";

type Props = {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: Props) {
  return <ShikiContextProvider>
    {children}
  </ShikiContextProvider>;
}
