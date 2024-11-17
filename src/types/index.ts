import type { ITechStack } from "@/components/ui/TechStack";
import { MDXProps } from "mdx/types";

export type LangRecord = Record<Uppercase<string>, (...args: string[]) => unknown>;

export type DiscordEmbed = {
  title?: string;
  type?: "rich" | "image" | "video" | "gifv" | "article" | "link" | "poll_result";
  description?: string;
  url?: string;
  timestamp?: string;
  color?: number;
  footer?: {
    text: string;
    icon_url?: string;
    proxy_icon_url?: string;
  };
  image?: {
    url: string;
    proxy_url?: string;
    height?: number;
    width?: number;
  };
  thumbnail?: {
    url: string;
    proxy_url?: string;
    height?: number;
    width?: number;
  };
  video?: {
    url: string;
    proxy_url?: string;
    height?: number;
    width?: number;
  };
  provider?: {
    name?: string;
    url?: string;
  };
  author?: {
    name: string;
    url: string;
    icon_url?: string;
    proxy_icon_url?: string;
  };
  fields?: {
    name: string;
    value: string;
    inline?: boolean;
  }[];
};

export type DiscordWebhookExecuteParams = {
  content?: string;
  username?: string;
  avatar_url?: string;
  tts?: string;
  embeds?: DiscordEmbed[];
}

export type ProjectList = {
  name: string;
  summary: string;
  imagePath: string;
  stacks: (keyof ITechStack)[];
  links: [name: string, href: string][];
}

export type Experience = {
  when: [from: Date, to: Date | "now"];
  as: string;
  place: string;
  at: string;
  does: string[];
  imagePath: string;
}

export type BlogContentMetadata = {
  title: string;
  description: string;
  pubDate: string;
  updatedDate?: string;
  thumbnail: string;
  showTOC?: boolean;
}

export type ContentsCollection = Record<string, {
  metadata: BlogContentMetadata;
  component: (props: MDXProps) => JSX.Element;
  category: string;
}>

export type TOCList = {
  name: string;
  href: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}
