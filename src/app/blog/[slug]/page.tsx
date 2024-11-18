"use server";

import contents from "@/blogs";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import TableOfContents from "@/components/Navbar/TableOfContent";
import { cn } from "@/util";
import { Metadata } from "next";
// import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = contents[slug];
  return {
    title: content.metadata.title,
    authors: { name: "Rakemoon", url: "/" },
    description: content.metadata.description,
    openGraph: {
      images: [
        { url: content.metadata.thumbnail },
      ]
    }
  }
}

export default async function BlogPostPage(props: Props) {
  const { slug } = await props.params;
  const content = contents[slug];
  if (!content) return notFound();

  const showTOC = content.metadata.showTOC ?? false;

  return <main className={cn(
    "min-h-screen",
  )}>
    <Navbar />
    <Header className="flex-col gap-5 !items-center max-lg:justify-center">
      <div className={cn(
        "m-viewport",
        "z-10",
        "flex",
        "flex-col",
        "text-ctp-text",
      )}>
        <h1 className={cn(
          "text-5xl font-semibold"
        )}>{content.metadata?.title}</h1>
        <p><i>Filed under</i> <strong>{content.category}</strong> on <strong>{formatDate(new Date(content.metadata?.pubDate))}</strong></p>
      </div>
      {/* <Image */}
      {/*   src={content.metadata.thumbnail} */}
      {/*   alt={content.metadata.title + " Thumbnail"} */}
      {/*   width="300" */}
      {/*   height="100" */}
      {/*   className={cn( */}
      {/*     "z-10", */}
      {/*     "mx-viewport", */}
      {/*     "rounded-md", */}
      {/*     "border-2 border-ctp-overlay0", */}
      {/*   )} */}
      {/* /> */}
    </Header>
    <div className="@container/article">
      <article className={cn(
        "text-ctp-text",
        "grid",
        "grid-cols-[1fr_min(calc(100%-theme('spacing.viewport')*2),_70ch)_1fr]",
        {
          "@[66.25rem]/article:grid-cols-[1fr_min(calc(100%-theme('spacing.viewport')*2),_70ch)_1fr_30ch_1fr]": showTOC,
          "grid-cols-[1fr_min(calc(100%-theme('spacing.viewport')*2),_70ch)_1fr]": showTOC
        },
        "[&>*]:[grid-column:2]",
        "gap-x-viewport",
        "pt-5",
      )}>
        {showTOC && <TableOfContents scrollOffset={0} />}
        <content.component />
      </article>

    </div>
    <Footer />
  </main>;
}

function formatDate(date: Date | "now") {
  if (date === "now") return "Now";
  return `${date.toLocaleString("default", {
    month: "long", year: "numeric", day: "2-digit"
  })}`;
}
