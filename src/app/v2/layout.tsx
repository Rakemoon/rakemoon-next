import "./globals.css";

type Props = {
  children: React.ReactNode,
};

export default function LayoutV2({ children }: Props) {
  return <html>
    <body>
      {children}
    </body>
  </html>
}
