import type { MDXComponents } from "mdx/types";
import Heading from "./components/MDX/Heading";
import Paragraph from "./components/MDX/Paragraph";
import Image from "./components/MDX/Image";
import Pre from "./components/MDX/Pre";
import Blockquote from "./components/MDX/Blockquote";
import Table from "./components/MDX/Table";
import OrderedList from "./components/MDX/OrderedList";
import UnorderedList from "./components/MDX/UnorderedList";
import Code from "./components/MDX/Code";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  let headCount = 0;
  const generateId = (children: React.ReactNode) => {
    const id = (children!.toString().toLowerCase().replaceAll(" ", "-") + "-" + ++headCount);
    return id;
  };
  return {
    ...components,
    h1: props => <Heading level={1} id={generateId(props.children)}>{props.children}</Heading>,
    h2: props => <Heading level={2} id={generateId(props.children)}>{props.children}</Heading>,
    h3: props => <Heading level={3} id={generateId(props.children)}>{props.children}</Heading>,
    h4: props => <Heading level={4} id={generateId(props.children)}>{props.children}</Heading>,
    h5: props => <Heading level={5} id={generateId(props.children)}>{props.children}</Heading>,
    h6: props => <Heading level={6} id={generateId(props.children)}>{props.children}</Heading>,

    p: props => <Paragraph>{props.children}</Paragraph>,
    img: props => <Image src={props.src!} alt={props.alt!} />,
    pre: props => <Pre>{props.children as never}</Pre>,
    blockquote: props => <Blockquote {...props}>{props.children}</Blockquote>,
    table: props => <Table>{props.children}</Table>,
    thead: props => <Table.Head>{props.children}</Table.Head>,
    tbody: props => <Table.Body>{props.children}</Table.Body>,
    th: props => <Table.CellHeader>{props.children}</Table.CellHeader>,
    td: props => <Table.Data>{props.children}</Table.Data>,
    tr: props => <Table.Row>{props.children}</Table.Row>,
    ol: props => <OrderedList>{props.children}</OrderedList>,
    ul: props => <UnorderedList>{props.children}</UnorderedList>,

    code: props => <Code language={props.className}>{props.children}</Code>
  }
}
