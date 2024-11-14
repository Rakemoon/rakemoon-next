"use server";

// @ts-expect-error 2614
// frontmatter somehow not provide type
import Blogpost, { frontmatter } from "@/post/misc/first-post.mdx";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage(props: Props) {
  const { slug } = await props.params;

  switch (slug) {
    case "first": return <div>
      <h1>{frontmatter.title}</h1>
      <Blogpost />
    </div>;
    default: return <div>Todo!</div>;
  }
}
