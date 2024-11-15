"use server";

import contents from "@/blogs";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import { cn } from "@/util";
// import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage(props: Props) {
  const { slug } = await props.params;
  const content = contents[slug as keyof typeof contents];
  if (!content) return notFound();

  return <main className="min-h-screen">
    <Navbar />
    <Header className="flex-col gap-5 !items-center max-lg:justify-center">
      <div className={cn(
        "m-viewport",
        "z-10",
        "flex",
        "flex-col",
        "text-ctp-text",
      )}>
        <span className={cn(
          "text-5xl font-semibold"
        )}>{content.metadata.title}</span>
        <p><i>Filed under</i> <strong>{content.category}</strong> on <strong>{formatDate(new Date(content.metadata.pubDate))}</strong></p>
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
    <div className={cn(
      "text-ctp-text",
      "grid",
      "grid-cols-[1fr_min(calc(100%-theme('spacing.viewport')*2),_70ch)_1fr]",
      "[&>*]:[grid-column:2]",
      "[&>h2]:text-3xl",
      "[&>h2]:my-5",
      "[&>p]:mb-5",
      "gap-x-viewport",
    )}>
      <content.component />
    </div>
    <Footer />
  </main>
}

function formatDate(date: Date | "now") {
  if (date === "now") return "Now";
  return `${date.toLocaleString("default", {
    month: "long", year: "numeric", day: "2-digit"
  })}`;
}
