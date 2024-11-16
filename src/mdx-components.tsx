import type { MDXComponents } from "mdx/types";
import Heading from "./components/MDX/Heading";
import Paragraph from "./components/MDX/Paragraph";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  let headCount = 0;
  return {
    ...components,
    h1: props => <Heading level={1}>{props.children}</Heading>,
    h2: props => <Heading level={2} headCount={++headCount}>{props.children}</Heading>,
    h3: props => <Heading level={3}>{props.children}</Heading>,
    h4: props => <Heading level={4}>{props.children}</Heading>,
    h5: props => <Heading level={5}>{props.children}</Heading>,
    h6: props => <Heading level={6}>{props.children}</Heading>,

    p: props => <Paragraph>{props.children}</Paragraph>,
  }
}
