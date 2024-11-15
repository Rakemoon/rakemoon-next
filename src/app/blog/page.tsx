import ArticleCard from "@/components/Card/ArticleCard";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ArticleTag from "@/components/Link/ArticleTag";
import LinkOnList from "@/components/Link/LinkOnList";
import Navbar from "@/components/Navbar/Navbar";
import SectionTitle from "@/components/Title/SectionTitle";
import { cn, range } from "@/util";
import contents from "@/blogs";

export default function HomePageV2() {
  return <main className={cn(
    "grid min-h-screen",
    "grid-rows-[min-content_min-content_1fr_min-content]",
    "grid-cols-[1fr_min(calc(100vw-39ch-theme('spacing.viewport')),_65ch)_min(calc(100vw-70ch-theme('spacing.viewport')*3),_40ch)_1fr]",
    "max-lg:grid-cols-[1fr_min(calc(100%-theme('spacing.viewport')*2),_65ch)_1fr]",
    "gap-x-viewport"
  )}>
    <Navbar className={cn(
      "[grid-column:1/-1]",
    )} />
    <Header className="[grid-column:1/-1]" />
    <div className={cn(
      "bg-ctp-base rounded-md z-10",
      "[grid-column:2]",
      "-mt-1",
      "-mx-viewport p-viewport",
      "flex gap-viewport flex-col"
    )}>
      <SectionTitle>ARTICLE AND TUTORIALS</SectionTitle>
      {Object.entries(contents).map(([path, data]) => <ArticleCard
        key={path}
        title={data.metadata.title}
        link={`/blog/${path}`}
        summary={data.metadata.description}
        image={data.metadata.thumbnail}
      />
      )}
    </div>
    <div className={cn(
      "bg-ctp-base",
      "max-lg:hidden",
      "rounded-md",
      "p-viewport",
      "flex flex-col gap-viewport",
      "-mr-viewport",
    )}>
      <SectionTitle>BROWSE BY CATEGORY</SectionTitle>
      <div className="flex flex-wrap gap-2.5">
        <ArticleTag href="/">CSS</ArticleTag>
        <ArticleTag href="/">React</ArticleTag>
        <ArticleTag href="/">Animation</ArticleTag>
        <ArticleTag href="/">Career</ArticleTag>
        <ArticleTag href="/">Javascript</ArticleTag>
        <ArticleTag href="/">Next.Js</ArticleTag>
        <ArticleTag href="/">General</ArticleTag>
      </div>
      <div className="flex flex-col gap-4 sticky top-32">
        <SectionTitle>POPULAR CONTENT</SectionTitle>
        <ul className="gap-2 flex flex-col">
          {
            [...range(1)].map(x => <li key={x}>
              <LinkOnList href="/">Lorem Ipsum Dolor Sit Amet</LinkOnList>
            </li>)
          }
        </ul>
      </div>
    </div>
    <Footer className="[grid-column:1/-1]" />
  </main>;
}
