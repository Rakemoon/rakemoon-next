import { cn } from "@/util"
import Image from "next/image"
import Link from "@/components/v2/Link/Link"

type Props = {
  title: React.ReactNode,
  summary: React.ReactNode,
  link: string,
  image?: string,
}

export default function ArticleCard({ title, summary, link, image }: Props) {
  return <article className={cn(
    "text-ctp-text",
    "relative",
    "group",
  )}>
    <Link href={link}>
      <span className={cn(
        "text-2xl font-semibold"
      )}>{title}</span>
    </Link>
    <p className={cn(
      "my-5 font-normal"
    )}>
      {summary}
    </p>
    <Link href={link}>
      <span className="font-semibold">Read more</span>
    </Link>
    {
      image && <Image
        src={image}
        alt="Post Thumbnail"
        height={16 * 25}
        width={9 * 25}
        className={cn(
          "absolute",
          "rounded-md",
          "border-2 border-ctp-overlay0",
          "bottom-0 right-0",
          "opacity-0",
          "transition",
          "-rotate-12",
          "group-hover:opacity-100",
          "group-hover:-translate-y-viewport",
          "shadow-2xl",
        )}
      />
    }
  </article>
}
