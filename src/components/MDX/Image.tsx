import { default as NextImage } from "next/image"

type Props = {
  src: string;
  alt: string;
};

export default function Image(props: Props) {
  return <NextImage
    {...props}
    width={0}
    height={0}
    sizes="100vw"
    className="rounded-md w-full h-auto dark:border-2 border-ctp-overlay0 dark:shadow-none shadow-md"
  />;
}
